const navmenu = document.querySelector(".nav_menu");
const navtoggle = document.querySelector(".nav_toggle");
const navclose = document.querySelector(".nav_close");
const navlink = document.querySelectorAll(".nav_link");



navtoggle.addEventListener('click', () => {
    navmenu.classList.add('show_menu');
})

navclose.addEventListener('click', () => {
    navmenu.classList.remove('show_menu')
})
const linkAction = () => {
    navmenu.classList.remove('show_menu')
}
navlink.forEach((n) => {
    n.addEventListener('click', linkAction)
});
const shadowheader = () => {
    const header = document.getElementById("header");

    window.scrollY >= 50 ? header.classList.add("shadow_header") : header.classList.remove("shadow_header");
};

window.addEventListener('scroll', shadowheader)



const scrollUp = () => {
    const scrollUps = document.querySelector(".scrollup");
    this.scrollY >= 350 ? scrollUps.classList.add("show-scroll") :
        scrollUps.classList.remove("show-scroll");
}
window.addEventListener('scroll', scrollUp);


const sections = document.querySelectorAll('section[id]');
const scrollActivity = () => {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionLink = document.querySelector('.nav_menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionLink.classList.add('active_link');
        } else {
            sectionLink.classList.remove('active_link');
        }
    });
};
window.addEventListener('scroll', scrollActivity);

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
});

sr.reveal('.home_data,.footer');
sr.reveal('.home_dish', { delay: 500, origin: 'bottom', distance: '100px' });
sr.reveal('.home_burger', { delay: 1200, duration: 1500, distance: '100px' });
sr.reveal('.home_ingredient', { delay: 1600, interval:100 });
sr.reveal('.recipe_img, .delivery_imgs,.contact_img', {origin:'left' });
sr.reveal('.recipe_data,.delivery-data,.contact_data', {origin:'right' });
sr.reveal('.papular_card', {interval:100 });


















