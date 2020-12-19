glass = document.querySelector('.glass')
var glass_filled = false
glass.addEventListener('click', () => {
    if (!glass_filled) {
        glass.animate([
            { transform: 'translate(-50%, -50%)' }
        ], {
            duration: 200,
            fill: 'forwards'
        })
        glass.animate([
            { width: 'max(200vw, 200vh)', height: 'max(200vw, 200vh)' }
        ], {
            duration: 400,
            fill: 'forwards'
        })
        glass_filled = true
    }
    else {
        glass.animate([
            { transform: 'translate(-50%, 60%)' }
        ], {
            duration: 200,
            fill: 'forwards'
        })
        glass.animate([
            { width: '300px', height: '300px' }
        ], {
            duration: 200,
            fill: 'forwards'
        })

        glass_filled = false
    }
})