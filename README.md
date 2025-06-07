# BÁO CÁO DỰ ÁN: 🎥 YouTube-Clone

Một ứng dụng web mô phỏng nền tảng xem video trực tuyến YouTube, được xây dựng bằng [Next.js](https://nextjs.org), tận dụng kiến trúc hiện đại của React Server Components, App Router và tối ưu hiệu suất với các công cụ hiện đại.

---

##  👩‍💻👨‍💻 NHÓM THỰC HÀNH : NHÓM 8
## 🎓 GV : Trương Anh Hoàng 
## 👥 Thành viên nhóm

| Họ và tên            | Mã sinh viên  |
|----------------------|---------------|
| Hà Mạnh Long         | 23010390      |
| Nguyễn Duy Hưng      | 23010368      |
| Trần Minh Hiếu       | 23010389      |
| Đinh Thị Như Quỳnh   | 23010844      |

📚 Wiki dự án: [Xem tại đây](https://github.com/MhLogn/KTPM/wiki)

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
##  I. 📢 Giới thiệu chung về dự án 
##  1.1 🎯 Mục tiêu :

- Nâng cao kỹ năng phát triển phần mềm/ứng dụng web full-stack với Next.js.
- Mô phỏng các chức năng cơ bản của YouTube như: xem video, tìm kiếm, đề xuất, đăng nhập.
- Làm quen với quản lý trạng thái, routing động, và tối ưu hóa SEO.

---

## 📐 1.2 Phạm vi

- Cho phép người dùng đăng nhập / đăng ký tài khoản  
- Xem danh sách video, tìm kiếm video theo từ khóa  
- Phát video, tải video lên  
- Quản lý kênh cá nhân với các video đã tải lên  

---

## 1.3 💻 Công nghệ sử dụng

| Công nghệ           | Mô tả |
|---------------------|-------|
| **Next.js 15+**      | Framework chính, hỗ trợ SSR, App Router, Server Actions. |
| **TypeScript**       | Ngôn ngữ chính giúp tăng độ an toàn và dễ bảo trì. |
| **Tailwind CSS**     | Framework CSS tiện lợi, hỗ trợ responsive và thiết kế hiện đại. |
| **Bun**              | Runtime thay thế Node.js để chạy ứng dụng siêu nhanh. |
| **Geist Font**       | Font hiện đại từ Vercel, tối ưu trải nghiệm đọc. |

---

##  1.4 🛠️ Công cụ sử dụng

| **Công cụ**            | **Mục đích sử dụng**        |
|------------------------|-----------------------------|
| **Visual Studio Code** | Soạn thảo mã nguồn          |
| **GitHub, Git**        | Quản lý phiên bản, lưu trữ mã |
| **Postman**            | Kiểm thử API                |
| **Figma**              | Thiết kế giao diện (UI)     |
| **Vercel, Render**     | Triển khai ứng dụng         |

--- 

## 1.5 🌟 Tổng quát

- **Dự án được chia thành 2 phần chính: giao diện người dùng (client) và máy chủ xử lý (server).**  
  Các thành viên được phân công theo module chức năng, cùng phối hợp phát triển trên nền tảng GitHub.

---
## II. 🔍 Phân tích chức năng

## 2.1 🎬 Trang chủ - hiện thị danh sách video

- Hiện thị tất cả video mới nhất hoặc theo lượt xem cao.
- Mỗi video có thumbnail, tiêu đề, tên kênh, số lượt xem và thời gian đăng.
- Có thể nhập vào video để xem chi tiết.
- Các video được sắp xếp bằng thuật toán đơn giản học nguồn nhiên.

## 2.2 ▶️ Xem video

- Khi người dùng nhập vào video, sẽ được chuyển sang trang phát video.
- Trình phát video cho phép tạm dừng, tua, phóng to màn hình.
- Bên dưới video là tiêu đề, mô tả, lượt xem, thời gian đăng.
- Các nút tương tác: Like, Dislike, Bình luận, Chia sẻ.
- Gợi ý các video liên quan ở bên cạnh.

## 2.3 🔍 Tìm kiếm video

- Có thanh tìm kiếm ở đầu trang.
- Người dùng nhập từ khóa → hệ thống lọc và trả về danh sách video phù hợp theo tiêu đề học mô tả.
- Kết quả tìm kiếm được hiển thị dạng danh sách với thumbnail và thông tin cơ bản.

## 2.4 🔓 Đăng nhập/Đăng ký

- Người dùng có thể tạo tài khoản mới bằng cách nhập email, tên người dùng và mật khẩu.
- Người dùng đã có tài khoản có thể đăng nhập.
- Sau khi đăng nhập thành công, người dùng được cấp JWT Token để xác thực mỗi lần gửi yêu cầu đến server.
- Có thể đăng xuất và chuyển đổi tài khoản.

## 2.5 ⏳ Tải video lên

- Chỉ người dùng đã đăng nhập mới được phép tải video lên.
- Giao diện tải video gồm: chọn file video, nhập tiêu đề, mô tả, ảnh thumbnail.
- Video được lưu trữ trên Cloudinary, các thông tin khác được lưu vào MongoDB.

## 2.6 📝 Bình luận & Tương tác

- Người dùng có thể bình luận dưới video.
- Có thể thích like hoặc dislike cho video.
- Hệ thống tự động ghi nhận và hiển thị số lượng tương tác.
- Có thể xóa hoặc chỉnh sửa bình luận của chính mình.

## 2.7 👤 Trang kênh cá nhân

- Mỗi người dùng có một trang riêng.
- Trang nay hiển thị ảnh đại diện, tên người dùng, số người theo dõi. Liệt kê tất cả các video mà người dùng đã tải lên.
- Có thể chỉnh sửa thông tin cá nhân hoặc xóa video.

## 2.8 📈 Biểu đồ tổng quát:

![image](https://github.com/user-attachments/assets/f603b020-40bf-4935-b87f-7c450758d6f0)

---


 ## 2.9 📑 Sơ đồ chức năng quản lí trang chính:

 ![image](https://github.com/user-attachments/assets/4d45551d-f424-4777-9119-4cd685a9f698)

 ---

 ## 2.9. ⚙️ Sơ đồ quản lí tài khoản:

 ![image](https://github.com/user-attachments/assets/4a46c423-f38f-4966-8473-c58f31680019)

 ---

 ## 🏢 Quy trình nghiệp vụ 
 ---
   _H1.Trang chủ_

  ![image](https://github.com/user-attachments/assets/9ebaa1f6-32df-4e6e-8ad3-a9474ab3f0d1)

  ---

   _H2.Trang kênh đã đăng kí_

  ![image](https://github.com/user-attachments/assets/a73aa53e-276f-4cf8-87d7-c508732fb066)

 ---
  _H3.Trang các video trending_

  ![image](https://github.com/user-attachments/assets/101fd01b-552d-4a51-a308-844af73ac13c)

  ---
   
_H4.Đăng nhập qua Clerk_
    
   ![image](https://github.com/user-attachments/assets/46dd712d-6820-4c91-91a1-bd051e8526d0)

   ---

_H5.Trang quản lí video_

   ![Trang quản lý video cá nhân](https://github.com/user-attachments/assets/fd93e8ea-6dd2-4c8d-91fd-0621d74f5b3c)

   ---

_H6.Trang chỉnh sửa video._

   ![Trang chỉnh sửa video](https://github.com/user-attachments/assets/b14babb5-225d-4fe5-9b8b-cc5d2b901123)

---

## III. 🧱 Thiết kế hệ thống

## 3.1 🧠 Kiến trúc tổng thể

-> Ứng dụng sử dụng kiến trúc client-server. Frontend và backend tách rời, giao tiếp qua API REST.

## 3.2 🔄 Sơ đồ luồng dữ liệu

- Người dùng gửi yêu cầu (request) từ frontend.
- Backend xử lý, truy vấn database, trả dữ liệu (response).

## 3.3 🎨 Thiết kế cơ sở dữ liệu

Cơ sở dữ liệu sử dụng MongoDB, theo mô hình NoSQL document-oriented. Dữ liệu được lưu trữ dưới dạng các collection (bảng), với các document (bản ghi) có cấu trúc linh hoạt.

| Bảng (Collection) | Mục đích | Các trường chính (Fields) | Mô tả chi tiết |
|-------------------|----------|--------------------------|----------------|
| **Users**         | Lưu thông tin người dùng | - `_id`: ObjectId (khóa chính) <br> - `username`: String <br> - `email`: String <br> - `password`: String (đã mã hóa) <br> - `avatar`: URL ảnh đại diện <br> - `createdAt`: Ngày tạo tài khoản | Lưu trữ thông tin cơ bản và bảo mật người dùng hệ thống |
| **Videos**        | Lưu dữ liệu video tải lên | - `_id`: ObjectId <br> - `userId`: ObjectId (người upload) <br> - `title`: String <br> - `description`: String <br> - `videoUrl`: URL video <br> - `thumbnailUrl`: URL ảnh thu nhỏ <br> - `createdAt`: Ngày tải lên <br> - `views`: Số lượt xem | Chứa dữ liệu chính về video, liên kết đến người dùng |
| **Comments**      | Lưu bình luận của người dùng | - `_id`: ObjectId <br> - `videoId`: ObjectId (video được bình luận) <br> - `userId`: ObjectId (người bình luận) <br> - `content`: String <br> - `createdAt`: Ngày bình luận | Quản lý bình luận, hỗ trợ tương tác trên video |
| **Likes**         | Lưu thông tin lượt thích | - `_id`: ObjectId <br> - `videoId`: ObjectId <br> - `userId`: ObjectId <br> - `type`: String (`like` hoặc `dislike`) <br> - `createdAt`: Ngày thực hiện | Theo dõi lượt like/dislike của người dùng trên video |

---

### Mô hình quan hệ (quan hệ hóa NoSQL)

- Các bảng được liên kết bằng cách lưu giữ các `ObjectId` của tài liệu liên quan (ví dụ: `userId` trong Videos tham chiếu tới `_id` của Users).  
- MongoDB cho phép lưu trữ linh hoạt, có thể mở rộng hoặc nhúng thêm các trường khác khi cần.  
- Thiết kế này giúp tối ưu hiệu suất đọc và viết trong ứng dụng.

---

# IV. 🧑‍🎨 Thiết kế giao diện người dùng (UI/UX)

Thiết kế theo phong cách tối giản, dễ sử dụng. Giao diện gồm các trang: Trang chủ, Trang xem video, Tìm kiếm, Đăng nhập/Đăng ký, Kênh cá nhân. Sử dụng Tailwind CSS để responsive trên các thiết bị.

---

# V. 🗂️ Mô tả quy trình phát triển

- Lên ý tưởng, chia việc theo nhóm.
- Thiết kế UI/UX bằng Figma.
- Xây dựng backend API → frontend tích hợp.
- Kiểm thử, fix bug.
- Đóng gói và triển khai.

---

# VI. 🖌️ Kiểm thử và đánh giá

	⇒ Sử dụng Postman kiểm thử API, manual test frontend. Đánh giá dựa trên hiệu suất tải video, trải nghiệm người dùng, tính năng hoạt động ổn định.

---

## VII. 🌀 Khó khăn và hướng giải quyết

| STT | Khó khăn                                      | Hướng giải quyết                                        |
|-----|-----------------------------------------------|---------------------------------------------------------|
| 1   | Upload video dung lượng lớn                   | Sử dụng Cloudinary để lưu trữ và xử lý video            |
| 2   | Giao tiếp giữa frontend và backend            | Cấu hình CORS và sử dụng JWT Token để xác thực          |
| 3   | Responsive giao diện                          | Sử dụng Tailwind CSS kết hợp với media queries          |

---

## VIII. ✅ Kết luận và hướng phát triển

	⇒  Dự án góp phần hỗ trợ quy trình phát triển, mô tả dùng web thực tế. Trong tương lai có thể mở rộng thêm nền livestream, đề xuất video bằng AI, tích hợp OAuth (Google login).

 ---

## IX. 📚 Tài liệu tham khảo

| STT | Tên tài liệu           | Đường dẫn                                      |
|-----|------------------------|------------------------------------------------|
| 1   | YouTube API Docs       | [https://developers.google.com/youtube](https://developers.google.com/youtube) |
| 2   | MongoDB Documentation  | [https://www.mongodb.com/docs](https://www.mongodb.com/docs) |
| 3   | ReactJS Docs           | [https://reactjs.org/docs](https://reactjs.org/docs) |
| 4   | Node.js Docs           | [https://nodejs.org/en/docs](https://nodejs.org/en/docs) |

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
