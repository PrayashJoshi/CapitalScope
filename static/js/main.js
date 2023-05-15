(function () {
    'use strict'
    document.querySelector('[data-bs-toggle="offcanvas"]').addEventListener('click', function () {
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
})()


document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".navbar-brand");
    logo.addEventListener("click", function () {
        window.scrollTo(0, 0);
    });
});
