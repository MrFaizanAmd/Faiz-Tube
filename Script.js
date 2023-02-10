let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".small-sidebar");
let large = document.querySelector(".container");
let input = document.querySelector(".input");
let displaycomment = document.querySelector(".button");

menuIcon.onclick = function () {
    sidebar.classList.toggle("sidebar");
    large.classList.toggle("large-container");
};
input.onclick = function () {
    displaycomment.classList.toggle("button-show");
};
