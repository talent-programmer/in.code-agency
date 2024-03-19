"use client"

import Image from "next/image";
import Link from "next/link";

import { logoDesktop, logoMobile, menu } from "../../public/assetes/img";
import { useRef, useEffect } from "react";

const NavBar = () => {

    const navBar = useRef();
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (lastScrollY < window.scrollY) {
                // Scrolling down
                if (navBar.current.style) {
                    navBar.current.style.top = '-100px'; // Adjust based on navbar's height
                }
            } else {
                // Scrolling up
                if (navBar.current.style) {
                    navBar.current.style.top = '32px';
                }
            }

            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // if (typeof window !== "undefined") {
    //     let lastScrollY = window.scrollY;
    
    //     window.addEventListener('scroll', () => {
          
    //         if (lastScrollY < window.scrollY) {
    //           // Scrolling down
    //           if(navBar.current.style)
    //             console.log(navBar.current)
    //             navBar.current.style.top = '-100px'; // Adjust based on navbar's height
    //         } else {
    //           // Scrolling up
    //           navBar.current.style.top = '32px';
    //         }

    //         lastScrollY = window.scrollY;
    //     });
    // }

    return (
        <nav ref={navBar} id="navBar" className="w-full px-6 sm:px-16 lg:px-[136px] top-8 flex items-center justify-between fixed z-50">
            <Link href="/home">
                <div className="flex items-center gap-3">
                    <Image src={logoDesktop} alt="logo" className="hidden lg:block" />
                    <Image src={logoMobile} alt="logo" className="lg:hidden" />
                    <h3 className="font-syne font-semibold text-white text-xl lg:text-3xl">in.code</h3>
                </div>
            </Link>
            <div className="flex items-center sm:gap-12 xl:gap-16 xxl:gap-20">
                <Link href="/service">
                    <h3 className="font-Grotesk font-medium text-white text-base hidden lg:block">Services</h3>
                </Link>
                <Link href="/work">
                    <h3 className="font-Grotesk font-medium text-white text-base hidden lg:block">Work</h3>
                </Link>
                <Link href="/approach">
                    <h3 className="font-Grotesk font-medium text-white text-base hidden lg:block">Process</h3>
                </Link>
                <Link href="/blog">
                    <h3 className="font-Grotesk font-medium text-white text-base hidden lg:block">Blog</h3>
                </Link>
                <Link href="contact" className="hidden sm:block">
                    <button className="flex items-center gap-2 border-2 border-white rounded-full sm:px-4 sm:py-2 xl:px-6 xl:py-3 text-white hover:bg-white hover:text-black">
                        <h3 className="font-Grotesk font-medium text-base">Contact us</h3>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                        </svg>
                    </button>
                </Link>
                <Image src={menu} alt="menu" className="block lg:hidden" />
            </div>
        </nav>
    )
}

export default NavBar;