'use client';

import { useState } from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import SocialMarque from "@/components/work/SocialMarque";
import BrandMarque from "@/components/work/BrandMaque";
import RedCircle from "@/components/RedCircle";
import Footer from "@/components/Footer";
import { approach, minus, plus } from "../../../public/assetes/img";

const Approach = () => {

    const [visible1, setVisible1] = useState(true)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)
    const [visible4, setVisible4] = useState(false)
    const [visible5, setVisible5] = useState(false)
    const [visible6, setVisible6] = useState(false)

    const functionsArray = [setVisible1, setVisible2, setVisible3, setVisible4, setVisible5,setVisible6];
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
        <main className="bg-[#FFFAF6] w-full">
            <div className="w-[100vh] fixed left-0 transform -translate-x-[47.5%] translate-y-[48vh] -rotate-90 hidden lg:block">
                <SocialMarque />
            </div>
            <div className="w-[100vh] fixed right-0 transform translate-x-[47.5%] translate-y-[48vh] rotate-90 hidden lg:block">
                <BrandMarque />
            </div>
            <NavBar />
            <section className="bg-[#1B1612] relative lg:overflow-hidden px-6 sm:px-16 lg:px-24 pt-8 pb-10 lg:pb-20 lg:mx-10 lg:rounded-2xl">
                <div className="absolute -right-[500px] hidden lg:block">
                    <RedCircle />
                </div>
                <div className="max-w-[1580px] mx-auto relative flex flex-col gap-8 z-10 mt-44 sm:mt-28 lg:mt-36">
                    <h1 className="font-Grotesk font-medium text-white text-3xl sm:text-4xl lg:text-6xl">Process Approach</h1>
                    <h3 className="font-Jakarta font-normal text-white text-base sm:text-lg lg:text-xl sm:w-2/3 lg:w-2/5">
                        Leveraging a human-centered design methodology, we create solutions tailored to the needs of your target audience and aimed at growing your business.
                    </h3>
                    <button className="lg:hidden px-8 py-3 bg-red-500 rounded-full w-fit flex justify-center items-center gap-3 mt-8 sm:mt-10 lg:mt-10 hover:bg-red-700">
                        <h5 className="text-white font-medium font-Grotesk text-base">Become a client</h5>
                    </button>
                </div>
                <div className="relative mt-16 sm:mt-24 lg:mt-36 mx-auto">
                    <Image src={approach} alt="approach" className="w-full relative z-10" />
                    <div className="block absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-0 scale-x-75 scale-y-50 sm:scale-y-75 sm:scale-x-100 lg:hidden">
                        <RedCircle />
                    </div>
                </div>
            </section>
            <section className="bg-[#1B1612] relative overflow-hidden px-6 sm:px-16 lg:px-24 pt-10 lg:pt-20 pb-10 lg:pb-20 lg:mt-5 lg:mx-10 lg:rounded-2xl">
                <div className="absolute -left-72 -bottom-72">
                    <RedCircle />
                </div>
                <h3 className="font-Petit font-normal text-2xl text-[#cccccc]">03 / 09</h3>
                <div className="flex flex-col lg:flex-row justify-between mt-10 mb-20 mx-auto gap-5">
                    <h1 data-aos="fade-up" className="lg:w-2/5 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        The way we do it.
                    </h1>
                    <h3 data-aos="fade-up" className="lg:w-2/5 font-Jakarta font-normal text-[#cccccc] text-xl">
                        Every challenge is different, and so every solution evolves in its own bespoke way, shaped by what we discover and the response this demands. Yet here’s a broad outline of how that response might evolve, some tried and tested means to help your brand rise to any challenge and define your new reality.
                    </h3>
                </div>
                <div>
                    <div className="hover:bg-[#232120] hover:cursor-pointer px-2 py-1 sm:px-6 sm:py-3 lg:px-10 lg:py-5" onClick={() => callFunctionByIndex(0)}>
                        <div className="flex flex-col gap-10 w-full">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-Grotesk font-medium text-white text-lg lg:text-xl">01</h3>
                                    <h1 className="font-Grotesk font-medium text-white text-xl lg:text-[32px]">Discovery Session</h1>
                                </div>
                                {visible1 ?
                                    <Image src={minus} alt="minus" /> :
                                    <Image src={plus} alt="plus" />
                                }
                            </div>
                            {visible1 &&
                                <h3 className="lg:w-2/5 font-Jakarta font-normal text-[#ccc] text-base {}">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                            }
                        </div>
                    </div>
                    <hr className="border-[#ccc] opacity-10" />
                    <div className="hover:bg-[#232120] hover:cursor-pointer px-2 py-1 sm:px-6 sm:py-3 lg:px-10 lg:py-5" onClick={() => callFunctionByIndex(1)}>
                        <div className="flex flex-col gap-10 w-full">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-Grotesk font-medium text-white text-lg lg:text-xl">01</h3>
                                    <h1 className="font-Grotesk font-medium text-white text-xl lg:text-[32px]">Discovery Session</h1>
                                </div>
                                {visible2 ?
                                    <Image src={minus} alt="minus" /> :
                                    <Image src={plus} alt="plus" />
                                }
                            </div>
                            {visible2 &&
                                <h3 className="lg:w-2/5 font-Jakarta font-normal text-[#ccc] text-base {}">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                            }
                        </div>
                    </div>
                    <hr className="border-[#ccc] opacity-10" />
                    <div className="hover:bg-[#232120] hover:cursor-pointer px-2 py-1 sm:px-6 sm:py-3 lg:px-10 lg:py-5" onClick={() => callFunctionByIndex(2)}>
                        <div className="flex flex-col gap-10 w-full">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-Grotesk font-medium text-white text-lg lg:text-xl">01</h3>
                                    <h1 className="font-Grotesk font-medium text-white text-xl lg:text-[32px]">Discovery Session</h1>
                                </div>
                                {visible3 ?
                                    <Image src={minus} alt="minus" /> :
                                    <Image src={plus} alt="plus" />
                                }
                            </div>
                            {visible3 &&
                                <h3 className="lg:w-2/5 font-Jakarta font-normal text-[#ccc] text-base {}">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                            }
                        </div>
                    </div>
                    <hr className="border-[#ccc] opacity-10" />
                    <div className="hover:bg-[#232120] hover:cursor-pointer px-2 py-1 sm:px-6 sm:py-3 lg:px-10 lg:py-5" onClick={() => callFunctionByIndex(3)}>
                        <div className="flex flex-col gap-10 w-full">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-Grotesk font-medium text-white text-lg lg:text-xl">01</h3>
                                    <h1 className="font-Grotesk font-medium text-white text-xl lg:text-[32px]">Discovery Session</h1>
                                </div>
                                {visible4 ?
                                    <Image src={minus} alt="minus" /> :
                                    <Image src={plus} alt="plus" />
                                }
                            </div>
                            {visible4 &&
                                <h3 className="lg:w-2/5 font-Jakarta font-normal text-[#ccc] text-base {}">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                            }
                        </div>
                    </div>
                    <hr className="border-[#ccc] opacity-10" />
                    <div className="hover:bg-[#232120] hover:cursor-pointer px-2 py-1 sm:px-6 sm:py-3 lg:px-10 lg:py-5" onClick={() => callFunctionByIndex(4)}>
                        <div className="flex flex-col gap-10 w-full">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-Grotesk font-medium text-white text-lg lg:text-xl">01</h3>
                                    <h1 className="font-Grotesk font-medium text-white text-xl lg:text-[32px]">Discovery Session</h1>
                                </div>
                                {visible5 ?
                                    <Image src={minus} alt="minus" /> :
                                    <Image src={plus} alt="plus" />
                                }
                            </div>
                            {visible5 &&
                                <h3 className="lg:w-2/5 font-Jakarta font-normal text-[#ccc] text-base {}">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                            }
                        </div>
                    </div>
                    <hr className="border-[#ccc] opacity-10" />
                    <div className="hover:bg-[#232120] hover:cursor-pointer px-2 py-1 sm:px-6 sm:py-3 lg:px-10 lg:py-5" onClick={() => callFunctionByIndex(5)}>
                        <div className="flex flex-col gap-10 w-full">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-Grotesk font-medium text-white text-lg lg:text-xl">01</h3>
                                    <h1 className="font-Grotesk font-medium text-white text-xl lg:text-[32px]">Discovery Session</h1>
                                </div>
                                {visible6 ?
                                    <Image src={minus} alt="minus" /> :
                                    <Image src={plus} alt="plus" />
                                }
                            </div>
                            {visible6 &&
                                <h3 className="lg:w-2/5 font-Jakarta font-normal text-[#ccc] text-base {}">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#1B1612] relative overflow-hidden px-6 sm:px-16 lg:px-24 pt-10 lg:pt-20 pb-10 lg:pb-20 lg:mt-5 lg:mb-5 lg:mx-10 lg:rounded-2xl">
                <h3 className="font-Petit font-normal text-2xl text-[#cccccc]">03 / 04</h3>
                <div className="flex flex-col lg:flex-row justify-between mt-10 mx-auto gap-5">
                    <h1 data-aos="fade-up" className="lg:w-2/5 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        How does this works for you?
                    </h1>
                    <h3 data-aos="fade-up" className="lg:w-2/5 font-Jakarta font-normal text-[#cccccc] text-xl">
                        Quality assurance begins at the start of the project and continues throughout its entirety. It's a necessary part of the.
                    </h3>
                </div>
                <button className="px-8 py-3 bg-red-500 rounded-full flex justify-center items-center gap-3 mt-6 sm:mt-8 hover:bg-red-700">
                    <h5 className="text-white font-medium font-Grotesk text-base">Become a client</h5>
                </button>
            </section>
            <Footer />
        </main>
    )
}

export default Approach;
