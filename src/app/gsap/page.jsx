"use client"

import { useEffect } from "react";
import gsap from "gsap";

import "./gsap.scss"

const Gsap = () => {

    useEffect(() => {
        // .wrapper
        const wrapper = document.querySelector('.sm_image-trail-section')
        wrapper.addEventListener('mouseenter', (e) => gsap.to(image, { autoAlpha: 1 }));
        wrapper.addEventListener('mouseleave', (e) => gsap.to(image, { autoAlpha: 0 }));

        // img
        const image = document.querySelector('.sm_image-trail'),
            moveTween = gsap.to(image, {
                duration: 1,
                paused: true,
                ease: "power3"
            }),
            bgTween = gsap.fromTo(image, {
                backgroundPosition: "50% 0%"
            }, {
                duration: 10,
                backgroundPosition: "50% 100%",
                repeat: -1,
                ease: "none",
                overwrite: "auto"
            });


        wrapper.addEventListener('mousemove', (e) => {
            let vars = moveTween.vars;
            vars.x = e.pageX;
            vars.y = e.pageY;
            vars.skewX = e.movementX * 0.08,
                vars.skewY = e.movementY * -0.02,
                vars.scaleX = 1 + Math.abs(e.movementX) * .003,
                vars.scaleY = 1 + Math.abs(e.movementY) * .001,
                moveTween.invalidate().restart();
        });


        // .container
        const items = document.querySelectorAll('.sm_image-trail-container')
        const imgArr = [
            "/assetes/img/approach.svg",
            "https://images.unsplash.com/photo-1643948962462-f1d6d486132f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1643948684785-9ec1693fe1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1643948962462-f1d6d486132f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1643948684785-9ec1693fe1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1643948962462-f1d6d486132f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        ];
        items.forEach((el, i) => {
            el.addEventListener('mouseenter', (e) => {
                image.style.backgroundImage = `url(${imgArr[i]})`;
                bgTween.restart();
            });
        });
    })

    return (
        <div>

            <div>
                sfafafsadf
            </div>
            <div class="sm_image-trail-section">
                <div class="sm_image-trail-container">
    
                    <div class="text">
                        <h1>One</h1>
                    </div>
    
                </div>
                <div class="sm_image-trail-container">
    
                    <div class="text">
                        <h1>Two</h1>
                    </div>
    
                </div>
                <div class="sm_image-trail-container">
    
                    <div class="text">
                        <h1>Three</h1>
                    </div>
    
                </div>
                <div class="sm_image-trail-container">
    
                    <div class="text">
                        <h1>Four</h1>
                    </div>
    
                </div>
    
                <div class="sm_image-trail-container">
    
                    <div class="text">
                        <h1>Five</h1>
                    </div>
    
                </div>
    
                <div class="sm_image-trail-container">
    
                    <div class="text">
                        <h1>Six</h1>
                    </div>
    
                </div>
                <div class="sm_image-trail bg-opacity-15"></div>
            </div>
            <dov>fsdfsafsdsf</dov>
        </div>
    )
}

export default Gsap;
