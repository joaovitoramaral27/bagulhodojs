btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", function() {
    btn1.style.border = "5px solid white";
    if (btn1.style.border === "5px solid white") {
        btn1.addEventListener("click", function() {
            btn1.style.border = "none";
        });
    }
    else {
        btn1.style.border = "5px solid white";
    }
});

btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", function() {
    btn2.style.border = "5px solid white";
    if (btn2.style.border === "5px solid white") {
        btn2.addEventListener("click", function() {
            btn2.style.border = "none";
        });
    }
    else {
        btn1.style.border = "5px solid white";
    }
});