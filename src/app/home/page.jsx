'use client';

import { useState, useRef, useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Image from "next/image";
import gsap from "gsap";
import NavBar from "@/components/navbar/NavBar";
import SocialMarque from "@/components/work/SocialMarque";
import BrandMarque from "@/components/work/BrandMaque";
import RedCircle from "@/components/RedCircle";
import WorkBrandMarque from "@/components/home/WorkBrandMarque";
import EachWork from "@/components/work/EachWork";
import {
    Navigation,
    Pagination,
    EffectCards
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination"
import 'swiper/css/effect-cards';
import LeftArrow from "@/components/work/LeftArrow";
import RightArrow from "@/components/work/RightArrow";
import Footer from "@/components/Footer";
import { homeBg, mount, fortion, daitech, ghana, coWorkersMovement, line, Dali, man, arrowLeft, noiseOverlay, noiseOverlayTablet, noiseOverlayMobile, arrow } from "../../../public/assetes/img";

import "./home.scss"

const Home = () => {

    const [visible1, setVisible1] = useState(true)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)
    const [visible4, setVisible4] = useState(false)
    const visibleArray = [visible1, visible2, visible3, visible4]

    const functionsArray = [setVisible1, setVisible2, setVisible3, setVisible4];

    const callFunctionByIndex = (index) => {
        for (let i = 0; i < 4; i++) {
            if (i == index) {
                functionsArray[i](!visibleArray[i]);
            } else {
                functionsArray[i](false);
            }
        }
    }

    const slideRef = useRef(null)
    const prevBtnRef = useRef(null);
    const nextBtnRef = useRef(null);

    const [totalSlides, setTotalSlides] = useState();
    const [currentSlide, setCurrentSlide] = useState(1);

    const handleSwiper = (swiper) => {
        setTotalSlides(swiper.slides.length);
        swiper.on('slideChange', () => setCurrentSlide(swiper.realIndex + 1));
    };

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
        ];
        items.forEach((el, i) => {
            el.addEventListener('mouseenter', (e) => {
                image.style.backgroundImage = `url(${imgArr[i]})`;
                bgTween.restart();
            });
        });
    }, [])

    useEffect(() => {
        Aos.init(); // Initialize AOS
    }, []);

    return (
        <main className="bg-[#FFFAF6] relative overflow-hidden">
            <Image src={noiseOverlay} className="fixed top-0 z-[1] opacity-60 hidden lg:block" />
            <Image src={noiseOverlayTablet} className="fixed top-0 z-[1] opacity-60 hidden sm:block lg:hidden" />
            <Image src={noiseOverlayMobile} className="fixed top-0 z-[1] opacity-60 block sm:hidden" />
            <div className="w-[100vh] fixed left-0 transform -translate-x-[47.5%] translate-y-[48vh] -rotate-90 hidden lg:block z-10">
                <SocialMarque />
            </div>
            <div className="w-[100vh] fixed right-0 transform translate-x-[47.5%] translate-y-[48vh] rotate-90 hidden lg:block z-10">
                <BrandMarque />
            </div>
            <NavBar />
            <section className="relative bg-[#1B1612] overflow-hidden px-6 sm:px-16 lg:px-24 pt-8 pb-20 sm:pb-16 xl:pb-72 lg:mt-5 lg:mx-10 lg:rounded-2xl">
                <div className="absolute -right-[220px] lg:-right-[420px] top-0 h-full">
                    <div className="relative overflow-hidden h-full hidden sm:block sm:scale-100">
                        <div className="absolute left-0 sm:w-[304px] lg:w-[708px] bg-gradient-to-r from-[#1B1612] via-[#1B1612]/90 via-30% to-[#1B1612]/0 h-full z-10 drop-shadow-2xl"></div>
                        <Image src={homeBg} alt="homebg" className="h-full w-full object-cover" />
                    </div>
                </div>
                <div className="hidden sm:block absolute bottom-0 -left-[500px]">
                    <RedCircle />
                </div>
                <div className="block absolute left-1/2 transform -translate-x-1/2 -bottom-[400px] sm:hidden">
                    <RedCircle />
                </div>
                <div className="mx-auto relative z-10 mt-28 sm:mt-24 lg:mt-56">
                    <div className="w-full flex flex-col gap-5 sm:gap-8 lg:gap-10">
                        <h1 className="w-3/4 font-Grotesk font-medium text-white text-3xl sm:text-4xl lg:text-6xl">
                            Next-gen <br className="block xxl:hidden" />
                            <span className="font-Petit xxl:mx-5">digital product</span><br className="" />
                            development agency.
                        </h1>
                        <h3 className="font-Jakarta font-normal text-white text-base sm:text-lg lg:text-xl w-full sm:w-2/3 lg:w-1/3">
                            We build engaging user experience for early-stage startups by connecting the dots between users’ needs and the client’s business model.
                        </h3>
                        <button className="px-8 py-3 bg-[#DA3224] rounded-full w-fit flex justify-center items-center gap-3 hover:bg-red-700">
                            <h5 className="text-white font-medium font-Grotesk text-base">Let's talk!</h5>
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-[#1B1612] relative overflow-hidden px-6 sm:px-16 lg:px-24 pt-20 pb-20 lg:pb-35 -mt-5 lg:mt-5 lg:mx-10 rounded-t-2xl lg:rounded-2xl">
                <div className="hidden lg:block absolute -right-72 -bottom-72">
                    <RedCircle />
                </div>
                <h3 className="font-Petit font-normal text-2xl text-[#cccccc] relative z-10">02 / 09</h3>
                <div className="flex flex-col lg:flex-row justify-between mt-10 mb-20 gap-5 relative z-10">
                    <h1 data-aos="fade-up" className="md:w-2/3 lg:w-1/2 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        Maybe not famous brands but for us they
                        <span className="font-Petit ml-3">are enough</span>
                        .
                    </h1>
                    <h3 data-aos="fade-up" className=" lg:w-2/5 font-Jakarta font-normal text-[#cccccc] text-xl">
                        Not clients, but friends and family. Since beginning of the journey we’ve designed, developed and optimized lots of websites and met some incredible people along the way.
                    </h3>
                </div>
                <div className="absolute left-0 z-10">
                    <WorkBrandMarque />
                </div>
                <div className="flex justify-center mt-52 mt-50 relative z-10">
                    <button className="px-8 py-3 bg-[#DA3224] rounded-full w-fit flex justify-center items-center gap-3 mt-8 sm:mt-10 lg:mt-10 hover:bg-red-700">
                        <h5 className="text-white font-medium font-Grotesk text-base">BECOME A CLIENT</h5>
                        <Image src={arrow} alt="hand" />
                    </button>
                </div>
            </section>
            <section className="bg-[#1B1612] relative overflow-hidden px-6 sm:px-16 lg:px-24 pt-20 pb-20 lg:mt-5 lg:mx-10 lg:rounded-2xl">
                <div className="hidden lg:blockabsolute -right-72 -top-72">
                    <RedCircle />
                </div>
                <h3 className="font-Petit font-normal text-2xl text-[#cccccc]">03 / 09</h3>
                <div className="flex flex-col lg:flex-row justify-between mt-10 mb-20 gap-5 relative z-10">
                    <h1 data-aos="fade-up" className="lg:w-2/5 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        We combine
                        <span className="font-Petit ml-3">human empathy and intelligent data</span>
                        to provide the highest lever of satisfaction to our customers.
                    </h1>
                    <h3 data-aos="fade-up" className="lg:w-2/5 font-Jakarta font-normal text-[#cccccc] text-xl">
                        So... to make it easier, think of us as your special ops digital product development team - tackling with your challenges and needs. Whether you are adding a new feature, a new product, or redesigning an existing product, we will help set you up for success.
                    </h3>
                </div>
                <div className="relative z-10 sm_image-trail-section">
                    <div className="sm_image-trail-container relative flex flex-col gap-5 lg:gap-10 hover:bg-[#232120] hover:cursor-pointer px-2 py-1 sm:px-6 sm:py-3 lg:px-10 lg:py-5" onClick={() => callFunctionByIndex(0)}>
                        <div className={`flex justify-between w-full ${visible1 ? "text-white" : "text-[#555]"} hover:text-white`}>
                            <div className="flex items-center gap-4">
                                <h3 className="font-Grotesk font-medium text-sm lg:text-xl">01</h3>
                                <h1 className="font-Grotesk font-medium text-xl lg:text-[32px]">UX / UI Design</h1>
                            </div>
                            {!visible1 &&
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.83301 10.1668H0.833008V7.8335H7.83301V0.833496H10.1663V7.8335H17.1663V10.1668H10.1663V17.1668H7.83301V10.1668Z" fill="" />
                                </svg>
                            }
                            {visible1 &&
                                <div className="xl:w-1/3 flex items-center justify-between">
                                    <h1 className="font-Grotesk font-medium text-white text-2xl hidden xl:block">Tools & technologies</h1>
                                    <svg width="18" height="4" viewBox="0 0 18 4" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.833008 3.16634V0.833008H17.1663V3.16634H0.833008Z" fill="" />
                                    </svg>
                                </div>
                            }
                        </div>
                        {visible1 &&
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-5 xl:flex-row xl:justify-between">
                                    <h3 className="xl:w-1/2 font-Jakarta font-normal text-[#ccc] text-base {}">
                                        Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                    </h3>
                                    <div className="xl:w-1/3 flex flex-col gap-5">
                                        <h1 className="font-Grotesk font-medium text-white text-base sm:text-xl xl:text-2xl block xl:hidden">Tools & technologies</h1>
                                        <div className="flex flex-row xl:flex-col gap-2">
                                            <div className="flex flex-wrap items-center gap-4">
                                                <div className="tooltip relative">
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Figma</h3>
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                </div>
                                                <div className="tooltip relative">
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Sketch</h3>
                                                </div>
                                                <div className="tooltip relative">
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Adobe Photoshop</h3>
                                                </div>
                                                <div className="tooltip relative">
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Adobe Illustrator</h3>
                                                </div>
                                                <div className="tooltip relative">
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Miro</h3>
                                                </div>
                                                <div className="tooltip relative">
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Zeplin</h3>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="flex items-center text-[#ccc] gap-2 hover:text-white">
                                    <h3 className="link font-Jakarta font-normal text-lg">Learn more</h3>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                                    </svg>
                                </button>
                            </div>
                        }
                    </div>
                    <div className="sm_image-trail-container flex flex-col gap-5 lg:gap-10 hover:bg-[#232120] hover:cursor-pointer px-2 py-1 sm:px-6 sm:py-3 lg:px-10 lg:py-5" onClick={() => callFunctionByIndex(1)}>
                        <div className={`flex justify-between w-full ${visible2 ? "text-white" : "text-[#555]"} hover:text-white`}>
                            <div className="flex items-center gap-4">
                                <h3 className="font-Grotesk font-medium text-sm lg:text-xl">02</h3>
                                <h1 className="font-Grotesk font-medium text-xl lg:text-[32px]">Front-end Development</h1>
                            </div>
                            {!visible2 &&
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.83301 10.1668H0.833008V7.8335H7.83301V0.833496H10.1663V7.8335H17.1663V10.1668H10.1663V17.1668H7.83301V10.1668Z" fill="" />
                                </svg>
                            }
                            {visible2 &&
                                <div className="xl:w-1/3 flex items-center justify-between">
                                    <h1 className="font-Grotesk font-medium text-white text-2xl hidden xl:block">Tools & technologies</h1>
                                    <svg width="18" height="4" viewBox="0 0 18 4" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.833008 3.16634V0.833008H17.1663V3.16634H0.833008Z" fill="" />
                                    </svg>
                                </div>
                            }
                        </div>
                        {visible2 &&
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-5 xl:flex-row xl:justify-between">
                                    <h3 className="xl:w-1/2 font-Jakarta font-normal text-[#ccc] text-base {}">
                                        Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                    </h3>
                                    <div className="xl:w-1/3 flex flex-col gap-5">
                                        <h1 className="font-Grotesk font-medium text-white text-base sm:text-xl xl:text-2xl block xl:hidden">Tools & technologies</h1>
                                        <div className="flex flex-row xl:flex-col gap-2">
                                            <div className="flex flex-wrap items-center gap-4">
                                                <div className="tooltip relative">
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Figma</h3>
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                </div>
                                                <div className="tooltip relative">
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Sketch</h3>
                                                </div>
                                                <div className="tooltip relative">
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Adobe Photoshop</h3>
                                                </div>
                                                <div className="tooltip relative">
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Adobe Illustrator</h3>
                                                </div>
                                                <div className="tooltip relative">
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Miro</h3>
                                                </div>
                                                <div className="tooltip relative">
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Zeplin</h3>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="flex items-center text-[#ccc] gap-2 hover:text-white">
                                    <h3 className="link font-Jakarta font-normal text-lg">Learn more</h3>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                                    </svg>
                                </button>
                            </div>
                        }
                    </div>
                    <div className="sm_image-trail-container flex flex-col gap-5 lg:gap-10 hover:bg-[#232120] hover:cursor-pointer px-2 py-1 sm:px-6 sm:py-3 lg:px-10 lg:py-5" onClick={() => callFunctionByIndex(2)}>
                        <div className={`flex justify-between w-full ${visible3 ? "text-white" : "text-[#555]"} hover:text-white`}>
                            <div className="flex items-center gap-4">
                                <h3 className="font-Grotesk font-medium text-sm lg:text-xl">03</h3>
                                <h1 className="font-Grotesk font-medium text-xl lg:text-[32px]">Back-end Development</h1>
                            </div>
                            {!visible3 &&
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.83301 10.1668H0.833008V7.8335H7.83301V0.833496H10.1663V7.8335H17.1663V10.1668H10.1663V17.1668H7.83301V10.1668Z" fill="" />
                                </svg>
                            }
                            {visible3 &&
                                <div className="xl:w-1/3 flex items-center justify-between">
                                    <h1 className="font-Grotesk font-medium text-white text-2xl hidden xl:block">Tools & technologies</h1>
                                    <svg width="18" height="4" viewBox="0 0 18 4" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.833008 3.16634V0.833008H17.1663V3.16634H0.833008Z" fill="" />
                                    </svg>
                                </div>
                            }
                        </div>
                        {visible3 &&
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-5 xl:flex-row xl:justify-between">
                                    <h3 className="xl:w-1/2 font-Jakarta font-normal text-[#ccc] text-base {}">
                                        Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                    </h3>
                                    <div className="xl:w-1/3 flex flex-col gap-5">
                                        <h1 className="font-Grotesk font-medium text-white text-base sm:text-xl xl:text-2xl block xl:hidden">Tools & technologies</h1>
                                        <div className="flex flex-row xl:flex-col gap-2">
                                            <div className="flex flex-wrap items-center gap-4">
                                                <div className="tooltip relative">
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Figma</h3>
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                </div>
                                                <div className="tooltip relative">
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Sketch</h3>
                                                </div>
                                                <div className="tooltip relative">
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Adobe Photoshop</h3>
                                                </div>
                                                <div className="tooltip relative">
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Adobe Illustrator</h3>
                                                </div>
                                                <div className="tooltip relative">
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Miro</h3>
                                                </div>
                                                <div className="tooltip relative">
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Zeplin</h3>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="flex items-center text-[#ccc] gap-2 hover:text-white">
                                    <h3 className="link font-Jakarta font-normal text-lg">Learn more</h3>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                                    </svg>
                                </button>
                            </div>
                        }
                    </div>
                    <div className="sm_image-trail-container flex flex-col gap-5 lg:gap-10 hover:bg-[#232120] hover:cursor-pointer px-2 py-1 sm:px-6 sm:py-3 lg:px-10 lg:py-5" onClick={() => callFunctionByIndex(3)}>
                        <div className={`flex justify-between w-full ${visible4 ? "text-white" : "text-[#555]"} hover:text-white`}>
                            <div className="flex items-center gap-4">
                                <h3 className="font-Grotesk font-medium text-sm lg:text-xl">04</h3>
                                <h1 className="font-Grotesk font-medium text-xl lg:text-[32px]">Hybrid Mobile Development</h1>
                            </div>
                            {!visible4 &&
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.83301 10.1668H0.833008V7.8335H7.83301V0.833496H10.1663V7.8335H17.1663V10.1668H10.1663V17.1668H7.83301V10.1668Z" fill="" />
                                </svg>
                            }
                            {visible4 &&
                                <div className="xl:w-1/3 flex items-center justify-between">
                                    <h1 className="font-Grotesk font-medium text-white text-2xl hidden xl:block">Tools & technologies</h1>
                                    <svg width="18" height="4" viewBox="0 0 18 4" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.833008 3.16634V0.833008H17.1663V3.16634H0.833008Z" fill="" />
                                    </svg>
                                </div>
                            }
                        </div>
                        {visible4 &&
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-5 xl:flex-row xl:justify-between">
                                    <h3 className="xl:w-1/2 font-Jakarta font-normal text-[#ccc] text-base {}">
                                        Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                    </h3>
                                    <div className="xl:w-1/3 flex flex-col gap-5">
                                        <h1 className="font-Grotesk font-medium text-white text-base sm:text-xl xl:text-2xl block xl:hidden">Tools & technologies</h1>
                                        <div className="flex flex-row xl:flex-col gap-2">
                                            <div className="flex flex-wrap items-center gap-4">
                                                <div className="tooltip relative">
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Figma</h3>
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                </div>
                                                <div className="tooltip relative">
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Sketch</h3>
                                                </div>
                                                <div className="tooltip relative">
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Adobe Photoshop</h3>
                                                </div>
                                                <div className="tooltip relative">
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Adobe Illustrator</h3>
                                                </div>
                                                <div className="tooltip relative">
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Miro</h3>
                                                </div>
                                                <div className="tooltip relative">
                                                    <h3 className="absolute z-10 px-8 py-2 bg-[#555] rounded-2xl top-[100%] left-1/2 tooltip-text">This is tooltip.</h3>
                                                    <h3 className="bg-[#333] border-2 border-white/20 font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-[#555] hover:text-black">Zeplin</h3>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="flex items-center text-[#ccc] gap-2 hover:text-white">
                                    <h3 className="link font-Jakarta font-normal text-lg">Learn more</h3>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                                    </svg>
                                </button>
                            </div>
                        }
                    </div>
                    <div className="sm_image-trail"></div>
                </div>
            </section>
            <section className="bg-[#1B1612] relative lg:overflow-hidden px-6 sm:px-16 lg:px-24 pt-20 pb-20 lg:mt-5 lg:mx-10 lg:rounded-2xl">
                <div className="hidden lg:block absolute -left-72 bottom-[800px] z-0">
                    <RedCircle />
                </div>
                <h3 className="font-Petit font-normal text-2xl text-[#cccccc] relative z-10">04 / 09</h3>
                <div className="flex flex-col lg:flex-row justify-between mt-10 mb-5 lg:mb-0 gap-5 relative z-10">
                    <h1 data-aos="fade-up" className="w-2/3 lg:w-1/2 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        We see brands as they meant
                        <span className="font-Petit ml-3">to be seen</span>
                        .
                    </h1>
                    <div className="lg:w-2/5">
                        <h3 data-aos="fade-up" className="font-Jakarta font-normal text-[#cccccc] text-xl">
                            Brand adds value to your organisation, provides guidance in times of growth or uncertainty, and gives your business a competitive edge.
                        </h3>
                        <button className="flex items-center text-[#ccc] gap-2 mt-5 lg:mt-10 hover:text-white">
                            <h3 className="link font-Jakarta font-normal text-lg">Learn more</h3>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="relative z-10">
                    <div className="justify-between flex-col sm:flex-row mt-10 hidden lg:flex relative z-10">
                        <div className="w-full sm:w-[48%] lg:w-2/5 flex flex-col gap-40">
                            <EachWork src={mount} title="Mount Hamilton Youth Soccer Club" description="Biggest youth soccer club in Ontario region in Canada." />
                            <EachWork src={daitech} title="DaITech Computers" description="Read how we turned small side business into full-time Ontario’s one stop IT shop." />
                        </div>
                        <div className="w-full sm:w-[48%] lg:w-2/5 flex flex-col gap-40 lg:mt-40">
                            <EachWork src={fortion} title="Fortino Dental" description="Stunning revamp of one of the most technologically advanced dental clinic in Toronto, Ontario in Canada." />
                            <EachWork src={ghana} title="Ghana Life Insurance Ltd." description="Together with these people we created most simple online insurance app that brought smile like this to many Ghana families." />
                        </div>
                    </div>
                    <div className="lg:hidden flex flex-col gap-10">
                        <div className="flex flex-col gap-10 sm:flex-row justify-between">
                            <div className="w-full sm:w-[48%]">
                                <EachWork src={mount} title="Mount Hamilton Youth Soccer Club" description="Biggest youth soccer club in Ontario region in Canada." />
                            </div>
                            <div className="w-full sm:w-[48%]">
                                <EachWork src={fortion} title="Fortino Dental" description="Stunning revamp of one of the most technologically advanced dental clinic in Toronto, Ontario in Canada." />
                            </div>
                        </div>
                        <div className="flex flex-col gap-10 sm:flex-row justify-between">
                            <div className="w-full sm:w-[48%]">
                                <EachWork src={daitech} title="DaITech Computers" description="Read how we turned small side business into full-time Ontario’s one stop IT shop." />
                            </div>
                            <div className="w-full sm:w-[48%]">
                                <EachWork src={ghana} title="Ghana Life Insurance Ltd." description="Together with these people we created most simple online insurance app that brought smile like this to many Ghana families." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 lg:gap-4 mt-20 lg:mt-36 relative z-10">
                    <Image src={coWorkersMovement} alt="coworker" />
                    <div className="flex flex-col gap-5">
                        <h3 className="font-Jakarta font-normal text-[#ccc] text-base lg:text-lg">Case study</h3>
                        <h1 className="font-Grotesk font-medium text-white text-xl lg:text-3xl">ID Data Consulting Agency</h1>
                        <h3 className="font-Jakarta font-normal text-[#ccc] text-base lg:text-xl">USA Government department for data consulting</h3>
                    </div>
                </div>
            </section>
            <section className="bg-[#1B1612] relative lg:overflow-hidden px-6 sm:px-16 lg:px-24 pt-20 pb-20 lg:mt-5 lg:mb-5 lg:mx-10 lg:rounded-2xl">
                <div className="hidden lg:block absolute -left-72 -bottom-72">
                    <RedCircle />
                </div>
                <h3 className="font-Petit font-normal text-2xl text-[#cccccc] relative z-10">05 / 09</h3>
                <div className="flex flex-col lg:flex-row justify-between mt-10 gap-5 relative z-10">
                    <h1 data-aos="fade-up" className="w-2/3 lg:w-1/2 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        <span className="font-Petit mr-2">Don't believe us?</span>
                        See what our clients say;
                    </h1>
                    <h3 data-aos="fade-up" className="lg:w-2/5 font-Jakarta font-normal text-[#cccccc] text-xl">
                        So... to make it easier, think of us as your special ops digital product development team - tackling with your challenges and needs. Whether you are adding a new feature, a new product, or redesigning an existing product, we will help set you up for success.
                    </h3>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center relative z-10 mt-12">
                    <div className="w-full sm:w-2/5 mx-auto sm:mx-0 flex justify-center">
                        <div className="relative mt-12 sm:mt-20 lg:mt-28 flex justify-center w-full">
                            <Swiper
                                onSwiper={handleSwiper}
                                slidesPerView={1}
                                spaceBetween={30}
                                ref={slideRef}
                                modules={[
                                    Navigation,
                                    Pagination,
                                    EffectCards
                                ]}
                                effect={'cards'}
                                grabCursor={true}
                                navigation={{
                                    prevEl: prevBtnRef.current,
                                    nextEl: nextBtnRef.current,
                                }}
                                pagination={{
                                    el: ".swiper-pagination",
                                    clickable: true,
                                }}
                            >
                                <SwiperSlide className="rounded-[30px] bg-red-700">
                                    <Image src={man} alt="man" className="mx-auto" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={man} alt="man" className="mx-auto" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={man} alt="man" className="mx-auto" />
                                </SwiperSlide>
                            </Swiper>
                            <button ref={prevBtnRef} className="swipe-button-prev relative z-10" >
                                {currentSlide === 1 ?
                                    <LeftArrow />
                                    :
                                    <LeftArrow className="stroke-white hover:stroke-black hover:fill-white" />
                                }
                            </button>
                            <button ref={nextBtnRef} className="swipe-button-next relative z-10">
                                {currentSlide === totalSlides ?
                                    <RightArrow />
                                    :
                                    <RightArrow className="stroke-white hover:stroke-black hover:fill-white" />
                                }
                            </button>
                        </div>
                    </div>
                    <Image src={line} alt="line" className="hidden lg:block" />
                    <div className="flex flex-col gap-10 sm:w-2/5 pt-10 sm:pt-20">
                        {currentSlide === 1 &&
                            <>
                                <h1 className="font-Grotesk font-medium text-white text-xl lg:text-4xl">Just amazing!</h1>
                                <h3 className="font-Jakarta italic text-white text-base lg:text-3xl">
                                    Slide1 “ Incode Agency has helped my team and I stay on the same page. Previously, we were all over the board. Using Incode Agency has definitely saved us time and money. “
                                </h3>
                                <div className="flex items-center gap-5">
                                    <Image src={Dali} alt="dali" />
                                    <div className="flex flex-col  gap-3">
                                        <h1 className="font-Grotesk font-medium text-white text-base lg:text-xl">Dali Bataneat</h1>
                                        <h3 className="font-Jakarta font-normal text-[#ccc] text-base lg:text-xl">CEO of DaITech Computers</h3>
                                    </div>
                                </div>
                            </>
                        }
                        {currentSlide === 2 &&
                            <>
                                <h1 className="font-Grotesk font-medium text-white text-xl lg:text-4xl">Just amazing!</h1>
                                <h3 className="font-Jakarta italic text-white text-base lg:text-3xl">
                                    Slide2 “ Incode Agency has helped my team and I stay on the same page. Previously, we were all over the board. Using Incode Agency has definitely saved us time and money. “
                                </h3>
                                <div className="flex items-center gap-5">
                                    <Image src={Dali} alt="dali" />
                                    <div className="flex flex-col  gap-3">
                                        <h1 className="font-Grotesk font-medium text-white text-base lg:text-xl">Dali Bataneat</h1>
                                        <h3 className="font-Jakarta font-normal text-[#ccc] text-base lg:text-xl">CEO of DaITech Computers</h3>
                                    </div>
                                </div>
                            </>
                        }
                        {currentSlide === 3 &&
                            <>
                                <h1 className="font-Grotesk font-medium text-white text-xl lg:text-4xl">Just amazing!</h1>
                                <h3 className="font-Jakarta italic text-white text-base lg:text-3xl">
                                    Slide3 “ Incode Agency has helped my team and I stay on the same page. Previously, we were all over the board. Using Incode Agency has definitely saved us time and money. “
                                </h3>
                                <div className="flex items-center gap-5">
                                    <Image src={Dali} alt="dali" />
                                    <div className="flex flex-col  gap-3">
                                        <h1 className="font-Grotesk font-medium text-white text-base lg:text-xl">Dali Bataneat</h1>
                                        <h3 className="font-Jakarta font-normal text-[#ccc] text-base lg:text-xl">CEO of DaITech Computers</h3>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
                <div className="flex justify-center sm:mt-12 lg:mt-20 relative z-10">
                    <button className="px-8 py-3 bg-[#DA3224] rounded-full w-fit flex justify-center items-center gap-3 mt-8 sm:mt-10 lg:mt-10 hover:bg-red-700">
                        <h5 className="text-white font-medium font-Grotesk text-base">BECOME A CLIENT</h5>
                        <Image src={arrow} alt="hand" />
                    </button>
                </div>
            </section>
            <Footer className="lg:mx-10" />
        </main>
    )
}

export default Home;
