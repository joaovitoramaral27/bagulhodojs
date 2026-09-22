caixa1 = document.querySelector("#1");
caixa2 = document.querySelector("#2");
caixa3 = document.querySelector("#3");
btn1 = document.querySelector(".btn1");
btn2 = document.querySelector(".btn2");

caixa1.addEventListener("click", function() {
    caixa1.style.border = "5px solid white";
    print("Você clicou na caixa 1");
});

caixa2.addEventListener("click", function() {
    caixa2.style.border = "5px solid white";
    print("Você clicou na caixa 2");
});

caixa3.addEventListener("click", function() {
    caixa3.style.border = "5px solid white";
    print("Você clicou na caixa 3");
});
    
btn1.addEventListener("click", function() {
    caixa1.style.border = "5px solid red";
});

btn2.addEventListener("click", function() {
    caixa1.style.border = "none";
});