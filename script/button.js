var btn1 = document.querySelector('.btn1')
btn1.addEventListener('click', () => {
    btn1.classList.contains('btn1-clicked') ? btn1.classList.remove('btn1-clicked') : btn1.classList.add('btn1-clicked')
})

var btn2 = document.querySelector('.btn2')
btn2.addEventListener('click', () => {
    btn2.classList.contains('btn2-clicked') ? btn2.classList.remove('btn2-clicked') : btn2.classList.add('btn2-clicked')
})