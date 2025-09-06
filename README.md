# 🛍️ ecommerce-platform

**ecommerce-platform** is a fullstack e-commerce web application with a modern **Next.js** frontend and robust **Spring Boot** backend.  
Built with RESTful architecture, it delivers a seamless and scalable online shopping experience for both users and administrators.

---

## ⚙️ Tech Stack

| Layer     | Technology                            |
|-----------|----------------------------------------|
| Frontend  | Next.js, React, Tailwind CSS (or Bootstrap) |
| Backend   | Java 17+, Spring Boot 3, Spring Security, JPA |
| Database  | MySQL / PostgreSQL                    |
| Auth      | JWT (JSON Web Token)                  |
| API Comm. | RESTful HTTP + CORS                   |
| Tools     | Maven, Axios, Postman                 |

---

## ✨ Features

### 👤 **Customer**
- Register / Login (JWT Auth)
- Browse & search products
- Add to cart, update quantity
- Place orders
- View order history

### 🛠️ **Admin**
- Login securely
- Manage products & categories (CRUD)
- View & update orders

---

## 🧩 Project Structure

ecommerce-platform/
├── backend/ # Spring Boot backend
│ └── src/
├── frontend/ # Next.js frontend
│ └── pages/
└── README.md

yaml
Sao chép mã

---

## 🚀 Getting Started

### 📦 Backend (Spring Boot)

cd backend
./mvnw spring-boot:run
# or
mvn spring-boot:run
Ensure application.properties is configured:

properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce
spring.datasource.username=root
spring.datasource.password=your_password

💻 Frontend (Next.js)
cd frontend
npm install
npm run dev
Set the API base URL in .env.local:

NEXT_PUBLIC_API_URL=http://localhost:8080/api
🧪 Sample API Endpoints
Method	Endpoint	Description
POST	/api/auth/login	User login
GET	/api/products	List all products
POST	/api/orders	Place new order
GET	/api/orders/history	View user orders
GET	/api/admin/products	Admin: view products

🎯 Purpose
This project was built to demonstrate a real-world, scalable e-commerce platform using modern web technologies.
It showcases best practices in:

Fullstack architecture

RESTful API design

Secure user authentication (JWT)

Clean code and modular structure

👨‍💻 Author

Ksor Rmah Phi Đen

Fullstack Developer | Java & React Enthusiast
🌐 https://www.facebook.com/cu.en.135449
📧 phiden1594@gmail.com
