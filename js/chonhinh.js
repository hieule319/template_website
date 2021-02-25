function chonhinh() {
    var d = document.getElementById("lsthinh").value;
    var src = d.substring(0, d.indexOf(";"));
    var giaTien = d.substring(d.indexOf(";") + 1, d.lenght);

    var img = document.getElementById("idh");
    img.src = src;

    var c = document.getElementById("price");
    c.innerHTML = giaTien;
    var e = document.getElementById("price2");
    d.innerHTML = giaTien;
}

function kiemTra(txt) {
    var re = /^[1-9]\d*/;
    if (txt != "") {
        if (re.test(txt) == false) {
            alert("Nhập sa kí tự");
            return false;
        }
        else {
            return true;
        }
    }
}

function thanhtien() {
    var tt1 = 0, tt2 = 0, tt3 = 0, tt4 = 0;
    var sl1 = document.getElementById("txt1").value.trim();
    var sl2 = document.getElementById("txt2").value.trim();
    var sl3 = document.getElementById("txt3").value.trim();
    if (kiemTra(sl1)) {
        tt1 = parseFloat(sl1) * 28900000;
    }
    else {
        tt1 = 0;
    }

    if (kiemTra(sl2)) {
        tt2 = parseFloat(sl2) * 1500;
    }
    else {
        tt2 = 0;
    }

    if (kiemTra(sl3)) {
        tt3 = parseFloat(sl3) * 1200;
    }
    else {
        tt3 = 0;
    }

    if (kiemTra(sl4)) {
        tt4 = parseFloat(sl4) * 1900;
    }
    else {
        tt4 = 0;
    }
    document.getElementById("tt").innerHTML = tt1 + tt2 + tt3 + tt4;
}