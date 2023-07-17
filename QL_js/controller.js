//Tọa hàm để chạy điều kiện mảng
function renderNV(dsnv) {
  var innerHTML = "";
  for (var i = 0; i < dsnv.length; i++) {
    var nv = dsnv[i];
    var contenct = `<tr>
        <td>${nv.taikhoan}</td>
        <td>${nv.ten}</td>
        <td>${nv.email}</td>
        <td>${nv.ngaylam}</td>
        <td>${nv.chucvu}</td>
        <td>${nv.tinhLuong()}</td>
        <td>${nv.xepLoai()}</td>
        <td>
        <button class="btn btn-success" onclick="suaThongTin('${
          nv.taikhoan
        }')" data-toggle="modal" data-target="#myModal" >Sửa</button>
        <button class="btn btn-danger" onclick="xoaThongTin('${
          nv.taikhoan
        }')">Xóa</button>
        </td>
        </tr>`;
    innerHTML += contenct;
  }
  document.getElementById("tableDanhSach").innerHTML = innerHTML;
}
//Xóa thông tin nhân viên
function xoaThongTin(tk) {
  var deLete = dsnv.findIndex(function (item) {
    return item.taikhoan == tk;
  });
  dsnv.splice(deLete, 1);
  renderNV(dsnv);
}
// Sửa thông tin
function suaThongTin(tk) {
  var edit = dsnv.findIndex(function (item) {
    return item.taikhoan == tk;
  });
  showThongTin(dsnv[edit]);
}
// cập nhật thông tin
function capNhatThongTinNV() {
  var nv = layThongTinNV();
  if (kiemTraThongTinChung(nv)) {
    var index = dsnv.findIndex(function (item) {
      return item.taikhoan;
    });
  }
  dsnv[index] = nv;
  renderNV(dsnv);
  var dataJon = JSON.stringify(dsnv);
  localStorage.setItem("DSNV", dataJon);
  document.getElementById("reset").reset();
}
//Cập nhật thông tin người dùng
//Khai báo hàm lấy thông tin từ user nhập
function layThongTinNV() {
  var taikhoan = document.getElementById("tknv").value;
  var ten = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matkhau = document.getElementById("password").value;
  var ngaylam = document.getElementById("datepicker").value;
  var luong = document.getElementById("luongCB").value;
  var chucvu = document.getElementById("chucvu").value;
  var giolam = document.getElementById("gioLam").value;
  return new NhanVien(
    taikhoan,
    ten,
    email,
    matkhau,
    ngaylam,
    luong,
    chucvu,
    giolam
  );
}
