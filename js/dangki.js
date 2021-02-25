function ktradn() {
    var dn = document.getElementById("txtdn").value;
    if (dn == "") {
        document.getElementById("loidn").innerHTML = "* Bắt buộc nhập";
        return false;
    }
    var regdn = /([A-Za-z0-9_]{1,15})/;
    if (regdn.test(dn) == false) {
        document.getElementById("loidn").innerHTML = "* Tên đăng nhập không hợp lệ";
        return false;
    }
    else {
        document.getElementById("loidn").innerHTML = "*";
        return true;
    }
}

function matkhau() {
    var mk = document.getElementById("txtmk").value;
    if (mk == "") {
        document.getElementById("loimk").innerHTML = "* Bắt buộc nhập";
        return false;
    }
    var regmk = /(?=.*\d).{6,}/;
    if (regmk.test(mk) == false) {
        document.getElementById("loimk").innerHTML = "* Tên đăng nhập không hợp lệ";
        return false;
    }
    else {
        document.getElementById("loimk").innerHTML = "*";
        return true;
    }
}

function ktraTen() {
    var ten = document.getElementById("txtten").value;
    if (ten == "") {
        document.getElementById("loiT").innerHTML = "* Bắt buộc nhập";
        return false;
    }
    var regTen = /^[A-Za-z]+\s*[A-Za-z]*$/;
    if (regTen.test(ten) == false) {
        document.getElementById("loiT").innerHTML = "* Tên phải là chuỗi và không rỗng";
        return false;
    }
    else {
        document.getElementById("loiT").innerHTML = "*";
        return true;
    }
}

function ktraEmail() {
    var email = document.getElementById("txtemail").value;
    if (email == "") {
        document.getElementById("loiemail").innerHTML = "* Bắt buộc nhập";
        return false;
    }
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(email) == false) {
        document.getElementById("loiemail").innerHTML = ("Nhập sai định dạng");
        return false;
    }
    else {
        document.getElementById("loiemail").innerHTML = ("*");
        return true;
    }
}

function KiemTraNgaySinh() {
    var ngaysinh = document.getElementById("txtns").value;
    if (ngaysinh == "") {
        document.getElementById("loins").innerHTML = "* Bắt buộc nhập";
        return false;
    }
    var regns = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
    var ns = new Date(ngaysinh);
    var today = new Date();
    if (eval(today.getFullYear() - ns.getFullYear()) <= 18) {
        document.getElementById("loins").innerHTML = "Tuổi phải lớn hơn 18";
        return false;
    }
    else {
        document.getElementById("loins").innerHTML = "*";
        return true;
    }
}

function ktraSDT() {
    var sdt = document.getElementById("txtsdt").value;
    if (sdt == "") {
        document.getElementById("loisdt").innerHTML = "* Bắt buộc nhập";
        return false;
    }
    var re = /((09|03|07|08|05)+([0-9]{7,9})\b)/g;
    if (re.test(sdt) == false) {
        document.getElementById("loisdt").innerHTML = ("Số nhập vào không đúng");
        return false;
    }
    else {
        document.getElementById("loisdt").innerHTML = ("*");
        return true;
    }
}

function luu() {
    var dn = document.getElementById("txtdn").value;
    var mk = document.getElementById("txtmk").value;
    var ten = document.getElementById("txtten").value;
    var ns = document.getElementById("txtns").value;
    var email = document.getElementById("txtemail").value;
    var sdt = document.getElementById("txtsdt").value;
    var dc = document.getElementById("txtdc").value;
    if (ktradn() && matkhau() && ktraTen() && ktraEmail() && KiemTraNgaySinh() && ktraSDT()) {
        alert("Đăng kí thành công");
    }
    else {
        alert("Bạn  đã nhập thông tin không hợp lệ. Vui lòng nhập lại !!!");
        return;
    }
}