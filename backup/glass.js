glass = document.querySelector('.glass')
var glass_filled = false
glass.addEventListener('click', () => {
    if (!glass_filled) {
        glass.animate([
            {
                transform: 'translate(-50%, -50%)',
            }
        ], {
            duration: 400,
            fill: 'forwards'
        })
        glass.animate([
            {
                width: 'max(100vw, 100vh)',
                height: 'max(100vw, 100vh)'
            }
        ], {
            duration: 400,
            fill: 'forwards'
        })
        glass_filled = true
    }
    else {
        glass.animate([
            { transform: 'translate(-50%, 300%)' }
        ], {
            duration: 200,
            fill: 'forwards'
        })
        glass.animate([
            { width: 'var(--glass-size)', height: 'var(--glass-size)' }
        ], {
            duration: 200,
            fill: 'forwards'
        })

        glass_filled = false
    }
})