import Image from "next/image";
import RedCircle from "@/components/RedCircle";
import SocialMarque from "@/components/work/SocialMarque";
import BrandMarque from "@/components/work/BrandMaque";
import Footer from "@/components/Footer";
import { arrowLeft, singleServiceVid, line1, singleServiceSample1, singleServiceSample2, singleServiceSample3 } from "../../../public/assetes/img";
import Link from "next/link";

import "./singleservice.scss"
import NavBar from "@/components/NavBar";

const SingleService = () => {

    return (
        <main className="bg-[#FFFAF6] w-full lg:px-10">
            <div className="w-[100vh] fixed left-0 transform -translate-x-[47.5%] translate-y-[48vh] -rotate-90 hidden lg:block">
                <SocialMarque />
            </div>
            <div className="w-[100vh] fixed right-0 transform translate-x-[47.5%] translate-y-[48vh] rotate-90 hidden lg:block">
                <BrandMarque />
            </div>
            <section className="bg-[#1B1612] relative lg:overflow-hidden px-6 sm:px-16 lg:px-24 pt-8 pb-20 lg:rounded-2xl">
                <div className="hidden absolute -right-96 right top-72 lg:block">
                    <RedCircle />
                </div>
                <NavBar />
                <div className="mt-32 w-full lg:w-1/2 flex flex-col gap-8 lg:gap-10">
                    <Link href="/work">
                        <div className="flex items-center gap-5">
                            <Image src={arrowLeft} alt="left-arrow" />
                            <h3 className="link font-Jakarata lg:italic text-[#ccc] text-xl hover:text-white">Services</h3>
                            <h3 className="hidden font-Jakarata italic text-[#ccc] text-xl lg:block">UX/UI Design</h3>
                        </div>
                    </Link>
                    <h1 className="font-Grotesk font-medium text-white text-3xl lg:text-6xl">
                        UX/UI Design
                    </h1>
                    <h3 className="font-Jakarta font-normal text-white text-base lg:text-xl">
                        The enterprise UX is all about the wants, needs, drivers, and pain points of employees, thereby creating an effective, efficient, and pleasant experience.
                    </h3>
                    <button className="px-8 py-3 bg-red-600 rounded-full w-fit flex justify-center items-center gap-3 mt-8 sm:mt-10 lg:mt-10 hover:bg-red-700">
                        <h5 className="text-white font-medium font-Grotesk text-base">Let's talk!</h5>
                    </button>
                </div>
                <hr className="mt-36 text-[#333] opacity-10" />
                <div className="flex flex-col lg:flex-row justify-between mt-36 mb-20 gap-5">
                    <h1 data-aos="fade-up" className="w-2/3 lg:w-1/2 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        Create
                        <i className="font-Petit ml-3">perfect conditions for end-users</i>
                        through performance, which brings lucrative business benefits.
                    </h1>
                    <h3 data-aos="fade-up" className="lg:w-2/5 font-Jakarta font-normal text-[#cccccc] text-xl">
                        The widespread adoption of web apps, which aid communication with customers, collaboration with employees, data storage, etc., is revamping how businesses are run and clients are served. The enterprise UX is all about the wants, needs, drivers, and pain points of employees, thereby creating an effective, efficient, and pleasant experience.
                    </h3>
                </div>
                <Image src={singleServiceVid} className="mt-24" />
            </section>
            <section className="bg-[#1B1612] relative lg:overflow-hidden px-6 sm:px-16 lg:px-24 pt-20 pb-20 lg:pb-35 lg:mt-5 lg:rounded-2xl">     
                <div className="hidden absolute left-1/2 -bottom-72 transform -translate-x-1/2 z-0 lg:block">
                    <RedCircle />
                </div>
                <h3 className="font-Petit font-normal text-2xl text-[#cccccc]">02 / 09</h3>
                <div className="flex flex-col lg:flex-row justify-between mt-10 gap-5">
                    <h1 data-aos="fade-up" className="w-2/3 lg:w-1/2 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        Create
                        <i className="font-Petit ml-3">perfect conditions for end-users</i>
                        through performance
                    </h1>
                    <h3 data-aos="fade-up" className="lg:w-2/5 font-Jakarta font-normal text-[#cccccc] text-xl">
                        The widespread adoption of web apps, which aid communication with customers, collaboration with employees, data storage, etc., is revamping how businesses are run and clients are served.
                    </h3>
                </div>
                <div className="py-10 relative flex flex-col gap-[150px] mt-20">
                    <Image src={line1} className="absolute left-1/2 top-0 h-full" />
                    <div className="flex flex-col gap-8 w-2/5">
                        <h1 className="font-Grotesk font-medium text-white text-[32px]">Reduced Training Costs</h1>
                        <h3 className="font-Jakarta font-normal text-[#ccc] text-base">
                            We create a positive onboarding experience, teaching users how to complete certain actions they have in mind and learn the interface without much effort.
                        </h3>
                    </div>
                    <div className="flex flex-row-reverse">
                        <div className="flex flex-col gap-8 w-2/5">
                            <h1 className="font-Grotesk font-medium text-white text-[32px]">Enhanced Productivity</h1>
                            <h3 className="font-Jakarta font-normal text-[#ccc] text-base">
                                We significantly reduce the task completion time, allowing users to do their jobs in fewer clicks, thus contributing to better overall productivity.
                            </h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 w-2/5">
                        <h1 className="font-Grotesk font-medium text-white text-[32px]">Minimized Development Costs</h1>
                        <h3 className="font-Jakarta font-normal text-[#ccc] text-base">
                            Predicting potential pitfalls or ulterior user needs, we spot problems early on in the design process and make it easier and cheaper to fix shortcomings before launching.
                        </h3>
                    </div>
                    <div className="flex flex-row-reverse">
                        <div className="flex flex-col gap-8 w-2/5">
                            <h1 className="font-Grotesk font-medium text-white text-[32px]">Improving Application Engagement</h1>
                            <h3 className="font-Jakarta font-normal text-[#ccc] text-base">
                                We significantly reduce the task completion time, allowing users to do their jobs in fewer clicks, thus contributing to better overall productivity.
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#1B1612] relative lg:overflow-hidden px-6 sm:px-16 lg:px-24 pt-20 pb-20 lg:pb-35 lg:mt-5 lg:mb-5 lg:rounded-2xl">
                <h3 className="font-Petit font-normal text-2xl text-[#cccccc]">02 / 09</h3>
                <div className="flex flex-col lg:flex-row justify-between mt-10 gap-5">
                    <h1 data-aos="fade-up" className="w-2/3 lg:w-1/2 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        Elevate the
                        <i className="font-Petit ml-3">user experience of your digital product</i>
                        to realize it's potential.
                    </h1>
                    <div className="lg:w-2/5">
                        <h3 data-aos="fade-up" className="font-Jakarta font-normal text-[#cccccc] text-xl">
                            Whether you’re building an app for managing records, accounting, automation, project management, or any other type of daily operations, we back you up with our holistic design process.
                        </h3>
                        <button className="hidden lg:flex items-center text-[#ccc] gap-2 mt-10 hover:text-white">
                            <h3 className="link font-Jakarta font-normal text-lg">Our process approach</h3>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex gap-10 mt-36">
                    <Image src={singleServiceSample1} />
                    <Image src={singleServiceSample2} />
                    <Image src={singleServiceSample3} />
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default SingleService
