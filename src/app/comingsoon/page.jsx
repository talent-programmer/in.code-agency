import Image from "next/image";
import RedCircle from "@/components/RedCircle";
import LinkedIn from "@/components/comingsoon/LinkedIn";
import Instagram from "@/components/comingsoon/Instagram";
import Threads from "@/components/comingsoon/Threads";
import Facebook from "@/components/comingsoon/Facebook";

import { logoDesktop, logoMobile, arrow, noiseOverlay, noiseOverlayTablet, noiseOverlayMobile } from "../../../public/assetes/img";

const ComingSoon = () => {
    return (
        <main className="bg-[#1B1612] relative pt-12 pb-8 overflow-hidden sm:pt-8 lg:pt-24 rounded-2xl">
            <Image src={noiseOverlay} className="fixed top-0 z-[1] opacity-60 hidden lg:block mt-5" />
            <Image src={noiseOverlayTablet} className="fixed top-0 z-[1] opacity-60 hidden sm:block lg:hidden" />
            <Image src={noiseOverlayMobile} className="fixed top-0 z-[1] opacity-60 block sm:hidden" />
            <div className="hidden absolute -right-48 -top-48 lg:block">
                <RedCircle />
            </div>
            <div className="hidden absolute -left-72 -bottom-24 lg:block">
                <RedCircle />
            </div>
            <div className="block absolute left-1/2 transform -translate-x-1/2 -bottom-96 sm:-bottom-[500px] lg:hidden">
                <RedCircle />
            </div>
            <div className="flex justify-center items-center gap-2 lg:gap-4 relative z-10">
                <Image src={logoDesktop} alt="logo" className="hidden lg:block" />
                <Image src={logoMobile} alt="logo" className="block lg:hidden" />
                <h3 className="text-white font-semibold font-syne text-xl lg:text-[40px]">in.code</h3>
            </div>
            <div className="flex flex-col justify-center items-center mt-[234px] px-11 sm:px-28 sm:mt-[440px] lg:mt-48 relative z-10">
                <h1 className="text-white font-medium font-Grotesk text-center text-3xl sm:text-[40px] lg:text-6xl">Website coming soon!</h1>
                <p className="text-[#cccccc] font-normal font-Jakarta text-center text-base mt-[30px] sm:text-xl sm:mt-10 lg:mt-5">
                    Until then, check out on what we've been working on in the past.
                </p>
                <button className="px-8 py-3 bg-[#DA3224] rounded-full flex justify-center items-center gap-3 mt-[30px] sm:mt-10 lg:mt-[30px] hover:bg-red-700">
                    <h5 className="text-white font-medium font-Grotesk text-base">Past Projects</h5>
                    <Image src={arrow} alt="arrow" />
                </button>
            </div>
            <div className="mt-[206px] sm:mt-[375px] lg:mt-[263px] flex flex-col gap-[30px] sm:gap-10 lg:gap-[30px] justify-center items-center relative z-10">
                <div className="flex gap-7 justify-center items-center">
                    <Instagram className="hover:fill-white hover:cursor-pointer" />
                    <Threads className="hover:fill-white hover:cursor-pointer" />
                    <LinkedIn className="hover:fill-white hover:cursor-pointer" />
                    <Facebook className="hover:fill-white hover:cursor-pointer" />
                </div>
                <p className="text-white font-Jakarta text-xs lg:text-sm">
                    @Incode 2024. Copyright & All rights reserved
                </p>
            </div>
        </main>
    );
}

export default ComingSoon;
