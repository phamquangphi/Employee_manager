//tạo hàm show để DOM tới điều kiện
function showMessage(span, message) {
  document.getElementById(span).style.display = "block";
  document.getElementById(span).innerHTML = message;
}
//Tạo hàm điều kiện không để trống
function checkDrum(id, value, message) {
  var length = value.trim().length;
  if (length != 0) {
    showMessage(id, "");
    return true;
  } else {
    showMessage(id, message);
    return true;
  }
}
//Tạo hàm điều kiện trùng tài khoản
function checkDupTK(data, dsnv) {
  var index = dsnv.findIndex(function (item) {
    return item.taikhoan == data;
  });
  if (index == -1) {
    showMessage("tbTKNV", "");
    return true;
  } else {
    showMessage("tbTKNV", "Tài khoản nhân viên đã tồn tại");
    return false;
  }
}
//Tạo hàm điều kiện trùng cho Mật khẩu
function checkDupMK(data, dsnv) {
  var index = dsnv.findIndex(function (item) {
    return item.matkhau == data;
  });
  if (index == -1) {
    showMessage("tbMatKhau", "");
    return true;
  } else {
    showMessage("tbMatKhau", "Mật khẩu đã tồn tại");
    return false;
  }
}
//tạo hàm điều kiện kí tự của MK
function checkPass(pass) {
  const regex =
    /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
  var isPass = regex.test(pass);
  if (isPass) {
    showMessage("tbMatKhau", "");
    return true;
  } else {
    showMessage(
      "tbMatKhau",
      "mật Khẩu từ 6-10 ký tự,chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
    );
    return false;
  }
}
//Tọa hàm điều kiện tên
function checkName(name) {
  const re = /^[a-zA-Z\n\s]*$/;
  var isName = re.test(name);
  if (isName) {
    showMessage("tbTen", "");
    return true;
  } else {
    showMessage("tbTen", "Tên nhân viên phải là chữ");
    return false;
  }
}
// Tạo hàm điều kiện email
function checkemail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var isEmail = re.test(email);
  if (isEmail) {
    showMessage("tbEmail", "");
    return true;
  } else {
    showMessage("tbEmail", "Email của bạn không đúng");
    return false;
  }
}
// tạo hàm điều kiện độ dài
function checkLength(min, max, span, message, value) {
  var length = value.length;
  if (length >= min && length <= max) {
    showMessage(span, "");
    return true;
  } else {
    showMessage(span, message);
    return false;
  }
}
// Tạo Điều kiện chức vụ
function checkPositon(chucvu) {
  if (chucvu == "Sếp" || chucvu == "Trưởng phòng" || chucvu == "Nhân viên") {
    showMessage("tbChucVu", "");
    return true;
  } else {
    showMessage("tbChucVu", "bạn chưa chọn chức vụ");
    return false;
  }
}
