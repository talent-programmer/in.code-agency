'use client';

import { useState } from "react";
import Image from "next/image";
import NavBar from "@/components/navbar/NavBar";
import SocialMarque from "@/components/work/SocialMarque";
import BrandMarque from "@/components/work/BrandMaque";
import RedCircle from "@/components/RedCircle";
import Instagram from "@/components/comingsoon/Instagram";
import Threads from "@/components/comingsoon/Threads";
import Facebook from "@/components/comingsoon/Facebook";
import LinkedIn from "@/components/comingsoon/LinkedIn";
import Footer from "@/components/Footer";
import { noiseOverlay, noiseOverlayTablet, noiseOverlayMobile } from "../../../public/assetes/img";
import { InlineWidget } from "react-calendly";

const Contact = () => {

    const [visible1, setVisible1] = useState(true)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)
    const [visible4, setVisible4] = useState(false)
    const [visible5, setVisible5] = useState(false)
    const [visible6, setVisible6] = useState(false)

    const functionsArray = [setVisible1, setVisible2, setVisible3, setVisible4, setVisible5, setVisible6];
    const visibleArray = [visible1, visible2, visible3, visible4, visible5, visible6]

    const callFunctionByIndex = (index) => {
        for (let i = 0; i < 6; i++) {
            if (i == index) {
                functionsArray[i](!visibleArray[i]);
            } else {
                functionsArray[i](false);
            }
        }
    }

    return (
        <main className="bg-[#FFFAF6] w-full relative overflow-hidden">
            <Image src={noiseOverlay} className="fixed top-0 z-[1] opacity-60 hidden lg:block w-full" />
            <Image src={noiseOverlayTablet} className="fixed top-0 z-[1] opacity-60 hidden sm:block lg:hidden" />
            <Image src={noiseOverlayMobile} className="fixed top-0 z-[1] opacity-60 block sm:hidden" />
            <div className="w-[100vh] fixed left-0 transform -translate-x-[47.5%] translate-y-[48vh] -rotate-90 hidden lg:block">
                <SocialMarque />
            </div>
            <div className="w-[100vh] fixed right-0 transform translate-x-[47.5%] translate-y-[48vh] rotate-90 hidden lg:block">
                <BrandMarque />
            </div>
            <NavBar />
            <section className="bg-[#1B1612] relative overflow-hidden px-6 sm:px-16 lg:px-24 pt-8 pb-10 lg:pb-20 lg:mx-10 lg:mt-5 lg:rounded-2xl">
                <div className="hidden lg:block absolute -left-72 -bottom-72">
                    <RedCircle />
                </div>
                <div className="max-w-[1580px] mx-auto flex flex-col lg:flex-row justify-between relative z-10">
                    <div className="flex flex-col gap-10 z-10 mt-24 lg:mt-36">
                        <h1 className="font-Grotesk font-medium text-white text-3xl sm:text-4xl lg:text-6xl">Hello there!</h1>
                        <h3 className="font-Jakarta font-normal text-[#ccc] text-base sm:text-lg lg:text-xl sm:w-2/3 lg:w-2/5">
                            We'd love to learn more about you and what we can design and build together.
                        </h3>
                        <h3 className="font-Jakarta font-normal text-[#ccc] text-base sm:text-lg lg:text-xl">
                            Become a client: <br />
                            <a href="mailto:hello@incodeagency.com" className="font-bold">hello@incodeagency.com</a>
                        </h3>
                        <h3 className="font-Jakarta font-normal text-[#ccc] text-base sm:text-lg lg:text-xl mt-20">
                            Or just skip formality and find us on:
                        </h3>
                        <div className="flex gap-7 items-center">
                            <Instagram className="hover:fill-white hover:cursor-pointer" />
                            <Threads className="hover:fill-white hover:cursor-pointer" />
                            <LinkedIn className="hover:fill-white hover:cursor-pointer" />
                            <Facebook className="hover:fill-white hover:cursor-pointer" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative flex flex-row-reverse mt-8 lg:mt-10">
                        <div className="relative z-10 w-full">
                            <InlineWidget url="https://calendly.com/codingjoker0420/30min?hide_gdpr_banner=1" styles={{ width: "100%", height: 900 }} />
                        </div>
                        <div className="block absolute left-1/2 sm:top-1/4 transform -translate-x-1/2 -translate-y-1/2 z-0 scale-x-75 scale-y-50 sm:scale-y-75 sm:scale-x-100 lg:hidden">
                            <RedCircle />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#1B1612] relative overflow-hidden px-6 sm:px-16 lg:px-24 pt-20 pb-20 lg:mt-5 lg:mb-5 lg:mx-10 lg:rounded-2xl">
                <div className="hidden lg:block absolute -left-72 -top-72">
                    <RedCircle />
                </div>
                <h3 className="max-w-[1580px] mx-auto font-Petit font-normal text-2xl text-[#cccccc] relative z-10">03 / 09</h3>
                <div className="max-w-[1580px] mx-auto flex flex-col lg:flex-row justify-between mt-10 mb-20 mx-auto gap-5 relative z-10">
                    <h1 data-aos="fade-up" className="sm:w-2/3 lg:w-2/5 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        We got asked these questions often...
                    </h1>
                    <h3 data-aos="fade-up" className="lg:w-2/5 font-Jakarta font-normal text-[#cccccc] text-base lg:text-xl">
                        But if you don’t find your answer here, feel free to contact us via email or social media platforms.
                    </h3>
                </div>
                <div className="max-w-[1580px] mx-auto relative z-10">
                    <div className={`hover:bg-[#232120] hover:cursor-pointer px-2 py-1 sm:px-6 sm:py-3 lg:px-10 lg:py-5 ${visible1 ? "text-white" : "text-[#555]"} hover:text-white`} onClick={() => callFunctionByIndex(0)}>
                        <div className="flex flex-col gap-10 w-full">
                            <div className="flex justify-between items-center w-full">
                                <div className="w-[90%] flex gap-2 lg:gap-4">
                                    <div className="mt-1 lg:mt-2">
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="currentcolor" strokeWidth="2" />
                                            <path d="M10 16.5C10.2761 16.5 10.5 16.2761 10.5 16C10.5 15.7239 10.2761 15.5 10 15.5C9.72386 15.5 9.5 15.7239 9.5 16C9.5 16.2761 9.72386 16.5 10 16.5Z" fill="currentcolor" stroke="currentcolor" />
                                            <path d="M10 14V12.581C10 11.637 10.604 10.799 11.5 10.5C11.9367 10.3544 12.3166 10.075 12.5858 9.70156C12.855 9.32809 12.9999 8.87939 13 8.419V7.906C13 6.3 11.7 5 10.094 5H10C9.20435 5 8.44129 5.31607 7.87868 5.87868C7.31607 6.44129 7 7.20435 7 8" stroke="currentcolor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h1 className="font-Grotesk font-medium text-base sm:text-xl lg:text-3xl">What separates in.code from other digital web design agencies?</h1>
                                    </div>
                                </div>
                                {!visible1 &&
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.83301 10.1668H0.833008V7.8335H7.83301V0.833496H10.1663V7.8335H17.1663V10.1668H10.1663V17.1668H7.83301V10.1668Z" fill="" />
                                    </svg>
                                }
                                {visible1 &&
                                    <svg width="18" height="4" viewBox="0 0 18 4" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.833008 3.16634V0.833008H17.1663V3.16634H0.833008Z" fill="" />
                                    </svg>
                                }
                            </div>
                            {visible1 &&
                                <h3 className="font-Jakarta font-normal text-[#ccc] text-base {}">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                            }
                        </div>
                    </div>
                    <hr className="border-[#ccc] opacity-10" />
                    <div className={`hover:bg-[#232120] hover:cursor-pointer px-2 py-1 sm:px-6 sm:py-3 lg:px-10 lg:py-5 ${visible2 ? "text-white" : "text-[#555]"} hover:text-white`} onClick={() => callFunctionByIndex(1)}>
                        <div className="flex flex-col gap-10 w-full">
                            <div className="flex justify-between items-center w-full">
                                <div className="w-[90%] flex gap-2 lg:gap-4">
                                    <div className="mt-1 lg:mt-2">
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="currentcolor" strokeWidth="2" />
                                            <path d="M10 16.5C10.2761 16.5 10.5 16.2761 10.5 16C10.5 15.7239 10.2761 15.5 10 15.5C9.72386 15.5 9.5 15.7239 9.5 16C9.5 16.2761 9.72386 16.5 10 16.5Z" fill="currentcolor" stroke="currentcolor" />
                                            <path d="M10 14V12.581C10 11.637 10.604 10.799 11.5 10.5C11.9367 10.3544 12.3166 10.075 12.5858 9.70156C12.855 9.32809 12.9999 8.87939 13 8.419V7.906C13 6.3 11.7 5 10.094 5H10C9.20435 5 8.44129 5.31607 7.87868 5.87868C7.31607 6.44129 7 7.20435 7 8" stroke="currentcolor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h1 className="font-Grotesk font-medium text-base sm:text-xl lg:text-3xl">What separates in.code from other digital web design agencies?</h1>
                                    </div>
                                </div>
                                {!visible2 &&
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.83301 10.1668H0.833008V7.8335H7.83301V0.833496H10.1663V7.8335H17.1663V10.1668H10.1663V17.1668H7.83301V10.1668Z" fill="" />
                                    </svg>
                                }
                                {visible2 &&
                                    <svg width="18" height="4" viewBox="0 0 18 4" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.833008 3.16634V0.833008H17.1663V3.16634H0.833008Z" fill="" />
                                    </svg>
                                }
                            </div>
                            {visible2 &&
                                <h3 className="font-Jakarta font-normal text-[#ccc] text-base {}">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                            }
                        </div>
                    </div>
                    <hr className="border-[#ccc] opacity-10" />
                    <div className={`hover:bg-[#232120] hover:cursor-pointer px-2 py-1 sm:px-6 sm:py-3 lg:px-10 lg:py-5 ${visible3 ? "text-white" : "text-[#555]"} hover:text-white`} onClick={() => callFunctionByIndex(2)}>
                        <div className="flex flex-col gap-10 w-full">
                            <div className="flex justify-between items-center w-full">
                                <div className="w-[90%] flex gap-2 lg:gap-4">
                                    <div className="mt-1 lg:mt-2">
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="currentcolor" strokeWidth="2" />
                                            <path d="M10 16.5C10.2761 16.5 10.5 16.2761 10.5 16C10.5 15.7239 10.2761 15.5 10 15.5C9.72386 15.5 9.5 15.7239 9.5 16C9.5 16.2761 9.72386 16.5 10 16.5Z" fill="currentcolor" stroke="currentcolor" />
                                            <path d="M10 14V12.581C10 11.637 10.604 10.799 11.5 10.5C11.9367 10.3544 12.3166 10.075 12.5858 9.70156C12.855 9.32809 12.9999 8.87939 13 8.419V7.906C13 6.3 11.7 5 10.094 5H10C9.20435 5 8.44129 5.31607 7.87868 5.87868C7.31607 6.44129 7 7.20435 7 8" stroke="currentcolor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h1 className="font-Grotesk font-medium text-base sm:text-xl lg:text-3xl">What separates in.code from other digital web design agencies?</h1>
                                    </div>
                                </div>
                                {!visible3 &&
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.83301 10.1668H0.833008V7.8335H7.83301V0.833496H10.1663V7.8335H17.1663V10.1668H10.1663V17.1668H7.83301V10.1668Z" fill="" />
                                    </svg>
                                }
                                {visible3 &&
                                    <svg width="18" height="4" viewBox="0 0 18 4" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.833008 3.16634V0.833008H17.1663V3.16634H0.833008Z" fill="" />
                                    </svg>
                                }
                            </div>
                            {visible3 &&
                                <h3 className="font-Jakarta font-normal text-[#ccc] text-base {}">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                            }
                        </div>
                    </div>
                    <hr className="border-[#ccc] opacity-10" />
                    <div className={`hover:bg-[#232120] hover:cursor-pointer px-2 py-1 sm:px-6 sm:py-3 lg:px-10 lg:py-5 ${visible4 ? "text-white" : "text-[#555]"} hover:text-white`} onClick={() => callFunctionByIndex(3)}>
                        <div className="flex flex-col gap-10 w-full">
                            <div className="flex justify-between items-center w-full">
                                <div className="w-[90%] flex gap-2 lg:gap-4">
                                    <div className="mt-1 lg:mt-2">
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="currentcolor" strokeWidth="2" />
                                            <path d="M10 16.5C10.2761 16.5 10.5 16.2761 10.5 16C10.5 15.7239 10.2761 15.5 10 15.5C9.72386 15.5 9.5 15.7239 9.5 16C9.5 16.2761 9.72386 16.5 10 16.5Z" fill="currentcolor" stroke="currentcolor" />
                                            <path d="M10 14V12.581C10 11.637 10.604 10.799 11.5 10.5C11.9367 10.3544 12.3166 10.075 12.5858 9.70156C12.855 9.32809 12.9999 8.87939 13 8.419V7.906C13 6.3 11.7 5 10.094 5H10C9.20435 5 8.44129 5.31607 7.87868 5.87868C7.31607 6.44129 7 7.20435 7 8" stroke="currentcolor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h1 className="font-Grotesk font-medium text-base sm:text-xl lg:text-3xl">What separates in.code from other digital web design agencies?</h1>
                                    </div>
                                </div>
                                {!visible4 &&
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.83301 10.1668H0.833008V7.8335H7.83301V0.833496H10.1663V7.8335H17.1663V10.1668H10.1663V17.1668H7.83301V10.1668Z" fill="" />
                                    </svg>
                                }
                                {visible4 &&
                                    <svg width="18" height="4" viewBox="0 0 18 4" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.833008 3.16634V0.833008H17.1663V3.16634H0.833008Z" fill="" />
                                    </svg>
                                }
                            </div>
                            {visible4 &&
                                <h3 className="font-Jakarta font-normal text-[#ccc] text-base {}">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                            }
                        </div>
                    </div>
                    <hr className="border-[#ccc] opacity-10" />
                    <div className={`hover:bg-[#232120] hover:cursor-pointer px-2 py-1 sm:px-6 sm:py-3 lg:px-10 lg:py-5  ${visible5 ? "text-white" : "text-[#555]"} hover:text-white`} onClick={() => callFunctionByIndex(4)}>
                        <div className="flex flex-col gap-10 w-full">
                            <div className="flex justify-between items-center w-full">
                                <div className="w-[90%] flex gap-2 lg:gap-4">
                                    <div className="mt-1 lg:mt-2">
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="currentcolor" strokeWidth="2" />
                                            <path d="M10 16.5C10.2761 16.5 10.5 16.2761 10.5 16C10.5 15.7239 10.2761 15.5 10 15.5C9.72386 15.5 9.5 15.7239 9.5 16C9.5 16.2761 9.72386 16.5 10 16.5Z" fill="currentcolor" stroke="currentcolor" />
                                            <path d="M10 14V12.581C10 11.637 10.604 10.799 11.5 10.5C11.9367 10.3544 12.3166 10.075 12.5858 9.70156C12.855 9.32809 12.9999 8.87939 13 8.419V7.906C13 6.3 11.7 5 10.094 5H10C9.20435 5 8.44129 5.31607 7.87868 5.87868C7.31607 6.44129 7 7.20435 7 8" stroke="currentcolor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h1 className="font-Grotesk font-medium text-base sm:text-xl lg:text-3xl">What separates in.code from other digital web design agencies?</h1>
                                    </div>
                                </div>
                                {!visible5 &&
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.83301 10.1668H0.833008V7.8335H7.83301V0.833496H10.1663V7.8335H17.1663V10.1668H10.1663V17.1668H7.83301V10.1668Z" fill="" />
                                    </svg>
                                }
                                {visible5 &&
                                    <svg width="18" height="4" viewBox="0 0 18 4" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.833008 3.16634V0.833008H17.1663V3.16634H0.833008Z" fill="" />
                                    </svg>
                                }
                            </div>
                            {visible5 &&
                                <h3 className="font-Jakarta font-normal text-[#ccc] text-base {}">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                            }
                        </div>
                    </div>
                    <hr className="border-[#686767] opacity-10" />
                    <div className={`hover:bg-[#232120] hover:cursor-pointer px-2 py-1 sm:px-6 sm:py-3 lg:px-10 lg:py-5 ${visible6 ? "text-white" : "text-[#555]"} hover:text-white`} onClick={() => callFunctionByIndex(5)}>
                        <div className="flex flex-col gap-10 w-full">
                            <div className="flex justify-between items-center w-full">
                                <div className={`w-[90%] flex gap-2 lg:gap-4`}>
                                    <div className="mt-1 lg:mt-2">
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="currentcolor" strokeWidth="2" />
                                            <path d="M10 16.5C10.2761 16.5 10.5 16.2761 10.5 16C10.5 15.7239 10.2761 15.5 10 15.5C9.72386 15.5 9.5 15.7239 9.5 16C9.5 16.2761 9.72386 16.5 10 16.5Z" fill="currentcolor" stroke="currentcolor" />
                                            <path d="M10 14V12.581C10 11.637 10.604 10.799 11.5 10.5C11.9367 10.3544 12.3166 10.075 12.5858 9.70156C12.855 9.32809 12.9999 8.87939 13 8.419V7.906C13 6.3 11.7 5 10.094 5H10C9.20435 5 8.44129 5.31607 7.87868 5.87868C7.31607 6.44129 7 7.20435 7 8" stroke="currentcolor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h1 className="font-Grotesk font-medium text-base sm:text-xl lg:text-3xl">What separates in.code from other digital web design agencies?</h1>
                                    </div>
                                </div>
                                {!visible6 &&
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.83301 10.1668H0.833008V7.8335H7.83301V0.833496H10.1663V7.8335H17.1663V10.1668H10.1663V17.1668H7.83301V10.1668Z" fill="" />
                                    </svg>
                                }
                                {visible6 &&
                                    <svg width="18" height="4" viewBox="0 0 18 4" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.833008 3.16634V0.833008H17.1663V3.16634H0.833008Z" fill="" />
                                    </svg>
                                }
                            </div>
                            {visible6 &&
                                <h3 className="font-Jakarta font-normal text-[#ccc] text-base {}">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Footer className="lg:mx-10" />
        </main>
    )
}

export default Contact;
