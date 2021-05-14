document.querySelector('.menu-button').addEventListener('click', () => {
    var menu = document.querySelector('.menu')
    if (menu.style.backdropFilter) {
        menu.style.backdropFilter = ''
        menu.style.backgroundColor = 'hsla(0, 0%, 100%, 0)'
    } else {
        menu.style.backdropFilter = 'blur(10px)'
        menu.style.backgroundColor = 'hsla(0, 0%, 100%, 0.)'
    }
})