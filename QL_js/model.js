//Tạo hàm nhân viên để DOM tới kết quả và khóa khai báo biến
function NhanVien(
  taikhoan,
  ten,
  email,
  matkhau,
  ngaylam,
  luong,
  chucvu,
  giolam
) {
  this.taikhoan = taikhoan;
  this.ten = ten;
  this.email = email;
  this.matkhau = matkhau;
  this.ngaylam = ngaylam;
  this.luong = luong;
  this.chucvu = chucvu;
  /*this.chonChucVu = function () {
  /*  if (this.chucvu === "1") {
      return "Sếp";
    } else if (this.chucvu === "2") {
      return "Trưởng phòng";
    } else if (this.chucvu === "3") {
      return "Nhân viên";
    } else {
      return false;
    }
  }; */
  this.tinhLuong = function () {
    if (this.chucvu == "Sếp") {
      return this.luong * 3;
    } else if (this.chucvu == "Trưởng phòng") {
      return this.luong * 2;
    } else if (this.chucvu == "Nhân viên") {
      return this.luong;
    }
  };
  this.giolam = giolam;
  this.xepLoai = function () {
    if (this.giolam >= 192) {
      return "Nhân viên xuất sắc";
    } else if (this.giolam < 192 && this.giolam >= 176) {
      return "Nhân viên giỏi";
    } else if (this.giolam < 176 && this.giolam >= 160) {
      return "Nhân viên khá";
    } else {
      return "Nhân viên trung bình";
    }
  };
}
