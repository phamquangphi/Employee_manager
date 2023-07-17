var dsnv = [];
// Lấy dữ liệu từ local lúc user load trang
var dataJon = localStorage.getItem("DSNV");
// Tạo điều kiện để dữ  liệu đc chạy
if (dataJon != null) {
  dsnv = JSON.parse(dataJon).map(function (id) {
    return new NhanVien(
      id.taikhoan,
      id.ten,
      id.email,
      id.matkhau,
      id.ngaylam,
      id.luong,
      id.chucvu,
      id.giolam
    );
  });
  renderNV(dsnv);
}
function btnThemNV() {
  var nv = layThongTinNV();
  var validation =
    kiemTraThongTinTK(nv) && kiemTraMK(nv) && kiemTraThongTinChung(nv);
  if (validation) {
    dsnv.push(nv);
    // chạy kết quả của dãy thông tin nhân viene
    renderNV(dsnv);
    // lấy thông tin nhân viên từ hàm đã DOM tới
    var dataJon = JSON.stringify(dsnv);
    localStorage.setItem("DSNV", dataJon);
    document.getElementById("reset").reset();
  }
}
//Hàm kiểm trả tài khoản
function kiemTraThongTinTK(nv) {
  return (
    checkDrum("tbTKNV", nv.taikhoan, "không để trống") &&
    checkDupTK(nv.taikhoan, dsnv) &&
    checkLength(4, 6, "tbTKNV", "tài khoản tối đa 4-6 kí tự", nv.taikhoan)
  );
}
//hàm kiểm tra mật khẩu
function kiemTraMK(nv) {
  return (
    checkDrum("tbMatKhau", nv.matkhau, "không để trống") &&
    checkDupMK(nv.matkhau, dsnv) &&
    checkPass(nv.matkhau) &&
    checkLength(6, 10, "tbMatKhau", "mật khẩu bao gồm 6-10 kí tự", nv.matkhau)
  );
}
//hàm kiểm tra hàm kiểm tra chung
function kiemTraThongTinChung(nv) {
  var isvali =
    checkDrum("tbTen", nv.ten, "không để trống") && checkName(nv.ten);
  isvali &=
    checkDrum("tbEmail", nv.email, "không để trống") && checkemail(nv.email);
  isvali &= checkDrum("tbNgay", nv.ngaylam, "không để trống");
  isvali &= checkDrum("tbLuongCB", nv.luong, "không để trống");

  isvali &=
    checkDrum("tbChucVu", nv.chucvu, "không để trống") &&
    checkPositon(nv.chucvu);
  isvali &= checkDrum("tbGiolam", nv.giolam, "không để trống");
  return isvali;
}
function showThongTin(nv) {
  document.getElementById("tknv").value = nv.taikhoan;
  document.getElementById("name").value = nv.ten;
  document.getElementById("email").value = nv.email;
  document.getElementById("password").value = nv.matkhau;
  document.getElementById("datepicker").value = nv.ngaylam;
  document.getElementById("luongCB").value = nv.luong;
  document.getElementById("chucvu").value = nv.chucvu;
  document.getElementById("gioLam").value = nv.giolam;
}
document.querySelector("#btnThemNV").addEventListener("click", btnThemNV);
