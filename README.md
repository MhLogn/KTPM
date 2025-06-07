# BÁO CÁO DỰ ÁN: 🎥 YouTube-Clone

Một ứng dụng web mô phỏng nền tảng xem video trực tuyến YouTube, được xây dựng bằng [Next.js](https://nextjs.org), tận dụng kiến trúc hiện đại của React Server Components, App Router và tối ưu hiệu suất với các công cụ hiện đại.

---

##  NHÓM THỰC HÀNH : NHÓM 8
## GV : Trương Anh Hoàng 
## 👥 Thành viên nhóm

| Họ và tên            | Mã sinh viên  |
|----------------------|---------------|
| Hà Mạnh Long         | 23010390      |
| Nguyễn Duy Hưng      | 23010368      |
| Trần Minh Hiếu       | 23010389      |
| Đinh Thị Như Quỳnh   | 23010844      |

📚 Wiki dự án: [Xem tại đây](https://github.com/MhLogn/KTPM/wiki)

---

## Nhiệm Vụ 
| Họ và tên           | Vai trò       | Nhiệm vụ                                                                 |
|---------------------|----------------|--------------------------------------------------------------------------|
| Hà Mạnh Long        | Trưởng nhóm    | - Lên ý tưởng, quản lý tiến độ<br>- Thiết kế database<br>- Setup server backend (API, DB) |
| Nguyễn Duy Hưng     | Thành viên     | - Thiết kế giao diện trang chủ, video player<br>- Giao diện tìm kiếm, danh mục, responsive |
| Đinh Thị Như Quỳnh  | Thành viên     | - Xây dựng API: video, user, comment, like<br>- Hỗ trợ frontend<br>- Viết báo cáo, demo, slide |
| Trần Minh Hiếu      | Thành viên     | - Xác định người dùng (login/register)<br>- Thống kê kết quả, chuẩn bị nộp |

---

## 📚 MỤC LỤC

### I. Giới thiệu chung về dự án
- 1.1 Mục đích
- 1.2 Phạm vi
- 1.3 Công nghệ
- 1.4 Công cụ sử dụng
- 1.5 Tổng quát

### II. Phân tích chức năng
- 2.1 Trang chủ - hiển thị danh sách video
- 2.2 Xem video
- 2.3 Đăng nhập / Đăng ký
- 2.4 Tải video lên
- 2.5 Bình luận & tương tác
- 2.6 Trang kênh cá nhân
- 2.7 Trang kênh cá nhân

### III. Thiết kế hệ thống
- 3.1 Kiến trúc tổng thể
- 3.2 Sơ đồ luồng dữ liệu
- 3.3 Thiết kế cơ sở dữ liệu

### IV. Thiết kế giao diện người dùng (UI/UX)

### V. Mô tả quy trình phát triển

### VI. Kiểm thử và đánh giá

### VII. Khó khăn và hướng giải quyết

### VIII. Kết luận và hướng phát triển

### IX. Tài liệu tham khảo

---
## I. Giới thiệu chung về dự án 
## 1.1 Mục tiêu :

- Nâng cao kỹ năng phát triển phần mềm/ứng dụng web full-stack với Next.js.
- Mô phỏng các chức năng cơ bản của YouTube như: xem video, tìm kiếm, đề xuất, đăng nhập.
- Làm quen với quản lý trạng thái, routing động, và tối ưu hóa SEO.

---

## 1.2 Phạm vi

- Cho phép người dùng đăng nhập / đăng ký tài khoản  
- Xem danh sách video, tìm kiếm video theo từ khóa  
- Phát video, tải video lên  
- Quản lý kênh cá nhân với các video đã tải lên  

---

## 1.3 🛠️ Công nghệ sử dụng

| Công nghệ           | Mô tả |
|---------------------|-------|
| **Next.js 15+**      | Framework chính, hỗ trợ SSR, App Router, Server Actions. |
| **TypeScript**       | Ngôn ngữ chính giúp tăng độ an toàn và dễ bảo trì. |
| **Tailwind CSS**     | Framework CSS tiện lợi, hỗ trợ responsive và thiết kế hiện đại. |
| **Bun**              | Runtime thay thế Node.js để chạy ứng dụng siêu nhanh. |
| **Geist Font**       | Font hiện đại từ Vercel, tối ưu trải nghiệm đọc. |

---

## 1.4 Công cụ sử dụng

| **Công cụ**            | **Mục đích sử dụng**        |
|------------------------|-----------------------------|
| **Visual Studio Code** | Soạn thảo mã nguồn          |
| **GitHub, Git**        | Quản lý phiên bản, lưu trữ mã |
| **Postman**            | Kiểm thử API                |
| **Figma**              | Thiết kế giao diện (UI)     |
| **Vercel, Render**     | Triển khai ứng dụng         |

--- 

## 🚀 Cách chạy dự án

### 1. Clone và cài đặt:

```bash
Clone:
git clone https://github.com/MhLogn/KTPM.git
cd KTPM
```
```bash
Cài đặt:
bun install
bun run dev:all
```

### 2. Push on Github:

```bash
git init 
```
```bash
git pull origin main
```
```bash
git status
```
```bash
git add .
```
```bash
git commit -m "Tên commit"
```
```bash
git push origin main
```
