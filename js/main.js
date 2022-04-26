// Scroll fixed

const searchEls = document.querySelector('header .fade-in')

window.addEventListener('scroll', function(){
    if (scroll<300) {
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



// Swiper Animation

// new Swiper('.headline .swiper-container' , {
//     direction: 'vertical',
//     autoplay: {
//         delay: 3000
//     },
//     loop: true,
// })
