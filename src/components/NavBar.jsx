import Image from "next/image";

import { logoDesktop, logoMobile, menu } from "../../public/assetes/img";

const NavBar = () => {
    return (
        <nav className="max-w-[1580px] mx-auto flex items-center justify-between relative z-10">
            <div className="flex items-center gap-3">
                <Image src={logoDesktop} alt="logo" className="hidden lg:block" />
                <Image src={logoMobile} alt="logo" className="lg:hidden" />
                <h3 className="font-syne font-semibold text-white text-xl lg:text-3xl">in.code</h3>
            </div>
            <div className="flex items-center gap-20">
                <Image src={menu} alt="menu" className="block lg:hidden" />
                <h3 className="font-Grotesk font-medium text-white text-base hidden lg:block">Services</h3>
                <h3 className="font-Grotesk font-medium text-white text-base hidden lg:block">Work</h3>
                <h3 className="font-Grotesk font-medium text-white text-base hidden lg:block">Process</h3>
                <h3 className="font-Grotesk font-medium text-white text-base hidden lg:block">Blog</h3>
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
    )
}

export default NavBar;