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
import { approach, minus, plus } from "../../../public/assetes/img";

const Approach = () => {
    
    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)
    const [visible4, setVisible4] = useState(false)
    const [visible5, setVisible5] = useState(false)
    const [visible6, setVisible6] = useState(false)
    
    return (
        <main className="bg-[#FFFAF6] w-full lg:px-10">
            <div className="w-[100vh] fixed left-0 transform -translate-x-[47.5%] translate-y-[48vh] -rotate-90 hidden lg:block">
                <SocialMarque />
            </div>
            <div className="w-[100vh] fixed right-0 transform translate-x-[47.5%] translate-y-[48vh] rotate-90 hidden lg:block">
                <BrandMarque />
            </div>
            <section className="bg-[#1B1612] relative lg:overflow-hidden px-6 sm:px-16 lg:px-24 pt-8 pb-20 lg:rounded-2xl">
                <div className="absolute -right-72">
                    <RedCircle />
                </div>
                <NavBar />
                <div className="max-w-[1580px] mx-auto relative flex flex-col gap-8 z-10 mt-52">
                    <h1 className="font-Grotesk font-medium text-white text-6xl">Process Approach</h1>
                    <h3 className="font-Jakarta font-normal text-white text-xl w-2/5">
                        Leveraging a human-centered design methodology, we create solutions tailored to the needs of your target audience and aimed at growing your business.
                    </h3>
                </div>
                <Image src={approach} className="mt-36 mx-auto" />
            </section>
            <section className="bg-[#1B1612] relative lg:overflow-hidden px-6 sm:px-16 lg:px-24 pt-20 pb-20 lg:mt-5 lg:rounded-2xl">
                <div className="absolute -left-72 -bottom-72">
                    <RedCircle />
                </div>
                <h3 className="font-Petit font-normal text-2xl text-[#cccccc]">03 / 09</h3>
                <div className="flex flex-col lg:flex-row justify-between mt-10 mb-20 mx-auto gap-5">
                    <h1 data-aos="fade-up" className="w-2/3 lg:w-2/5 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        The way we do it.
                    </h1>
                    <h3 data-aos="fade-up" className="w-6/7 lg:w-2/5 font-Jakarta font-normal text-[#cccccc] text-xl">
                        Every challenge is different, and so every solution evolves in its own bespoke way, shaped by what we discover and the response this demands. Yet here’s a broad outline of how that response might evolve, some tried and tested means to help your brand rise to any challenge and define your new reality.
                    </h3>
                </div>
                <div>
                    <div className="flex justify-between hover:bg-[#232120] hover:cursor-pointer px-10 py-5" onClick={() => setVisible1(!visible1)}>
                        <div className="flex flex-col gap-10">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-Grotesk font-medium text-white text-xl">01</h3>
                                    <h1 className="font-Grotesk font-medium text-white text-[32px]">Discovery Session</h1>
                                </div>
                                { visible1 &&
                                    <Image src={minus} />
                                }
                            </div>
                            { visible1 &&
                                <h3 className="w-2/5 font-Jakarta font-normal text-[#ccc] text-base {}">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                            }
                        </div>
                        { !visible1 &&
                            <Image src={plus} />
                        }
                    </div>
                    <hr className="border-[#ccc] opacity-10" />
                    <div className="flex justify-between hover:bg-[#232120] hover:cursor-pointer px-10 py-5" onClick={() => setVisible2(!visible2)}>
                        <div className="flex flex-col gap-10">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-Grotesk font-medium text-white text-xl">02</h3>
                                    <h1 className="font-Grotesk font-medium text-white text-[32px]">Ideation and evaluation</h1>
                                </div>
                                { visible2 &&
                                    <Image src={minus} />
                                }
                            </div>
                            { visible2 &&
                                <h3 className="w-2/5 font-Jakarta font-normal text-[#ccc] text-base {}">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                            }
                        </div>
                        { !visible2 &&
                            <Image src={plus} />
                        }
                    </div>
                    <hr className="border-[#ccc] opacity-10" />
                    <div className="flex justify-between hover:bg-[#232120] hover:cursor-pointer px-10 py-5" onClick={() => setVisible3(!visible3)}>
                        <div className="flex flex-col gap-10">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-Grotesk font-medium text-white text-xl">03</h3>
                                    <h1 className="font-Grotesk font-medium text-white text-[32px]">Product design</h1>
                                </div>
                                { visible3 &&
                                    <Image src={minus} />
                                }
                            </div>
                            { visible3 &&
                                <h3 className="w-2/5 font-Jakarta font-normal text-[#ccc] text-base {}">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                            }
                        </div>
                        { !visible3 &&
                            <Image src={plus} />
                        }
                    </div>
                    <hr className="border-[#ccc] opacity-10" />
                    <div className="flex justify-between hover:bg-[#232120] hover:cursor-pointer px-10 py-5" onClick={() => setVisible4(!visible4)}>
                        <div className="flex flex-col gap-10">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-Grotesk font-medium text-white text-xl">04</h3>
                                    <h1 className="font-Grotesk font-medium text-white text-[32px]">Product Development</h1>
                                </div>
                                { visible4 &&
                                    <Image src={minus} />
                                }
                            </div>
                            { visible4 &&
                                <h3 className="w-2/5 font-Jakarta font-normal text-[#ccc] text-base {}">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                            }
                        </div>
                        { !visible4 &&
                            <Image src={plus} />
                        }
                    </div>
                    <hr className="border-[#ccc] opacity-10" />
                    <div className="flex justify-between hover:bg-[#232120] hover:cursor-pointer px-10 py-5" onClick={() => setVisible5(!visible5)}>
                        <div className="flex flex-col gap-10">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-Grotesk font-medium text-white text-xl">05</h3>
                                    <h1 className="font-Grotesk font-medium text-white text-[32px]">Testing and Optimization</h1>
                                </div>
                                { visible5 &&
                                    <Image src={minus} />
                                }
                            </div>
                            { visible5 &&
                                <h3 className="w-2/5 font-Jakarta font-normal text-[#ccc] text-base {}">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                            }
                        </div>
                        { !visible5 &&
                            <Image src={plus} />
                        }
                    </div>
                    <hr className="border-[#ccc] opacity-10" />
                    <div className="flex justify-between hover:bg-[#232120] hover:cursor-pointer px-10 py-5" onClick={() => setVisible6(!visible6)}>
                        <div className="flex flex-col gap-10">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-Grotesk font-medium text-white text-xl">06</h3>
                                    <h1 className="font-Grotesk font-medium text-white text-[32px]">Lomg-term partnership</h1>
                                </div>
                                { visible6 &&
                                    <Image src={minus} />
                                }
                            </div>
                            { visible6 &&
                                <h3 className="w-2/5 font-Jakarta font-normal text-[#ccc] text-base {}">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                            }
                        </div>
                        { !visible6 &&
                            <Image src={plus} />
                        }
                    </div>
                </div>
            </section>
            <section className="bg-[#1B1612] relative lg:overflow-hidden px-6 sm:px-16 lg:px-24 pt-20 pb-20 lg:mt-5 lg:mb-5 lg:rounded-2xl">
                <h3 className="font-Petit font-normal text-2xl text-[#cccccc]">03 / 04</h3>
                <div className="flex flex-col lg:flex-row justify-between mt-10 mb-20 mx-auto gap-5">
                    <h1 data-aos="fade-up" className="w-2/3 lg:w-2/5 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        How does this works for you?
                    </h1>
                    <h3 data-aos="fade-up" className="w-6/7 lg:w-2/5 font-Jakarta font-normal text-[#cccccc] text-xl">
                        Quality assurance begins at the start of the project and continues throughout its entirety. It's a necessary part of the.
                    </h3>
                </div>
                <button className="px-8 py-3 bg-red-600 rounded-full flex justify-center items-center gap-3 mt-8 sm:mt-10 lg:mt-10 hover:bg-red-700">
                    <h5 className="text-white font-medium font-Grotesk text-base">Become a client</h5>
                </button>
            </section>
            <Footer />
        </main>
    )
}

export default Approach;
