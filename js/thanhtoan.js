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

function ktradc() {
    var dc = document.getElementById("txtdc").value;
    if (dc =="") {
        document.getElementById("loidc").innerHTML = "Bắt buộc nhập";
        return false;
    }
    else {
        document.getElementById("loidc").innerHTML = ("*");
        return true;
    }
}

function ktrasoluong() {
    var sl = document.getElementById("txtsl").value;
    if (sl =="") {
        document.getElementById("loisl").innerHTML = "Bắt buộc nhập";
        return false;
    }
    else {
        document.getElementById("loisl").innerHTML = ("*");
        return true;
    }
}


function btnTT() {
    var ten = document.getElementById("txtten").value;
    var email = document.getElementById("txtemail").value;
    var sdt = document.getElementById("txtsdt").value;
    var dc = document.getElementById("txtdc").value;
    if (ktraTen() && ktraEmail()  && ktraSDT() && ktradc() && ktrasoluong()) {
        alert("Nhập thành công");
    }
    else {
        alert("Bạn  đã nhập thông tin không hợp lệ. Vui lòng nhập lại !!!");
        return;
    }
}