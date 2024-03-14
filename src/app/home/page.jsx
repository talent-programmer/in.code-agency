'use client';

import { useState, useRef } from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
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
import { homeBg, minus, plus, mount, fortion, daitech, ghana, coWorkersMovement, line, Dali, man, woman } from "../../../public/assetes/img";

import "./home.scss"

const Home = () => {
    
    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)
    const [visible4, setVisible4] = useState(false)

    const slideRef = useRef(null)
    const prevBtnRef = useRef(null);
    const nextBtnRef = useRef(null);
    
    return (
        <main className="bg-[#FFFAF6] w-full lg:px-10">
            <div className="w-[100vh] fixed left-0 transform -translate-x-[47.5%] translate-y-[48vh] -rotate-90 hidden lg:block">
                <SocialMarque />
            </div>
            <div className="w-[100vh] fixed right-0 transform translate-x-[47.5%] translate-y-[48vh] rotate-90 hidden lg:block">
                <BrandMarque />
            </div>
            <section className="relative bg-[#1B1612] lg:overflow-hidden px-6 sm:px-16 lg:px-24 pt-8 pb-20 sm:pb-40 md:pb-48 lg:pb-56 xl:pb-64 xxl:pb-72 lg:rounded-2xl">
                <div className="absolute bottom-0 -left-72">
                    <RedCircle />
                </div>
                <div className="absolute -right-[20%] top-0 h-1/2">
                    <div className="relative">
                        <div className="absolute w-1/2 bg-gradient-to-r from-[#1B1612] to-[#1B1612]/0 h-full z-10"></div>
                        <Image src={homeBg} className="" />
                    </div>
                </div>
                <NavBar />
                <div className="max-w-[1580px] mx-auto relative z-10 mt-52">
                    <div className="w-full flex flex-col gap-10">
                        <h1 className="font-Grotesk font-medium text-white text-4xl xl:text-5xl xxl:text-6xl">
                            Next-gen 
                            <span className="font-Petit mx-5">digital product</span><br />
                            development agency.
                        </h1>
                        <h3 className="font-Jakarta font-normal text-white text-xl w-1/3">
                            We build engaging user experience for early-stage startups by connecting the dots between users’ needs and the client’s business model.
                        </h3>
                        <button className="px-8 py-3 bg-red-600 rounded-full w-fit flex justify-center items-center gap-3 mt-8 sm:mt-10 lg:mt-10 hover:bg-red-700">
                            <h5 className="text-white font-medium font-Grotesk text-base">Let's talk!</h5>
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-[#1B1612] relative lg:overflow-hidden px-6 sm:px-16 lg:px-24 pt-20 pb-20 lg:pb-35 lg:mt-5 lg:rounded-2xl">
                <div className="absolute -right-72 -bottom-72">
                    <RedCircle />
                </div>
                <h3 className="font-Petit font-normal text-2xl text-[#cccccc]">02 / 09</h3>
                <div className="flex flex-col lg:flex-row justify-between mt-10 mb-20 gap-5">
                    <h1 data-aos="fade-up" className="w-2/3 lg:w-1/2 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        Maybe not famous brands but for us they
                        <span className="font-Petit ml-3">are enough</span>
                        .
                    </h1>
                    <h3 data-aos="fade-up" className="w-6/7 lg:w-2/5 font-Jakarta font-normal text-[#cccccc] text-xl">
                        Not clients, but friends and family. Since beginning of the journey we’ve designed, developed and optimized lots of websites and met some incredible people along the way.
                    </h3>
                </div>
                <div className="absolute left-0">
                    <WorkBrandMarque />
                </div>
                <div className="flex justify-center mt-52 mt-50">
                    <button className="px-8 py-3 bg-red-600 rounded-full w-fit flex justify-center items-center gap-3 mt-8 sm:mt-10 lg:mt-10 hover:bg-red-700">
                        <h5 className="text-white font-medium font-Grotesk text-base">BECOME A CLIENT</h5>
                        <Image />
                    </button>
                </div>
            </section>
            <section className="bg-[#1B1612] relative lg:overflow-hidden px-6 sm:px-16 lg:px-24 pt-20 pb-20 lg:mt-5 lg:rounded-2xl">
                <div className="absolute -right-72 -top-72">
                    <RedCircle />
                </div>
                <h3 className="font-Petit font-normal text-2xl text-[#cccccc]">03 / 09</h3>
                <div className="flex flex-col lg:flex-row justify-between mt-10 mb-20 gap-5">
                    <h1 data-aos="fade-up" className="w-2/3 lg:w-2/5 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        We combine
                        <span className="font-Petit ml-3">human empathy and intelligent data</span>
                        to provide the highest lever of satisfaction to our customers.
                    </h1>
                    <h3 data-aos="fade-up" className="w-6/7 lg:w-2/5 font-Jakarta font-normal text-[#cccccc] text-xl">
                        So... to make it easier, think of us as your special ops digital product development team - tackling with your challenges and needs. Whether you are adding a new feature, a new product, or redesigning an existing product, we will help set you up for success.
                    </h3>
                </div>
                <div>
                    <div className="flex justify-between hover:bg-[#232120] hover:cursor-pointer px-10 py-5" onClick={() => setVisible1(!visible1)}>
                        <div className="w-2/5 flex flex-col gap-10">
                            <div className="flex items-center gap-4">
                                <h3 className="font-Grotesk font-medium text-white text-xl">01</h3>
                                <h1 className="font-Grotesk font-medium text-white text-[32px]">UX / UI Design</h1>
                            </div>
                            { visible1 &&
                                <>
                                    <h3 className="font-Jakarta font-normal text-[#ccc] text-base {}">
                                        Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                    </h3>
                                    <button className="hidden lg:flex items-center text-[#ccc] gap-2 hover:text-white">
                                        <h3 className="link font-Jakarta font-normal text-lg">Learn more</h3>
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                                        </svg>
                                    </button>
                                </>
                            }
                        </div>
                        { visible1 && 
                            <div className="w-2/5">
                                <div className="flex items-center justify-between">
                                    <h1 className="font-Grotesk font-medium text-white text-2xl">Tools & technologies</h1>
                                    <Image src={minus} />
                                </div>
                                <div className="mt-9 flex flex-col gap-2">
                                    <div className="flex items-center gap-4">
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Figma</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Sketch</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Adobe Photoshop</h3>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Adobe Illustrator</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Miro</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Zeplin</h3>
                                    </div>
                                </div>
                            </div>
                        }
                        { !visible1 &&
                            <Image src={plus} />
                        }
                    </div>
                    <div className="flex justify-between hover:bg-[#232120] hover:cursor-pointer px-10 py-5" onClick={() => setVisible2(!visible2)}>
                        <div className="w-1/2 flex flex-col gap-10">
                            <div className="flex items-center gap-4">
                                <h3 className="font-Grotesk font-medium text-white text-xl">02</h3>
                                <h1 className="font-Grotesk font-medium text-white text-[32px]">Front-end Development</h1>
                            </div>
                            { visible2 &&
                                <>
                                    <h3 className="font-Jakarta font-normal text-[#ccc] text-base {}">
                                        Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                    </h3>
                                    <button className="hidden lg:flex items-center text-[#ccc] gap-2 hover:text-white">
                                        <h3 className="link font-Jakarta font-normal text-lg">Learn more</h3>
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                                        </svg>
                                    </button>
                                </>
                            }
                        </div>
                        { visible2 && 
                            <div className="w-2/5">
                                <div className="flex items-center justify-between">
                                    <h1 className="font-Grotesk font-medium text-white text-2xl">Tools & technologies</h1>
                                    <Image src={minus} />
                                </div>
                                <div className="mt-9 flex flex-col gap-2">
                                    <div className="flex items-center gap-4">
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Figma</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Sketch</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Adobe Photoshop</h3>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Adobe Illustrator</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Miro</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Zeplin</h3>
                                    </div>
                                </div>
                            </div>
                        }
                        { !visible2 &&
                            <Image src={plus} />
                        }
                    </div>
                    <div className="flex justify-between hover:bg-[#232120] hover:cursor-pointer px-10 py-5" onClick={() => setVisible3(!visible3)}>
                        <div className="w-1/2 flex flex-col gap-10">
                            <div className="flex items-center gap-4">
                                <h3 className="font-Grotesk font-medium text-white text-xl">03</h3>
                                <h1 className="font-Grotesk font-medium text-white text-[32px]">Back-end Development</h1>
                            </div>
                            { visible3 &&
                                <>
                                    <h3 className="font-Jakarta font-normal text-[#ccc] text-base {}">
                                        Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                    </h3>
                                    <button className="hidden lg:flex items-center text-[#ccc] gap-2 hover:text-white">
                                        <h3 className="link font-Jakarta font-normal text-lg">Learn more</h3>
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                                        </svg>
                                    </button>
                                </>
                            }
                        </div>
                        { visible3 && 
                            <div className="w-2/5">
                                <div className="flex items-center justify-between">
                                    <h1 className="font-Grotesk font-medium text-white text-2xl">Tools & technologies</h1>
                                    <Image src={minus} />
                                </div>
                                <div className="mt-9 flex flex-col gap-2">
                                    <div className="flex items-center gap-4">
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Figma</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Sketch</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Adobe Photoshop</h3>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Adobe Illustrator</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Miro</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Zeplin</h3>
                                    </div>
                                </div>
                            </div>
                        }
                        { !visible3 &&
                            <Image src={plus} />
                        }
                    </div>
                    <div className="flex justify-between hover:bg-[#232120] hover:cursor-pointer  px-10 py-5" onClick={() => setVisible4(!visible4)}>
                        <div className="w-1/2 flex flex-col gap-10">
                            <div className="flex items-center gap-4">
                                <h3 className="font-Grotesk font-medium text-white text-xl">04</h3>
                                <h1 className="font-Grotesk font-medium text-white text-[32px]">Hybrid Mobile Develoment</h1>
                            </div>
                            { visible4 &&
                                <>
                                    <h3 className="font-Jakarta font-normal text-[#ccc] text-base {}">
                                        Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                    </h3>
                                    <button className="hidden lg:flex items-center text-[#ccc] gap-2 hover:text-white">
                                        <h3 className="link font-Jakarta font-normal text-lg">Learn more</h3>
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                                        </svg>
                                    </button>
                                </>
                            }
                        </div>
                        { visible4 && 
                            <div className="w-2/5">
                                <div className="flex items-center justify-between">
                                    <h1 className="font-Grotesk font-medium text-white text-2xl">Tools & technologies</h1>
                                    <Image src={minus} />
                                </div>
                                <div className="mt-9 flex flex-col gap-2">
                                    <div className="flex items-center gap-4">
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Figma</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Sketch</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Adobe Photoshop</h3>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Adobe Illustrator</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Miro</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl">Zeplin</h3>
                                    </div>
                                </div>
                            </div>
                        }
                        { !visible4 &&
                            <Image src={plus} />
                        }
                    </div>
                </div>
            </section>
            <section className="bg-[#1B1612] relative lg:overflow-hidden px-6 sm:px-16 lg:px-24 pt-20 pb-20 lg:mt-5 lg:rounded-2xl">
                <h3 className="font-Petit font-normal text-2xl text-[#cccccc]">04 / 09</h3>
                <div className="flex flex-col lg:flex-row justify-between mt-10 gap-5">
                    <h1 data-aos="fade-up" className="w-2/3 lg:w-1/2 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        We see brands as they meant
                        <span className="font-Petit ml-3">to be seen</span>
                        .
                    </h1>
                    <div className="lg:w-2/5">
                        <h3 data-aos="fade-up" className="font-Jakarta font-normal text-[#cccccc] text-xl">
                            Brand adds value to your organisation, provides guidance in times of growth or uncertainty, and gives your business a competitive edge.
                        </h3>
                        <button className="hidden lg:flex items-center text-[#ccc] gap-2 mt-10 hover:text-white">
                            <h3 className="link font-Jakarta font-normal text-lg">Learn more</h3>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                            </svg>
                        </button>
                    </div>
                </div>
                <div>
                    <div className="justify-between flex-col sm:flex-row mt-10 hidden lg:flex">
                        <div className="w-full sm:w-[48%] lg:w-2/5 flex flex-col gap-20">
                            <EachWork src={mount} title="Mount Hamilton Youth Soccer Club" description="Biggest youth soccer club in Ontario region in Canada." />
                            <EachWork src={daitech} title="DaITech Computers" description="Read how we turned small side business into full-time Ontario’s one stop IT shop." />
                        </div>
                        <div className="w-full sm:w-[48%] lg:w-2/5 flex flex-col gap-20 lg:mt-40">
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
                <div className="flex flex-col gap-4 mt-36">
                    <Image src={coWorkersMovement} />
                    <div className="flex flex-col gap-5">
                        <h3 className="font-Jakarta font-normal text-[#ccc] text-lg">Case study</h3>
                        <h1 className="font-Grotesk font-medium text-white text-3xl">ID Data Consulting Agency</h1>
                        <h3 className="font-Jakarta font-normal text-[#ccc] text-xl">USA Government department for data consulting</h3>
                    </div>
                </div>
            </section>
            <section className="bg-[#1B1612] relative lg:overflow-hidden px-6 sm:px-16 lg:px-24 pt-20 pb-20 lg:mt-5 lg:mb-5 lg:rounded-2xl">
                <div className="absolute -left-72 -bottom-72">
                    <RedCircle />
                </div>
                <h3 className="font-Petit font-normal text-2xl text-[#cccccc]">05 / 09</h3>
                <div className="flex flex-col lg:flex-row justify-between mt-10 gap-5">
                    <h1 data-aos="fade-up" className="w-2/3 lg:w-1/2 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        <span className="font-Petit mr-2">Don't believe us?</span>
                        See what our clients say;
                    </h1>
                    <h3 data-aos="fade-up" className="lg:w-2/5 font-Jakarta font-normal text-[#cccccc] text-xl">
                        So... to make it easier, think of us as your special ops digital product development team - tackling with your challenges and needs. Whether you are adding a new feature, a new product, or redesigning an existing product, we will help set you up for success.
                    </h3>
                </div>
                <div className="flex justify-between items-center relative mt-12">
                    <div className="w-2/5 flex justify-center">
                        <div className="relative mt-12 sm:mt-20 lg:mt-28 flex justify-center w-full">
                            <Swiper
                                slidesPerView={1}
                                ref={slideRef}
                                modules={[
                                    Navigation,
                                    Pagination,
                                    EffectCards
                                ]}
                                loop={true}
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
                                <SwiperSlide className="rounded-[30px]">
                                    <Image src={man} className="mx-auto" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={man} className="mx-auto" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={man} className="mx-auto" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={man} className="mx-auto" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={man} className="mx-auto" />
                                </SwiperSlide>
                            </Swiper>
                            <button ref={prevBtnRef} className="swipe-button-prev">
                                <LeftArrow className="hover:stroke-white" />
                            </button>
                            <button ref={nextBtnRef} className="swipe-button-next">
                                <RightArrow className="hover:stroke-white" />
                            </button>
                        </div>
                    </div>
                    <Image src={line} />
                    <div className="flex flex-col gap-10 w-2/5 pt-20">
                        <h1 className="font-Grotesk font-medium text-white text-4xl">Just amazing!</h1>
                        <h3 className="font-Jakarta italic text-white text-3xl">
                            “ Incode Agency has helped my team and I stay on the same page. Previously, we were all over the board. Using Incode Agency has definitely saved us time and money. “
                        </h3>
                        <div className="flex items-center gap-5">
                            <Image src={Dali} />
                            <div className="flex flex-col  gap-3">
                                <h1 className="font-Grotesk font-medium text-white text-xl">Dali Bataneat</h1>
                                <h3 className="font-Jakarta font-normal text-[#ccc] text-xl">CEO of DaITech Computers</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-20">
                    <button className="px-8 py-3 bg-red-600 rounded-full w-fit flex justify-center items-center gap-3 mt-8 sm:mt-10 lg:mt-10 hover:bg-red-700">
                        <h5 className="text-white font-medium font-Grotesk text-base">BECOME A CLIENT</h5>
                        <Image />
                    </button>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Home;
