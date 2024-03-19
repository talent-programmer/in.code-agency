'use client';

import { useState, useRef, useEffect } from "react";
import Aos from "aos";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import SocialMarque from "@/components/work/SocialMarque";
import BrandMarque from "@/components/work/BrandMaque";
import RedCircle from "@/components/RedCircle";
import EachWork from "@/components/work/EachWork";
import {
    Navigation,
    Pagination,
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
import { approach, mount, fortion, daitech, ghana } from "../../../public/assetes/img";

import "./blog.scss"
import 'aos/dist/aos.css';

const Blog = () => {
    
    const [activeMenu, setActiveMenu] = useState("All");

    const handleClick = (menuName) => {
        setActiveMenu(menuName); // Update the active menu
    };

    const getClass = (menuName) => {
        let baseClasses = "font-Jakarta font-normal text-[#cccccc] text-xl cursor-pointer";
        if (menuName === activeMenu) {
          // Add extra classes for the active menu
          return `${baseClasses} px-4 py-2 border border-2 border-[#ccc] bg-white bg-opacity-15 rounded-3xl`;
        }
        return baseClasses;
    };

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
            <section className="bg-[#1B1612] relative overflow-hidden px-6 sm:px-16 lg:px-24 pt-8 pb-10 lg:rounded-2xl">
                <div className="hidden lg:block absolute -right-[500px]">
                    <RedCircle />
                </div>
                <NavBar />
                <div className="max-w-[1580px] mx-auto relative flex flex-col gap-8 z-10 mt-40 sm:mt-28 lg:mt-36">
                    <h1 className="font-Grotesk font-medium text-white text-3xl sm:text-4xl lg:text-6xl">Blog and News</h1>
                    <h3 className="font-Jakarta font-normal text-white text-base sm:text-lg lg:text-xl sm:w-1/2 lg:w-2/5">
                        Learn web design and development tips & tricks, get started with Webflow, and read the latest news about Flow Ninja.
                    </h3>
                </div>
                <div className="relative mt-16 sm:mt-20 lg:mt-36 mx-auto">
                    <div className="flex justify-center items-center w-full">
                        <Swiper
                            slidesPerView={1}
                            ref={slideRef}
                            loop={true}
                            spaceBetween={30}
                        >
                            <SwiperSlide className="rounded-[30px]">
                                <Image src={approach} className="mx-auto relative z-10 custom-cursor" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={approach} className="mx-auto relative z-10 custom-cursor" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={approach} className="mx-auto relative z-10 custom-cursor" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="block absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-0 scale-x-75 scale-y-50 sm:scale-y-75 sm:scale-x-100 lg:hidden">
                        <RedCircle />
                    </div>
                </div>
            </section>
            <section className="bg-[#1B1612] relative lg:overflow-hidden px-6 sm:px-16 lg:px-24 pt-20 pb-32 sm:pb-40 lg:pb-60 lg:mt-5 lg:mb-5 lg:rounded-2xl">
                <div className="absolute top-1/2 -left-72 hidden lg:block">
                    <RedCircle />
                </div>
                <h3 className="font-Petit font-normal text-2xl text-[#cccccc]">04 / 09</h3>
                <div className="flex flex-col lg:flex-row justify-between mt-10 mb-20 mx-auto gap-5">
                    <h1 data-aos="fade-up" className="w-2/3 lg:w-2/5 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        Categories
                    </h1>
                    <div data-aos="fade-up" className="flex flex-wrap justify-between items-center lg:w-2/3">
                        <h3 className={getClass("All")} onClick={() => handleClick("All")}>
                            All
                        </h3>
                        <h3 className={getClass("Design")} onClick={() => handleClick("Design")}>
                            Design
                        </h3>
                        <h3 className={getClass("Business")} onClick={() => handleClick("Business")}>
                            Business
                        </h3>
                        <h3 className={getClass("Dev stuff")} onClick={() => handleClick("Dev stuff")}>
                            Dev stuff
                        </h3>
                        <h3 className={getClass("Culture")} onClick={() => handleClick("Culture")}>
                            Culture
                        </h3>
                    </div>
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
            <Footer />
        </main>
    )
}

export default Blog;
