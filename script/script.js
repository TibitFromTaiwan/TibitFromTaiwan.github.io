var menuIsClicked = false
var menu = document.querySelector('.menu')
var menuIconTop = document.querySelector('.menu-button-icon .top-side')
var menuIconBottom = document.querySelector('.menu-button-icon .bottom-side')

document.querySelector('.menu-button').addEventListener('click', () => {
    menuIsClicked = !menuIsClicked
    if (menuIsClicked) {
        menu.style.backdropFilter = 'blur(15px)'
        menu.style.backgroundColor = 'hsla(0, 0%, 100%, 0.1)'
        menuIconTop.style.transform = 'translateX(3px) rotate(45deg)'
        menuIconBottom.style.transform = 'translateX(3px) rotate(-45deg)'
    } else {
        menu.style.backdropFilter = ''
        menu.style.backgroundColor = 'hsla(0, 0%, 100%, 0)'
        menuIconTop.style.transform = ''
        menuIconBottom.style.transform = ''
    }
})