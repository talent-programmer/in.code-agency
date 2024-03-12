import Image from "next/image";
import RedCircle from "@/components/RedCircle";
import SocialMarque from "@/components/work/SocialMarque";
import BrandMarque from "@/components/work/BrandMaque";
import Footer from "@/components/Footer";
import { logoDesktop, logoMobile, bg1, bg2, bg3, bg4, bg5, arrowBlack, arrowLeft, menu, arrowLeftMobile, bg1Mobile, bg2Mobile, bg3Mobile, bg4Mobile, bg5Mobile } from "../../../public/assetes/img";
import Link from "next/link";

import "./singlework.scss"

const SingleWork = () => {

    return (
        <main className="bg-[#FFFAF6] w-full lg:px-10">
            <div className="w-[100vh] fixed left-0 transform -translate-x-[47.5%] translate-y-[48vh] -rotate-90 hidden lg:block">
                <SocialMarque />
            </div>
            <div className="w-[100vh] fixed right-0 transform translate-x-[47.5%] translate-y-[48vh] rotate-90 hidden lg:block">
                <BrandMarque />
            </div>
            <section className="bg-[#1B1612] relative lg:overflow-hidden px-6 sm:px-16 lg:px-24 pt-8 pb-20 lg:pb-40 lg:rounded-2xl">
                <div className="hidden absolute -right-72 lg:block">
                    <RedCircle />
                </div>
                <nav className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Image src={logoDesktop} alt="logo" className="hidden lg:block" />
                        <Image src={logoMobile} alt="logo" className="lg:hidden" />
                        <h3 className="font-syne font-semibold text-white text-xl lg:text-3xl">in.code</h3>
                    </div>
                    <div className="flex items-center gap-20">
                        <Image src={menu} alt="menu" className="block lg:hidden" />
                        <h3 className="font-Grotesk font-medium text-white text-base hidden lg:block">Work</h3>
                        <a href="#booking" className="hidden lg:block">
                            <button className="flex items-center gap-2 border-2 border-white rounded-full px-6 py-3 text-white hover:bg-white hover:text-black">
                                <h3 className="font-Grotesk font-medium text-base">Contact us</h3>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                                </svg>
                            </button>
                        </a>
                    </div>
                </nav>
                <div className="mt-32 w-full lg:w-1/2 flex flex-col gap-8 lg:gap-10">
                    <Link href="/work">
                        <div className="flex items-center gap-5">
                            <Image src={arrowLeft} alt="left-arrow" />
                            <h3 className="link font-Jakarata lg:italic text-[#ccc] text-xl hover:text-white">Case Study</h3>
                            <h3 className="hidden font-Jakarata italic text-[#ccc] text-xl lg:block">Edumean - Online Courses</h3>
                        </div>
                    </Link>
                    <h1 className="font-Grotesk font-medium text-white text-3xl lg:text-6xl">
                        Online courses delivered by the industry's best.
                    </h1>
                    <div>
                        <h3 className="font-Jakarta font-normal text-white text-base lg:text-xl">
                            Client:
                        </h3>
                        <h3 className="font-Jakarta font-normal text-white text-base lg:text-xl">
                            Edumena
                        </h3>
                    </div>
                    <div>
                        <h3 className="font-Jakarta font-normal text-white text-base lg:text-xl">
                            Year of production
                        </h3>
                        <h3 className="font-Jakarta font-normal text-white text-base lg:text-xl">
                            2022
                        </h3>
                    </div>
                    <div>
                        <h3 className="font-Jakarta font-normal text-white text-base lg:text-xl">
                            Branding
                        </h3>
                        <h3 className="font-Jakarta font-normal text-white text-base lg:text-xl">
                            Development
                        </h3>
                        <h3 className="font-Jakarta font-normal text-white text-base lg:text-xl">
                            Identity
                        </h3>
                    </div>
                </div>
            </section>
            <section className="bg-[#1B1612] w-full lg:rounded-2xl px-6 sm:px-16 lg:px-0 relative lg:mt-5">
                <Image src={bg1} alt="bg1" className="relative z-10 rounded-2xl hidden sm:block" />
                <Image src={bg1Mobile} alt="bg1" className="w-full relative z-10 rounded-2xl sm:hidden" />
                <div className="block absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-0 lg:hidden">
                    <RedCircle />
                </div>
            </section>
            <section className="bg-[#1B1612] px-6 sm:px-16 lg:px-24 pt-12 lg:pt-20 pb-12 lg:pb-20 lg:rounded-2xl lg:mt-5">
                <h3 className="font-Petit font-normal text-lg lg:text-2xl text-[#cccccc]">03 / 04</h3>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-10">
                    <h1 className="w-full lg:w-1/2 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        About the client
                    </h1>
                    <h3 className="w-full lg:w-2/5 font-Jakarta font-normal text-[#cccccc] text-base lg:text-xl mt-5 lg:mt-0">
                        Delivering you the knowledge of tomorrow. Immerse yourself into Edumena  to start learning now from the industry’s best and trek along previously uncharted territories.
                    </h3>
                </div>
            </section>
            <section className="bg-[#1B1612] w-full lg:rounded-2xl px-6 sm:px-16 lg:px-0 relative overflow-hidden lg:mt-5">
                <Image src={bg2} alt="bg2" className="rounded-2xl hidden sm:block" />
                <Image src={bg2Mobile} alt="bg2" className="w-full relative z-10 rounded-2xl sm:hidden" />
            </section>
            <section className="bg-[#1B1612] relative overflow-hidden px-6 sm:px-16 lg:px-24 pt-12 pb-12 lg:pt-20 lg:pb-20 lg:rounded-2xl lg:mt-5">
                <h3 className="font-Petit font-normal text-lg lg:text-2xl text-[#cccccc]">03 / 04</h3>
                <div className="flex flex-col lg:flex-row justify-between mt-10">
                    <h1 className="w-full lg:w-1/2 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        What we've done
                    </h1>
                    <div className="w-full lg:w-2/5 flex flex-col gap-5 lg:gap-10 mt-5 lg:mt-0">
                        <h3 className= "font-Jakarta font-normal text-[#cccccc] text-base lg:text-xl">
                            Delivering you the knowledge of tomorrow. Immerse yourself into Edumena  to start learning now from the industry’s best and trek along previously uncharted territories.
                        </h3>
                        <h3 className= "font-Jakarta font-normal text-[#cccccc] text-base lg:text-xl">
                            Delivering you the knowledge of tomorrow. Immerse yourself into Edumena  to start learning now from the industry’s best and trek along previously uncharted territories.
                        </h3>
                        <h3 className= "font-Jakarta font-normal text-[#cccccc] text-base lg:text-xl">
                            Delivering you the knowledge of tomorrow. Immerse yourself into Edumena  to start learning now from the industry’s best and trek along previously uncharted territories.
                        </h3>
                    </div>
                </div>
            </section>
            <section className="bg-[#1B1612] w-full lg:rounded-2xl px-6 sm:px-16 lg:px-0 py-1 lg:py-0 relative overflow-hidden lg:mt-5">
                <Image src={bg3} alt="bg3" className="rounded-2xl hidden sm:block" />
                <Image src={bg3Mobile} alt="bg3" className="w-full relative z-10 rounded-2xl sm:hidden" />
            </section>
            <section className="bg-[#1B1612] w-full lg:rounded-2xl px-6 sm:px-16 lg:px-0 py-1 lg:py-0 relative overflow-hidden lg:mt-5">
                <Image src={bg4} alt="bg4" className="rounded-2xl] hidden sm:block" />
                <Image src={bg4Mobile} alt="bg4" className="w-full  z-10 rounded-2xl sm:hidden" />
            </section>
            <section className="bg-[#1B1612] w-full lg:rounded-2xl px-6 sm:px-16 lg:px-0 py-1 lg:py-0 relative overflow-hidden lg:mt-5">
                <Image src={bg5} alt="bg5" className="rounded-2xl hidden sm:block" />
                <Image src={bg5Mobile} alt="bg5" className="w-full relative z-10 rounded-2xl sm:hidden" />
            </section>
            <section className="bg-[#1B1612] lg:bg-white relative px-6 sm:px-16 lg:px-0 pt-2 pb-16 sm:py-10 lg:py-28">
                <div className="block absolute left-1/2 top-[250%] transform -translate-x-1/2 -translate-y-1/2 z-0 sm:hidden">
                    <RedCircle />
                </div>
                <div className="bg-white relative z-10 flex justify-center items-cente py-7 lg:py-0 gap-5 rounded-2xl">
                    <Image src={arrowLeftMobile} alt="left-arrow" className="lg:hidden" />
                    <Image src={arrowBlack} alt="left-arrow" className="hidden lg:block" />
                    <h1 className="font-Grotesk font-medium text-base lg:text-4xl">Back to projects</h1>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default SingleWork
