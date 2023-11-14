# Để sử dụng Context trong React :
Bước 1: Tạo Context (ví dụ AppContext);
Bước 2: Quyết định xem Context vừa tạo sử dụng ở đâu
bằng cách bọc <[Tên Context].Provider> bên ngoài components đó
thì tất cả components con đều có thể lấy được dữ liệu từ Context
Bước 3: Sử dụng dữ liệu từ Context-> lấy dữ liệu bằng useContext