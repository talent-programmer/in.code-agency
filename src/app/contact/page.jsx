'use client';

import { useState } from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import SocialMarque from "@/components/work/SocialMarque";
import BrandMarque from "@/components/work/BrandMaque";
import RedCircle from "@/components/RedCircle";
import Instagram from "@/components/comingsoon/Instagram";
import Threads from "@/components/comingsoon/Threads";
import Facebook from "@/components/comingsoon/Facebook";
import LinkedIn from "@/components/comingsoon/LinkedIn";
import Footer from "@/components/Footer";
import { approach, minus, plus } from "../../../public/assetes/img";
import { InlineWidget } from "react-calendly";

const Contact = () => {
    
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
                <div className="absolute -left-72 -bottom-72">
                    <RedCircle />
                </div>
                <NavBar />
                <div className="max-w-[1580px] mx-auto flex justify-between">
                    <div className="flex flex-col gap-10 z-10 mt-52 w-2/5">
                        <h1 className="font-Grotesk font-medium text-white text-6xl">Hello there!</h1>
                        <h3 className="font-Jakarta font-normal text-white text-xl">
                            We'd love to learn more about you and what we can design and build together.
                        </h3>
                        <h3 className="font-Jakarta font-normal text-white text-xl">
                            Become a client: <br/>
                            <a href="mailto:hello@incodeagency.com" className="font-bold">hello@incodeagency.com</a>
                        </h3>
                        <h3 className="font-Jakarta font-normal text-white text-xl mt-20">
                            Or just skip formality and find us on:
                        </h3>
                        <div className="flex gap-7 items-center">
                            <Instagram className="hover:fill-white" />
                            <Threads className="hover:fill-white" />
                            <LinkedIn className="hover:fill-white" />
                            <Facebook className="hover:fill-white" />
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-row-reverse">
                        <InlineWidget url="https://calendly.com/codingjoker0420/30min?hide_gdpr_banner=1" styles={{width: "100%", height: 900}} />
                    </div>
                </div>
            </section>
            <section className="bg-[#1B1612] relative lg:overflow-hidden px-6 sm:px-16 lg:px-24 pt-20 pb-20 lg:mt-5 lg:mb-5 lg:rounded-2xl">
                <div className="absolute -left-72 -top-72">
                    <RedCircle />
                </div>
                <h3 className="font-Petit font-normal text-2xl text-[#cccccc]">03 / 09</h3>
                <div className="flex flex-col lg:flex-row justify-between mt-10 mb-20 mx-auto gap-5">
                    <h1 data-aos="fade-up" className="w-2/3 lg:w-2/5 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        We got asked these questions often...
                    </h1>
                    <h3 data-aos="fade-up" className="w-6/7 lg:w-2/5 font-Jakarta font-normal text-[#cccccc] text-xl">
                        But if you don’t find your answer here, feel free to contact us via email or social media platforms.
                    </h3>
                </div>
                <div>
                    <div className="flex justify-between hover:bg-[#232120] hover:cursor-pointer px-10 py-5" onClick={() => setVisible1(!visible1)}>
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-Grotesk font-medium text-white text-xl">01</h3>
                                    <h1 className="font-Grotesk font-medium text-white text-[32px]">What separates in.code from other digital web design agencies?</h1>
                                </div>
                                { visible1 &&
                                    <Image src={minus} />
                                }
                            </div>
                            { visible1 &&
                                <h3 className="w-2/5 font-Jakarta font-normal text-[#ccc] text-base pl-9">
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
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-Grotesk font-medium text-white text-xl">02</h3>
                                    <h1 className="font-Grotesk font-medium text-white text-[32px]">Do you work with clients in different timezones?</h1>
                                </div>
                                { visible2 &&
                                    <Image src={minus} />
                                }
                            </div>
                            { visible2 &&
                                <h3 className="w-2/5 font-Jakarta font-normal text-[#ccc] text-base pl-9">
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
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-Grotesk font-medium text-white text-xl">03</h3>
                                    <h1 className="font-Grotesk font-medium text-white text-[32px]">Do you work with startups?</h1>
                                </div>
                                { visible3 &&
                                    <Image src={minus} />
                                }
                            </div>
                            { visible3 &&
                                <h3 className="w-2/5 font-Jakarta font-normal text-[#ccc] text-base pl-9">
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
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-Grotesk font-medium text-white text-xl">04</h3>
                                    <h1 className="font-Grotesk font-medium text-white text-[32px]">Can you help us remote our B2B/enterprise software?</h1>
                                </div>
                                { visible4 &&
                                    <Image src={minus} />
                                }
                            </div>
                            { visible4 &&
                                <h3 className="w-2/5 font-Jakarta font-normal text-[#ccc] text-base pl-9">
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
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-Grotesk font-medium text-white text-xl">05</h3>
                                    <h1 className="font-Grotesk font-medium text-white text-[32px]">Do you support outsource business model?</h1>
                                </div>
                                { visible5 &&
                                    <Image src={minus} />
                                }
                            </div>
                            { visible5 &&
                                <h3 className="w-2/5 font-Jakarta font-normal text-[#ccc] text-base pl-9">
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
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-Grotesk font-medium text-white text-xl">06</h3>
                                    <h1 className="font-Grotesk font-medium text-white text-[32px]">How do I schedule a online meet with you to discuss new idea?</h1>
                                </div>
                                { visible6 &&
                                    <Image src={minus} />
                                }
                            </div>
                            { visible6 &&
                                <h3 className="w-2/5 font-Jakarta font-normal text-[#ccc] text-base pl-9">
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
            <Footer />
        </main>
    )
}

export default Contact;
