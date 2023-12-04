const navBtn = document.querySelector('.nav-btn')
const navMenu = document.querySelector('.nav-menu')

navOpen = false

navBtn.addEventListener('click' , function () {
    console.log('click');
    if (navOpen) {
        navBtn.classList.remove('nav-btn--active')
        navMenu.classList.remove('nav-menu--open')
        navOpen = false
    } else {
        navBtn.classList.add('nav-btn--active')
        navMenu.classList.add('nav-menu--open')
        navOpen = true
    }
})