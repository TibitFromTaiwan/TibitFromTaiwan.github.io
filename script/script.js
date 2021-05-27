var menuIsClicked = false
var menu = document.querySelector('.menu')
var menuIconTop = document.querySelector('.menu-button-icon .top-side')
var menuIconBottom = document.querySelector('.menu-button-icon .bottom-side')
var menuLink = document.querySelector('.menu-link-wrapper')

function menuIconTransformOpenmenu() {
    menuIconTop.style.transform = 'translateX(3px) rotate(45deg)'
    menuIconBottom.style.transform = 'translateX(3px) rotate(-45deg)'
}
function menuIconTransformClosemenu() {
    menuIconTop.style.transform = ''
    menuIconBottom.style.transform = ''
}
function showMenu() {
    menu.style.zIndex = 127
    menuLink.style.opacity = 1
    menu.style.background = 'hsla(0, 0%, 0%, 0.6)'
}
function hideMenu() {
    menu.style.zIndex = ''
    menuLink.style.opacity = 0
    menu.style.background = 'hsla(0, 0%, 0%, 0)'
}
document.querySelector('.menu-button').addEventListener('click', () => {
    menuIsClicked = !menuIsClicked
    if (menuIsClicked) {
        menu.style.backdropFilter = 'blur(20px)'
        menu.style.WebkitBackdropFilter = 'blur(20px)'
        menuIconTransformOpenmenu()
        showMenu()
    } else {
        menu.style.backdropFilter = ''
        menu.style.WebkitBackdropFilter = ''
        menuIconTransformClosemenu()
        hideMenu()
    }
})