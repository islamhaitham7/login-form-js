const form = document.getElementById("loginForm");
const nameInput = document.getElementById("nam");
const passInput = document.getElementById("pas");
const nameError = document.getElementById("nameError");
const passError = document.getElementById("passError");
const resetBtn = document.getElementById("resetBtn");

const passPattern = /^(?=.*\d).{6,}$/;

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    let valid = true;

    if (nameInput.value.trim() === "") {
        nameError.textContent = "الاسم مطلوب";
        valid = false;
    } else if (nameInput.value.trim().length < 3) {
        nameError.textContent = "يجب الاسم لا يقل عن 3 حروف";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    if (passInput.value.trim() === "") {
        passError.textContent = "كلمة السر مطلوبة";
        valid = false;
    } else if (!passPattern.test(passInput.value.trim())) {
        passError.textContent = "كلمة السر يجب أن تحتوي على 6 أحرف على الأقل ورقم";
        valid = false;
    } else {
        passError.textContent = "";
    }

    if (valid) {
        alert(`مرحبًا ${nameInput.value.trim()}! تم التسجيل بنجاح.`);
        form.reset();
    }
});

resetBtn.addEventListener("click", function () {
    form.reset();
    nameError.textContent = "";
    passError.textContent = "";
    localStorage.removeItem("name");
    localStorage.removeItem("password");
});

nameInput.addEventListener("input", () => {
    if (nameInput.value.trim().length >= 3) {
        nameError.textContent = "";
    }
});

passInput.addEventListener("input", () => {
    if (passPattern.test(passInput.value.trim())) {
        passError.textContent = "";
    }
});


nameInput.addEventListener("input", () => {
    localStorage.setItem("name", nameInput.value);
})

passInput.addEventListener("input", () => {
    localStorage.setItem("password", passInput.value);
})

window.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem("name");
    const savedPass = localStorage.getItem("password");

    if (savedName) nameInput.value = savedName;
    if (savedPass) passInput.value = savedPass;
})