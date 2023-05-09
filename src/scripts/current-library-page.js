const navLinks = document.querySelectorAll('.site-nav__link');
switchCurrentPage();

function switchCurrentPage() {
    navLinks[2].classList.add('current');
    
}
