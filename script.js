const hambarger = document.querySelector('.hambarger');
const navLinks = document.querySelector(' .navbar-menu .nav-links');

hambarger.addEventListener('click',()=>{
 navLinks.classList.toggle('show');
})
