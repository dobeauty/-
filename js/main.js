const searchEls = document.querySelector('header .fade-in')

window.addEventListener('scroll', function(){
    if (scroll<500) {
        gsap.to(searchEls, .5, {
            opacity: 0,
            display: 'none'
        })
    }

    else {
        gsap.to(searchEls, .5, {
            opacity: 1,
            display: 'block'
        })
    }
})


