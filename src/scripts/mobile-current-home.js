const navLinks = document.querySelectorAll('.mobile-menu-nav__link');
switchCurrentPage();

function switchCurrentPage() {
    navLinks[0].classList.add('current');
    
}
