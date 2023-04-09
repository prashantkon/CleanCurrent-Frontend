var problemBtns = document.querySelectorAll(".btn.btn-outline-dark.btn-rounded");
problemBtns = document.getElementsByClassName("btn btn-outline-dark btn-rounded");
for (let i = 0; i < problemBtns.length; i++) {
    problemBtns[i].onclick = () => {
        location.href = "problem.html";
    };
}

document.getElementById("productBtn").addEventListener("click", function() {
    location.href = "product.html";
});
document.getElementById("home").addEventListener("click", function() {
    location.href = "index.html";
});
document.getElementById("problem").addEventListener("click", function() {
    location.href = "problem.html";
})
document.getElementById("product").addEventListener("click", function() {
    location.href = "product.html";
})
