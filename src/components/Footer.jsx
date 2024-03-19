import Image from "next/image";
import RedCircle from "./RedCircle";
import { logoMobile } from "../../public/assetes/img";

import "./Footer.scss"

const Footer = () => {
    return (
        <section className="bg-[#1B1612] px-6 sm:px-16 lg:px-24 pt-10 sm:pt-14 lg:pt-20 lg:pb-10 -mt-4 sm:mt-0 lg:mx-10 rounded-2xl sm:rounded-none lg:rounded-2xl relative overflow-hidden">
            <div className="absolute -right-72 -bottom-48">
                <RedCircle />
            </div>
            <div className="flex gap-4 items-center">
                <Image src={logoMobile} alt="logo" />
                <h3 className="font-syne font-semibold text-2xl text-white">in.code</h3>
            </div>
            <div className="flex flex-col lg:flex-row mt-10 lg:justify-between">
                <div className="lg:w-[45%]">
                    <h1 className="font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        Starting a <span className="font-Petit mx-3">new project</span> or want to collaborate with us?
                    </h1>
                    <button className="lg:hidden flex items-center gap-2 border-2 border-white rounded-full px-6 py-3 mt-6 sm:mt-8 text-white hover:bg-white hover:text-black">
                        <h3 className="font-Grotesk font-medium text-base">Get in touch</h3>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                        </svg>
                    </button>
                    <button className="hidden lg:flex items-center text-[#ccc] gap-2 mt-10 hover:text-white">
                        <h3 className="link font-Jakarta font-normal text-lg">Get in touch</h3>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                        </svg>
                    </button>
                </div>
                <div className="w-full lg:w-[35%] flex justify-start mt-16 sm:mt-20 lg:mt-0">
                    <div className="w-1/2">
                        <h1 className="font-Grotesk font-medium text-white text-xl">Socials</h1>
                        <div className="flex flex-col gap-4 mt-8">
                            <h3 className="link font-Jakarta text-[#ccc] text-base w-fit hover:text-white">Instagram</h3>
                            <h3 className="link font-Jakarta text-[#ccc] text-base w-fit hover:text-white">Facebook</h3>
                            <h3 className="link font-Jakarta text-[#ccc] text-base w-fit hover:text-white">LinkedIn</h3>
                            <h3 className="link font-Jakarta text-[#ccc] text-base w-fit hover:text-white">Threads</h3>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h1 className="font-Grotesk font-medium text-white text-xl">Quick Links</h1>
                        <div className="flex flex-col gap-4 mt-8">
                            <h3 className="link font-Jakarta text-[#ccc] text-base w-fit hover:text-white">Home</h3>
                            <h3 className="link font-Jakarta text-[#ccc] text-base w-fit hover:text-white">Services</h3>
                            <h3 className="link font-Jakarta text-[#ccc] text-base w-fit hover:text-white">Case Study</h3>
                            <h3 className="link font-Jakarta text-[#ccc] text-base w-fit hover:text-white">Process</h3>
                            <h3 className="link font-Jakarta text-[#ccc] text-base w-fit hover:text-white">Blog</h3>
                            <h3 className="link font-Jakarta text-[#ccc] text-base w-fit hover:text-white">Contact</h3>
                            <h3 className="link font-Jakarta text-[#ccc] text-base w-fit hover:text-white">Sitemap</h3>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-16 lg:mt-20 border-[#ccc] opacity-10" />
            <div className="mt-4 flex justify-center lg:justify-between">
                <h3 className="hidden lg:block font-Jakarta font-normal text-[#666666] text-base">@Incode 2023. Copyright & All rights reserved</h3>
                <div className="flex items-center gap-10 lg:gap-4">
                    <h3 className="font-Jakarta font-normal text-[#ccc] text-base">Privacy</h3>
                    <h3 className="font-Jakarta font-normal text-[#ccc] text-base">Terms</h3>
                    <h3 className="font-Jakarta font-normal text-[#ccc] text-base">Cookies</h3>
                </div>
            </div>
            <hr className="mt-4 border-[#ccc] opacity-10 lg:hidden" />
            <h3 className="font-Jakarta font-normal text-[#666666] text-xs text-center py-10 lg:hidden">@Incode 2023. Copyright & All rights reserved</h3>
        </section>
    )
}

export default Footer;
