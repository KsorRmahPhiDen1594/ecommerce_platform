import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Filter, Grid, ListFilter, Star, Tag } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import ProductListItem from '@/components/ProductListItem';

const FilterSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className='py-3 border-b border-border/70 dark:border-border/30'>
      <button
        className='flex items-center justify-between w-full mb-2 font-semibold text-left text-md hover:text-primary'
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className='pl-1 space-y-2'>{children}</div>}
    </div>
  );
};

const CategoryPage = () => {
  const { categoryName } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search');

  const [viewMode, setViewMode] = useState('grid');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState('Phổ biến');
  const [priceRange, setPriceRange] = useState([0, 50000000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const pageTitle = categoryName
    ? categoryName
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : searchTerm
      ? `Kết quả cho "${searchTerm}"`
      : 'Tất Cả Sản Phẩm';

  // 🔹 GỌI API backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = 'http://localhost:8080/api/products';
        const params = [];
        if (categoryName) params.push(`category=${categoryName}`);
        if (searchTerm) params.push(`search=${searchTerm}`);
        if (params.length > 0) url += '?' + params.join('&');

        const res = await axios.get(url);
        setProducts(res.data);
        setFilteredProducts(res.data);
      } catch (err) {
        console.error('Lỗi tải sản phẩm:', err);
      }
    };
    fetchProducts();
  }, [categoryName, searchTerm]);

  // 🔹 Lọc và sắp xếp
  useEffect(() => {
    let updated = [...products];

    updated = updated.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (selectedLocations.length > 0)
      updated = updated.filter((p) => selectedLocations.includes(p.location));

    if (selectedRatings.length > 0)
      updated = updated.filter((p) => selectedRatings.some((r) => p.rating >= r));

    switch (sortOption) {
      case 'Giá: Tăng dần':
        updated.sort((a, b) => a.price - b.price);
        break;
      case 'Giá: Giảm dần':
        updated.sort((a, b) => b.price - a.price);
        break;
      case 'Đánh giá cao':
        updated.sort((a, b) => b.rating - a.rating);
        break;
      case 'Bán chạy':
        updated.sort((a, b) => b.soldCount - a.soldCount);
        break;
      default:
        break;
    }

    setFilteredProducts(updated);
  }, [products, priceRange, selectedBrands, selectedLocations, selectedRatings, sortOption]);

  const handleLocationChange = (location) =>
    setSelectedLocations((prev) =>
      prev.includes(location) ? prev.filter((l) => l !== location) : [...prev, location],
    );

  const handleRatingChange = (rating) =>
    setSelectedRatings((prev) =>
      prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating],
    );

  const uniqueLocations = [...new Set(products.map((p) => p.location))];

  return (
    <div className='container mx-auto'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='p-4 mb-6 rounded-lg shadow-sm bg-card dark:bg-slate-800 md:p-6'
      >
        <div className='flex flex-col justify-between md:flex-row md:items-center'>
          <h1 className='mb-2 text-2xl font-bold md:text-3xl md:mb-0'>{pageTitle}</h1>
          <span className='text-sm text-muted-foreground'>{filteredProducts.length} sản phẩm</span>
        </div>
        {searchTerm && (
          <p className='mt-1 text-muted-foreground'>
            Hiển thị kết quả tìm kiếm cho:{' '}
            <span className='font-semibold text-primary'>{searchTerm}</span>
          </p>
        )}
      </motion.div>

      <div className='flex flex-col gap-6 md:flex-row'>
        {/* Bộ lọc */}
        <motion.aside
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className='w-full space-y-1 md:w-1/4 lg:w-1/5'
        >
          <Card className='sticky shadow-md top-24'>
            <CardHeader className='p-4 border-b'>
              <CardTitle className='flex items-center text-lg'>
                <Filter className='w-5 h-5 mr-2 text-primary' /> Bộ lọc tìm kiếm
              </CardTitle>
            </CardHeader>
            <CardContent className='p-4 max-h-[calc(100vh-10rem)] overflow-y-auto'>
              <FilterSection title='Khoảng giá' defaultOpen>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={50000000}
                  step={500000}
                  className='my-3'
                />
                <div className='flex justify-between mt-1 text-xs text-muted-foreground'>
                  <span>{priceRange[0].toLocaleString()}₫</span>
                  <span>{priceRange[1].toLocaleString()}₫</span>
                </div>
              </FilterSection>

              <FilterSection title='Nơi bán'>
                {uniqueLocations.map((loc) => (
                  <div key={loc} className='flex items-center space-x-2'>
                    <Checkbox
                      id={`loc-${loc}`}
                      checked={selectedLocations.includes(loc)}
                      onCheckedChange={() => handleLocationChange(loc)}
                    />
                    <Label htmlFor={`loc-${loc}`} className='text-sm font-normal cursor-pointer'>
                      {loc}
                    </Label>
                  </div>
                ))}
              </FilterSection>

              <FilterSection title='Đánh giá'>
                {[5, 4, 3].map((star) => (
                  <div key={star} className='flex items-center space-x-2'>
                    <Checkbox
                      id={`star-${star}`}
                      checked={selectedRatings.includes(star)}
                      onCheckedChange={() => handleRatingChange(star)}
                    />
                    <Label htmlFor={`star-${star}`} className='flex items-center ml-1 text-sm'>
                      {Array(star)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className='w-4 h-4 text-yellow-400 fill-current' />
                        ))}
                      <span className='ml-1.5'>Từ {star} sao</span>
                    </Label>
                  </div>
                ))}
              </FilterSection>
            </CardContent>
          </Card>
        </motion.aside>

        {/* Danh sách sản phẩm */}
        <main className='w-full md:w-3/4 lg:w-4/5'>
          <div className='flex flex-col items-center justify-between p-3 mb-4 rounded-lg shadow-sm sm:flex-row bg-card dark:bg-slate-800'>
            <div className='flex items-center mb-2 space-x-2 sm:mb-0'>
              <span className='text-sm text-muted-foreground'>Sắp xếp theo:</span>
              {['Phổ biến', 'Bán chạy', 'Giá: Tăng dần', 'Giá: Giảm dần'].map((opt) => (
                <Button
                  key={opt}
                  variant={sortOption === opt ? 'default' : 'ghost'}
                  size='sm'
                  onClick={() => setSortOption(opt)}
                  className={`text-xs md:text-sm px-2 py-1 md:px-3 md:py-1.5 ${
                    sortOption === opt
                      ? 'gradient-highlands text-primary-foreground'
                      : 'text-muted-foreground hover:bg-accent'
                  }`}
                >
                  {opt}
                </Button>
              ))}
            </div>
            <div className='flex items-center space-x-2'>
              <Button
                variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                size='icon'
                onClick={() => setViewMode('grid')}
                className='w-8 h-8 md:h-9 md:w-9'
              >
                <Grid className='w-4 h-4 md:h-5 md:w-5' />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                size='icon'
                onClick={() => setViewMode('list')}
                className='w-8 h-8 md:h-9 md:w-9'
              >
                <ListFilter className='w-4 h-4 md:h-5 md:w-5' />
              </Button>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              className={`grid gap-3 md:gap-4 ${
                viewMode === 'grid'
                  ? 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                  : 'grid-cols-1'
              }`}
            >
              {filteredProducts.map((product) =>
                viewMode === 'grid' ? (
                  <ProductCard key={product.id} product={product} />
                ) : (
                  <ProductListItem key={product.id} product={product} />
                ),
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='py-10 text-center'
            >
              <Tag className='w-20 h-20 mx-auto mb-4 text-muted-foreground/50' />
              <p className='text-xl text-muted-foreground'>Không tìm thấy sản phẩm nào phù hợp.</p>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;
