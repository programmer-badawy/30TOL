//Burger Menu
let burger = document.querySelector("header .container i"); 
let menu = document.querySelector("header .menu");

function toggleMenu(e) { 
    e.stopPropagation(); 
    menu.classList.toggle("show");
}
burger.addEventListener("click", toggleMenu);
document.addEventListener("click", () => {
    menu.classList.remove("show");
} )






// FAQ Section
let faqCheckbox = document.querySelectorAll(".faq .container .content .question .heading input[type='checkbox']")
let checkLable = document.querySelectorAll(".custom-checkbox")
let details = document.querySelectorAll(".faq .container .content .question p")



function active1() {
    details[0].classList.toggle("active");
}
function active2() {
    details[1].classList.toggle("active");
}
function active3() {
    details[2].classList.toggle("active");
}
function active4() {
    details[3].classList.toggle("active");
}
faqCheckbox[0].addEventListener("change", active1)
faqCheckbox[1].addEventListener("change",active2)
faqCheckbox[2].addEventListener("change",active3)
faqCheckbox[3].addEventListener("change",active4)







// ----------