import {burgInit, burgResize} from './burger.js'
import AOS from 'aos';
import Ellipsis from 'ellipsis.js'




document.addEventListener('DOMContentLoaded', () => {


    document.querySelectorAll('[data-background]').forEach( el => {
        el.style.backgroundImage = `url(${el.dataset.background})`
    })





    //  smooth scroll
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
            anchor.addEventListener('click', function (e) {
            e.preventDefault()
        
            const blockID = anchor.getAttribute('href').substring(1)
            if(document.getElementById(blockID)) {
                document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
                })
            }
        })
    }


    // burger
    burgInit()

    window.addEventListener('resize', () =>  {
        burgResize()
        
    });




    ////////// animations
    
    AOS.init();




})




