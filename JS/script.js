const caixa1 = document.getElementById("1");
const caixa2 = document.getElementById("2");
const caixa3 = document.getElementById("3");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

caixa1.addEventListener("click", function() {
    caixa1.style.border = "5px solid white";
    console.log("Você clicou na caixa 1");
});

caixa2.addEventListener("click", function() {
    caixa2.style.border = "5px solid white";
    console.log("Você clicou na caixa 2");
});

caixa3.addEventListener("click", function() {
    caixa3.style.border = "5px solid white";
    console.log("Você clicou na caixa 3");
});

btn1.addEventListener("click", function() {
    caixa1.style.border = "5px solid red";
    caixa2.style.border = "5px solid red";
    caixa3.style.border = "5px solid red";
});

btn2.addEventListener("click", function() {
    caixa1.style.border = "none";
    caixa2.style.border = "none";
    caixa3.style.border = "none";
});