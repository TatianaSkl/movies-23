const navLinks = document.querySelectorAll('.site-nav__link');
switchCurrentPage();

function switchCurrentPage() {
    navLinks[0].classList.add('current');
    
}
