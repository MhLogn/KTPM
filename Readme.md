



# YouTube Clone

A full-stack video sharing platform inspired by YouTube, allowing users to upload, view, like/dislike, and comment on videos. Built using modern web technologies including React, Node.js, and MongoDB.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Team Members](#team-members)
- [Roadmap](#roadmap)
- [License](#license)

---

## Features

- User Registration and Login (JWT-based authentication)
- Upload and stream video files
- View video details and count views
- Like and Dislike functionality
- Comment system (CRUD)
- User channel/profile pages
- Search videos by title
- Responsive UI for mobile/tablet/desktop
- Secure file upload using Multer (with Cloudinary or local)
- Error handling with custom middlewares

---

## Tech Stack

### Frontend (client/)
- React + TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Zustand or Redux Toolkit

### Backend (server/)
- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (video file upload)
- JWT (authentication)
- Cloudinary or Local Storage
- Express Middlewares (auth, validation, errors)

---

## Project Structure

```plaintext
youtube-clone/
│
├── client/                     # React frontend
│   ├── public/                 # Static files
│   ├── src/                    # Components, pages, hooks
│   ├── vite.config.ts          # Vite config
│   └── ...
│
├── server/                     # Express backend
│   ├── controllers/            # Logic handlers
│   ├── routes/                 # API routes
│   ├── models/                 # Mongoose schemas
│   ├── middlewares/            # Authentication & error handlers
│   ├── uploads/                # Local file storage
│   └── server.js               # Server entry point
│
├── .gitignore                  # Ignored files
├── README.md                   # Project documentation
└── package.json                # (Optional) Root dependencies
### - Thành viên trong nhóm gồm:
- |     Họ và tên        | Mã sinh viên  |
- |--------------------- |-------------- |
- |  Hà Mạnh Long        |   23010390    |
- |  Nguyễn Duy Hưng     |   23010368    |
- |  Trần Minh Hiếu      |   23010389    |
- |  Đinh Thị Như Quỳnh  |   23010844    |
