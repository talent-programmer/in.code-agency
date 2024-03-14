"use client";

import { useRef ,useEffect } from "react";
import { InlineWidget } from "react-calendly";
import Aos from "aos";
import 'aos/dist/aos.css';
import {
  Navigation,
  Pagination
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination"
import Image from "next/image";
import RedCircle from "@/components/RedCircle";
import EachWork from "@/components/work/EachWork";
import SocialMarque from "@/components/work/SocialMarque";
import BrandMarque from "@/components/work/BrandMaque";
import LeftArrow from "@/components/work/LeftArrow";
import RightArrow from "@/components/work/RightArrow";
import Footer from "@/components/Footer";
import { logoDesktop, logoMobile, mount, daitech, fortion, ghana, } from "../../../public/assetes/img";

import "./work.scss"

const Work = () => {

    const slideRef = useRef(null)
    const prevBtnRef = useRef(null);
    const nextBtnRef = useRef(null);

    useEffect(() => {
        Aos.init(); // Initialize AOS
    }, []);

    return (
        <main className="bg-[#FFFAF6] w-full lg:px-10">
            <div className="w-[100vh] fixed left-0 transform -translate-x-[47.5%] translate-y-[48vh] -rotate-90 hidden lg:block">
                <SocialMarque />
            </div>
            <div className="w-[100vh] fixed right-0 transform translate-x-[47.5%] translate-y-[48vh] rotate-90 hidden lg:block">
                <BrandMarque />
            </div>
            <section className="bg-[#1B1612] relative overflow-hidden px-5 sm:px-16 lg:px-24 pt-8 pb-40 lg:pb-52 lg:rounded-2xl">
                <div className="absolute -right-72 hidden lg:block">
                    <RedCircle />
                </div>
                <div className="block absolute left-1/2 transform -translate-x-1/2 -bottom-48 sm:-bottom-96 lg:hidden">
                    <RedCircle />
                </div>
                <nav className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Image src={logoDesktop} alt="logo" className="hidden lg:block" />
                        <Image src={logoMobile} alt="logo" className="block lg:hidden" />
                        <h3 className="font-syne font-semibold text-white text-2xl sm:text-xl lg:text-3xl">in.code</h3>
                    </div>
                    <a href="#booking">
                        <button className="flex items-center gap-2 border-2 border-white rounded-full px-4 py-2 sm:px-6 sm:py-3 text-white hover:bg-white hover:text-black">
                            <h3 className="font-Grotesk font-medium text-base">Contact us</h3>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" stroke-width="1.5"/>
                            </svg>
                        </button>
                    </a>
                </nav>
                <div className="mt-28 lg:mt-32 w-2/3">
                    <h1 className="font-Grotesk font-medium text-white text-4xl lg:text-6xl">Work Showcase</h1>
                    <h3 className="font-Jakarta font-normal text-white text-xl mt-8">
                        We build engaging user experience forearly-stage startups by connecting thedots between users’ needs and theclient’s business model.
                    </h3>
                    <button className="px-8 py-3 bg-red-600 rounded-full flex justify-center items-center gap-3 mt-8 sm:mt-10 lg:mt-10 hover:bg-red-700">
                        <h5 className="text-white font-medium font-Grotesk text-base">Become a client</h5>
                    </button>
                </div>
            </section>
            <section className="bg-[#1B1612] relative overflow-hidden px-5 sm:px-16 lg:px-24 pt-20 pb-32 sm:pb-40 lg:pb-60 lg:rounded-2xl lg:mt-5">
                <div className="absolute bottom-[700px] -left-72 hidden lg:block">
                    <RedCircle />
                </div>
                <h3 className="font-Petit font-normal text-2xl text-[#cccccc]">04 / 09</h3>
                <div className="flex flex-col lg:flex-row justify-between mt-10 gap-5">
                    <h1 data-aos="fade-up" className="w-2/3 lg:w-1/2 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        Features - we want to share these stories with you.
                    </h1>
                    <h3 data-aos="fade-up" className="lg:w-2/5 font-Jakarta font-normal text-[#cccccc] text-xl">
                        Brand adds value to your organisation, provides guidance in times of growth or uncertainty, and gives your business a competitive edge.
                    </h3>
                </div>
                <div className="mt-12 sm:mt-20 lg:mt-28 flex justify-center w-full">
                    <Swiper
                        slidesPerView={1}
                        ref={slideRef}
                        modules={[
                            Navigation,
                            Pagination
                        ]}
                        loop={true}
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
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hidden lg:flex justify-between flex-col sm:flex-row mt-10">
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
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hidden lg:flex sm:justify-between flex-col sm:flex-row mt-10">
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
                        </SwiperSlide>
                    </Swiper>
                    <button ref={prevBtnRef} className="swipe-button-prev">
                        <LeftArrow className="hover:stroke-white" />
                    </button>
                    <button ref={nextBtnRef} className="swipe-button-next">
                        <RightArrow className="hover:stroke-white" />
                    </button>
                </div>
            </section>
            <section id="booking" className="bg-[#1B1612] lg:bg-white flex flex-col justify-center items-center p-8">
                <InlineWidget url="https://calendly.com/codingjoker0420/30min?hide_gdpr_banner=1" styles={{width: "100%", height:720}} />
            </section>
            <Footer />
        </main>
    )
}

export default Work
