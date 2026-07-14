// Đổi màu Navbar khi cuộn

window.addEventListener("scroll", function () {

    const navbar = document.getElementById("navbar");

    if (window.scrollY > 80) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }

});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".hidden").forEach(el=>{

    observer.observe(el);

});