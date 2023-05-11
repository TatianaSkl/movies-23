const navLinks = document.querySelectorAll('.mobile-menu-nav__link');
switchCurrentPage();

function switchCurrentPage() {
    navLinks[1].classList.add('current');
    
}
console.log(navLinks);