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

import "./swiper.scss"

const Home = () => {

    const slideRef = useRef(null)
    const prevBtnRef = useRef(null);
    const nextBtnRef = useRef(null);

    const [totalSlides, setTotalSlides] = useState();
    const [currentSlide, setCurrentSlide] = useState(1);

    const handleSwiper = (swiper) => {
        setTotalSlides(swiper.slides.length);
        swiper.on('slideChange', () => setCurrentSlide(swiper.realIndex + 1));
    };

    return (
        <main className="bg-[#FFFAF6] relative overflow-hidden">
            <Image src={noiseOverlay} className="fixed top-0 z-[1] opacity-60 hidden lg:block w-full" />
            <Image src={noiseOverlayTablet} className="fixed top-0 z-[1] opacity-60 hidden sm:block lg:hidden" />
            <Image src={noiseOverlayMobile} className="fixed top-0 z-[1] opacity-60 block sm:hidden" />
            <div className="w-[100vh] fixed left-0 transform -translate-x-[47.5%] translate-y-[48vh] -rotate-90 hidden lg:block z-10">
                <SocialMarque />
            </div>
            <div className="w-[100vh] fixed right-0 transform translate-x-[47.5%] translate-y-[48vh] rotate-90 hidden lg:block z-10">
                <BrandMarque />
            </div>
            <section className="bg-[#1B1612] relative lg:overflow-hidden px-6 sm:px-16 lg:px-24 pt-20 pb-20 lg:mt-5 lg:mb-5 lg:mx-10 lg:rounded-2xl">
                <div className="hidden lg:block absolute -left-72 -bottom-72">
                    <RedCircle />
                </div>
                <h3 className="max-w-[1580px] mx-auto font-Petit font-normal text-2xl text-[#cccccc] relative z-10">05 / 09</h3>
                <div className="max-w-[1580px] mx-auto flex flex-col lg:flex-row justify-between mt-10 gap-5 relative z-10">
                    <h1 data-aos="fade-up" className="w-2/3 lg:w-1/2 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        <span className="font-Petit mr-2">Don't believe us?</span>
                        See what our clients say;
                    </h1>
                    <h3 data-aos="fade-up" className="lg:w-2/5 font-Jakarta font-normal text-[#cccccc] text-xl">
                        So... to make it easier, think of us as your special ops digital product development team - tackling with your challenges and needs. Whether you are adding a new feature, a new product, or redesigning an existing product, we will help set you up for success.
                    </h3>
                </div>
                <div className="max-w-[1580px] mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center relative z-10 mt-12">
                    <div className="w-full sm:w-2/5 flex justify-center">
                        <div className="relative mt-12 sm:mt-20 lg:mt-28 flex justify-center w-full">
                            <Swiper
                                onSwiper={handleSwiper}
                                slidesPerView={1}
                                // spaceBetween={30}
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
                                    <LeftArrow circleStrokeColor="stroke-white" className="stroke-white hover:stroke-black hover:fill-white" />
                                }
                            </button>
                            <button ref={nextBtnRef} className="swipe-button-next relative z-10">
                                {currentSlide === totalSlides ?
                                    <RightArrow />
                                    :
                                    <RightArrow circleStrokeColor="stroke-white" className="stroke-white hover:stroke-black hover:fill-white" />
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
                <div className="max-w-[1580px] mx-auto flex justify-center sm:mt-12 lg:mt-20 relative z-10">
                    <button className="px-8 py-3 bg-[#DA3224] rounded-full w-fit flex justify-center items-center gap-3 mt-8 sm:mt-10 lg:mt-10 hover:bg-red-700">
                        <h5 className="text-white font-medium font-Grotesk text-base">BECOME A CLIENT</h5>
                        <Image src={arrow} alt="hand" />
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Home;
