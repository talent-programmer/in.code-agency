"use client"

import Image from "next/image";
import Link from "next/link";
import { Dialog } from '@headlessui/react';

import { arrowLeft, logoDesktop, logoMobile } from "../../../public/assetes/img";
import { useRef, useEffect, useState } from "react";
import Menu from "./Menu";

import "./NavBar.scss"
import RightArrow from "../work/RightArrow";

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const navBar = useRef();
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (lastScrollY < window.scrollY) {
                // Scrolling down
                if (navBar.current.style) {
                    navBar.current.style.top = '-150px'; // Adjust based on navbar's height
                }
            } else {
                // Scrolling up
                if (navBar.current.style) {
                    navBar.current.style.top = '0px';
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

    useEffect(() => {
        const onScroll = () => {
            const navbar = document.getElementById("navBar");
            if (window.pageYOffset > 0) {
                navbar.classList.remove("lg:mt-5")
            }
            if (window.pageYOffset == 0) {
                navbar.classList.add("lg:mt-5")
            }
        }
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header>
            <div className="fixed z-50 w-full top-8">
                <nav ref={navBar} id="navBar" className="w-full max-w-[1160px] mx-auto px-6 sm:px-16 lg:px-[136px] lg:mt-5 flex items-center justify-between relative transition-all">
                    <Link href="/home">
                        <div className="flex items-center gap-3">
                            <Image src={logoDesktop} alt="logo" className="hidden lg:block" />
                            <Image src={logoMobile} alt="logo" className="lg:hidden" />
                            <h3 className="font-syne font-semibold text-white text-xl lg:text-3xl">in.code</h3>
                        </div>
                    </Link>
                    <div className="flex items-center sm:gap-5 xl:gap-16">
                        <Link href="/service">
                            <h3 className="link font-Grotesk font-medium text-white text-base hidden lg:block">Services</h3>
                        </Link>
                        <Link href="/work">
                            <h3 className="link font-Grotesk font-medium text-white text-base hidden lg:block">Work</h3>
                        </Link>
                        <Link href="/approach">
                            <h3 className="link font-Grotesk font-medium text-white text-base hidden lg:block">Process</h3>
                        </Link>
                        <Link href="/blog">
                            <h3 className="link font-Grotesk font-medium text-white text-base hidden lg:block">Blog</h3>
                        </Link>
                        <Link href="contact" className="hidden sm:block">
                            <button className="flex items-center gap-2 border-2 border-white rounded-full sm:px-4 sm:py-2 xl:px-6 xl:py-3 text-white hover:bg-white hover:text-black transition-all">
                                <h3 className="font-Grotesk font-medium text-base">Contact us</h3>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                                </svg>
                            </button>
                        </Link>
                        <div className="block lg:hidden hover:cursor-pointer" onClick={() => setMenuOpen(true)}>
                            <Menu />
                        </div>
                    </div>
                </nav>
            </div>
            <Dialog as="div" className="lg:hidden" open={menuOpen} onClose={setMenuOpen}>
                <Dialog.Panel className="fixed inset-y-0 right-0 z-[60] w-full overflow-y-auto bg-[#1B1612] px-[22px] sm:px-16 py-8">
                    <div className="flex items-center justify-between">
                        <Link href="/home">
                            <div className="flex items-center gap-3">
                            <Image src={logoDesktop} alt="logo" className="hidden sm:block" />
                            <Image src={logoMobile} alt="logo" className="sm:hidden" />
                                <h3 className="font-syne font-semibold text-white text-xl sm:text-3xl">in.code</h3>
                            </div>
                        </Link>
                        <button
                            type="button"
                            className="scale-75 sm:scale-100"
                            onClick={() => setMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <RightArrow className="stroke-white hover:stroke-black hover:fill-white" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-10 sm:gap-10 mt-14">
                        <Link href="/service" className="flex">
                            <h3 className="link font-Grotesk font-medium text-white text-base sm:text-2xl">Services</h3>
                        </Link>
                        <Link href="/work" className="flex">
                            <h3 className="link font-Grotesk font-medium text-white text-base sm:text-2xl">Work</h3>
                        </Link>
                        <Link href="/approach" className="flex">
                            <h3 className="link font-Grotesk font-medium text-white text-base sm:text-2xl">Process</h3>
                        </Link>
                        <Link href="/blog" className="flex">
                            <h3 className="link font-Grotesk font-medium text-white text-base sm:text-2xl">Blog</h3>
                        </Link>
                        <Link href="contact" className="">
                            <button className="flex items-center gap-2 border-2 border-white rounded-full px-4 py-2 sm:px-6 sm:py-3 xl:px-6 xl:py-3 text-white hover:bg-white hover:text-black transition-all">
                                <h3 className="font-Grotesk font-medium text-base">Contact us</h3>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default NavBar;