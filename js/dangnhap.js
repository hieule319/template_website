function ktradn2() {
    var dn = document.getElementById("txtdn2").value;
    if (dn == "") {
        document.getElementById("loidn2").innerHTML = "* Bắt buộc nhập";
        return false;
    }
    var regdn = /([A-Za-z0-9_]{1,15})/;
    if (regdn.test(dn) == false) {
        document.getElementById("loidn2").innerHTML = "* Tên đăng nhập không hợp lệ";
        return false;
    }
    else {
        document.getElementById("loidn2").innerHTML = "*";
        return true;
    }
}

function matkhau2() {
    var mk = document.getElementById("txtmk2").value;
    if (mk == "") {
        document.getElementById("loimk2").innerHTML = "* Bắt buộc nhập";
        return false;
    }
    var regmk = /(?=.*\d).{6,}/;
    if (regmk.test(mk) == false) {
        document.getElementById("loimk2").innerHTML = "* Tên đăng nhập không hợp lệ";
        return false;
    }
    else {
        document.getElementById("loimk2").innerHTML = "*";
        return true;
    }
}

function luu2() {
    var dn = document.getElementById("txtdn2").value;
    var mk = document.getElementById("txtmk2").value;
    
    if (ktradn2() && matkhau2()) {
        alert("Đăng nhập thành công");
    }
    else {
        alert("Bạn  đã nhập thông tin không hợp lệ. Vui lòng nhập lại !!!");
        return;
    }
}