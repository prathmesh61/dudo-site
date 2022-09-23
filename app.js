

/* sticky navbar */
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


// toggle nav







/* navbar */
// const menuBtb = document.querySelector(".menu-btn");
// const navList = document.querySelector(".nav-list");

// menuBtb.addEventListener("click", () => {
//     navList.classList.toggle("show")
// })

document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.nav-list').classList.toggle('show'))