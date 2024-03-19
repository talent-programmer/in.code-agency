'use client'

import { useState } from "react";

import Image from "next/image";
import RedCircle from "@/components/RedCircle";
import SocialMarque from "@/components/work/SocialMarque";
import BrandMarque from "@/components/work/BrandMaque";
import Instagram from "@/components/comingsoon/Instagram";
import Threads from "@/components/comingsoon/Threads";
import Facebook from "@/components/comingsoon/Facebook";
import LinkedIn from "@/components/comingsoon/LinkedIn";
import Footer from "@/components/Footer";
import { arrowLeft, singleServiceVid, singleblog1, singleblog2, singleblog3, arrowLeftMobile, arrowBlack } from "../../../public/assetes/img";
import Link from "next/link";

import "./singleblog.scss"
import NavBar from "@/components/NavBar";

const SingleBlog = () => {

    const [activeContent, setActiveContent] = useState("first");

    const handleClick = (contentOrder) => {
        setActiveContent(contentOrder); // Update the active menu
    };

    const getClass = (contentOrder) => {
        let baseClasses = "font-Jakarta font-normal text-[#cccccc] text-xl cursor-pointer";
        if (contentOrder === activeContent) {
          // Add extra classes for the active menu
          return `${baseClasses} text-red-700`;
        }
        return baseClasses;
    };

    return (
        <main className="bg-[#FFFAF6] w-fulls">
            <div className="w-[100vh] fixed left-0 transform -translate-x-[47.5%] translate-y-[48vh] -rotate-90 hidden lg:block">
                <SocialMarque />
            </div>
            <div className="w-[100vh] fixed right-0 transform translate-x-[47.5%] translate-y-[48vh] rotate-90 hidden lg:block">
                <BrandMarque />
            </div>
            <NavBar />
            <section className="bg-[#1B1612] relative lg:overflow-hidden px-6 sm:px-16 lg:px-24 pt-8 pb-10 lg:pb-20 lg:mx-10 lg:rounded-2xl">
                <div className="hidden absolute -right-[500px] right top-72 lg:block">
                    <RedCircle />
                </div>
                <div className="mt-28 lg:mt-36 w-full lg:w-2/3 flex flex-col gap-8 lg:gap-10">
                    <Link href="/blog">
                        <div className="flex items-center gap-5">
                            <Image src={arrowLeft} alt="left-arrow" />
                            <h3 className="link font-Jakarata lg:italic text-[#ccc] text-xl hover:text-white">Blog and News</h3>
                            <h3 className="hidden font-Jakarata italic text-[#ccc] text-xl lg:block">An all-in-one E-commerce:shopping plat...</h3>
                        </div>
                    </Link>
                    <h1 className="font-Grotesk font-medium text-white text-3xl sm:text-4xl lg:text-6xl">
                        An all-in-one E-commerce: shopping platform gains 25M monthly visits
                    </h1>
                    <h3 className="font-Jakarta font-normal text-white text-base lg:text-xl">
                        25.09.2023. — News · Events — 7min read
                    </h3>
                </div>
                <div className="relative mt-8 lg:mt-20 mx-auto">
                    <Image src={singleServiceVid} alt="singleservicevid" className="mx-auto relative z-10" />
                    <div className="block absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-0 scale-x-75 scale-y-50 sm:scale-y-75 sm:scale-x-100 lg:hidden">
                        <RedCircle />
                    </div>
                </div>
            </section>
            <section className="bg-[#1B1612] relative lg:overflow-hidden flex flex-col lg:flex-row justify-between px-6 sm:px-16 lg:px-24 pt-20 pb-20 lg:pb-35 lg:mt-5 lg:mx-10 lg:rounded-2xl">     
                <div className="hidden absolute -right-72 bottom-0 z-0 lg:block">
                    <RedCircle />
                </div>
                <div className="flex flex-col gap-20 lg:w-2/3 pr-40 lg:border-r-2 border-white border-opacity-10">
                    <h3 className="font-Jakarta font-normal text-[#ccc] text-xl">
                        Every challenge is different, and so every solution evolves in its own bespoke way, shaped by what we discover and the response this demands. Yet here’s a broad outline of how that response might evolve, some tried and tested means to help your brand rise to any challenge and define your new reality.
                    </h3>
                    <div className="flex flex-col gap-8">
                        <h1 className="font-Grotesk font-medium text-white text-[32px]">What's the idea behind RedBrain?</h1>
                        <h3 className="font-Jakarta font-normal text-[#ccc] text-xl">
                            It’s a smart product discovery network that encompasses both shoppers and businesses. It matches buyers with the goods they’re looking for, offers the best prices, and helps boost brands' sales by promoting items to customers.
                        </h3>
                        <h3 className="font-Jakarta font-normal text-[#ccc] text-xl">
                            People find products they need, companies reach their target audience, and RedBrain serves as a platform for both sides. It’s a win-win-win situation for all three parties.
                        </h3>
                        <h3 className="font-Jakarta font-normal text-[#ccc] text-xl">
                            The RedBrain team didn’t stop there. The company aimed to build the largest audience of online shoppers by integrating with platforms that work best for them.
                        </h3>
                        <h3 className="font-Jakarta font-normal text-[#ccc] text-xl">
                            But here’s the trouble. Despite the scale and powerful functionality, RedBrain struggled with an inconsistent and outdated design. Both jeopardized the platform’s goal to enter the global landscape.
                        </h3>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h1 className="font-Grotesk font-medium text-white text-[32px]">Lazarev. cue to enter the scene</h1>
                        <h3 className="font-Jakarta font-normal text-[#ccc] text-xl">
                            We set out to revamp the product with the redesign and build an interface to help RedBrain reach new heights.
                        </h3>
                        <h3 className="font-Jakarta font-normal text-[#ccc] text-xl">
                            Our team rethought the platform, leveraging up-to-date design solutions to give RedBrain a modern look. We also built a new homepage, search functionality, user shopping journey, product pages, payment flow, etc., to effortlessly lead customers to checkout.
                        </h3>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h1 className="font-Grotesk font-medium text-white text-[32px]">What's up with RedBrain now?</h1>
                        <h3 className="font-Jakarta font-normal text-[#ccc] text-xl">
                            The platform connects shoppers with the best offers and gets 25M visits per month. Not bad at all, right?
                        </h3>
                        <h3 className="font-Jakarta font-normal text-[#ccc] text-xl">
                            We think so too and are excited to watch RedBrain scale even more.
                        </h3>
                        <h3 className="font-Jakarta font-normal text-[#ccc] text-xl">
                            If you look for a design team to make your product vision a reality, let’s see how we can help you. Contact us at <a href="mailto:hello@lazarev.agency"><span className="text-red-700">hello@lazarev.agency</span></a>.
                        </h3>
                    </div>
                </div>
                <div className="flex flex-col gap-12 lg:w-1/3">
                    <div className="hidden lg:flex flex-col gap-8 pl-10">
                        <h1 className="font-Grotesk font-medium text-white text-[32px]">Table of content</h1>
                        <div className="flex flex-col gap-3">
                            <h3 className={getClass("first")} onClick={() => handleClick("first")}>
                                01. What’s the idea behind RedBrain?
                            </h3>
                            <h3 className={getClass("second")} onClick={() => handleClick("second")}>
                                02. What’s up with RedBrain now?
                            </h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 mt-10 lg:mt-0 lg:pl-10 pt-12 border-t-2 border-white border-opacity-10 ">
                        <h1 className="font-Grotesk font-medium text-white text-[32px]">Share this article</h1>
                        <div className="flex gap-7 items-center">
                            <Instagram className="hover:fill-white" />
                            <Threads className="hover:fill-white" />
                            <LinkedIn className="hover:fill-white" />
                            <Facebook className="hover:fill-white" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#1B1612] relative overflow-hidden px-6 sm:px-16 lg:px-24 pt-20 pb-10 lg:pb-20 lg:mt-5 lg:mb-5 lg:mx-10 lg:rounded-2xl">
                <h3 className="font-Petit font-normal text-2xl text-[#cccccc]">02 / 04</h3>
                <div className="flex flex-col lg:flex-row justify-between mt-10 gap-5">
                    <h1 data-aos="fade-up" className="w-2/3 lg:w-1/2 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        Related articles
                    </h1>
                    <div className="lg:w-2/5 flex flex-row-reverse">
                        <Link href={"./blog"}>
                            <button className="hidden lg:flex items-center text-[#ccc] gap-2 hover:text-white">
                                <h3 className="link font-Jakarta font-normal text-lg">All blogs and news</h3>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between gap-10 mt-8 lg:mt-24">
                    <div className="flex flex-col gap-5">
                        <Image src={singleblog1} alt="singleserviceblog" className="" />
                        <h1 data-aos="fade-up" className="font-Grotesk font-medium text-white text-xl">
                            Storybook and it's amazing plugins for React Native
                        </h1>
                        <Link href={"./#"}>
                            <button className="flex items-center text-[#ccc] gap-2 hover:text-white">
                                <h3 className="link font-Jakarta font-normal text-lg">Read more</h3>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                                </svg>
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-5">
                        <Image src={singleblog2} alt="singleserviceblog" className="" />
                        <h1 data-aos="fade-up" className="font-Grotesk font-medium text-white text-xl">
                            Storybook and it's amazing plugins for React Native
                        </h1>
                        <Link href={"./#"}>
                            <button className="flex items-center text-[#ccc] gap-2 hover:text-white">
                                <h3 className="link font-Jakarta font-normal text-lg">Read more</h3>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                                </svg>
                            </button>
                        </Link>
                    </div>
                    <div className="sm:flex flex-col gap-5 hidden">
                        <Image src={singleblog3} alt="singleserviceblog" className="" />
                        <h1 data-aos="fade-up" className="font-Grotesk font-medium text-white text-xl">
                            Storybook and it's amazing plugins for React Native
                        </h1>
                        <Link href={"./#"}>
                            <button className="flex items-center text-[#ccc] gap-2 hover:text-white">
                                <h3 className="link font-Jakarta font-normal text-lg">Read more</h3>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="bg-[#1B1612] overflow-hidden lg:bg-white relative px-6 sm:px-16 lg:px-0 pt-2 pb-16 sm:py-10 lg:py-28 lg:mx-10">
                <div className="block absolute left-1/2 top-[250%] transform -translate-x-1/2 -translate-y-1/2 z-0 sm:hidden">
                    <RedCircle />
                </div>
                <div className="bg-white relative z-10 flex justify-center items-center my-auto py-7 lg:py-0 gap-5 rounded-2xl">
                    <Image src={arrowLeftMobile} alt="left-arrow" className="lg:hidden" />
                    <Image src={arrowBlack} alt="left-arrow" className="hidden lg:block" />
                    <h1 className="font-Grotesk font-medium text-base lg:text-4xl">Back to blog and news</h1>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default SingleBlog
