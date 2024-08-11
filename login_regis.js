function showpassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    var y = document.getElementById("confirm_password");
    if (y.type === "password") {
        y.type = "text";
    } else {
        y.type = "password";
    }
}
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == null || username == "") {
        alert("โปรดกรอกข้อมูลให้ครบถ้วน");
        return false;
    }
    if (password == null || password == "") {
        alert("โปรดกรอกข้อมูลให้ครบถ้วน");
        return false;
    }
    else alert("เข้าสู่ระบบสำเร็จ");
}
let changeIcon = function (icon) {
    icon.classList.toggle('fa-eye');
    // icon.classList.toggle('fa-eye-slash');
}
