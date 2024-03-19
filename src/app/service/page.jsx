import Image from "next/image";
import NavBar from "@/components/NavBar";
import SocialMarque from "@/components/work/SocialMarque";
import BrandMarque from "@/components/work/BrandMaque";
import RedCircle from "@/components/RedCircle";
import Footer from "@/components/Footer";
import { serviceBg, design } from "../../../public/assetes/img";

const Service = () => {
    
    return (
        <main className="bg-[#FFFAF6] w-full lg:px-10">
            <div className="w-[100vh] fixed left-0 transform -translate-x-[47.5%] translate-y-[48vh] -rotate-90 hidden lg:block">
                <SocialMarque />
            </div>
            <div className="w-[100vh] fixed right-0 transform translate-x-[47.5%] translate-y-[48vh] rotate-90 hidden lg:block">
                <BrandMarque />
            </div>
            <section className="relative bg-[#1B1612] overflow-hidden px-6 sm:px-16 lg:px-24 pt-8 pb-20 sm:pb-16 lg:pb-72 lg:rounded-2xl">
                <div className="hidden sm:block absolute -bottom-72 -left-72 z-20">
                    <RedCircle />
                </div>
                <div className="block absolute left-1/2 transform -translate-x-1/2 -bottom-[400px] sm:hidden">
                    <RedCircle />
                </div>
                <div className="absolute right-0 top-0 h-full">
                    <div className="relative h-full hidden sm:block sm:scale-100">
                        <div className="absolute w-40 bg-gradient-to-r from-[#1B1612] via-[#1B1612]/90 via-30% to-[#1B1612]/0 h-full z-10 drop-shadow-2xl"></div>
                        <Image src={serviceBg} className="" />
                    </div>
                </div>
                {/* <div className="absolute -right-[420px] top-0 h-full">
                    <div className="relative overflow-hidden h-full hidden sm:block sm:scale-100 lg:scale-100">
                        <div className="absolute sm:w-[708px] lg:w-[708px] bg-gradient-to-r from-[#1B1612] via-[#1B1612]/90 via-30% to-[#1B1612]/0 h-full z-10 drop-shadow-2xl"></div>
                        <Image src={homeBg} className="h-full xl:scale-105 xxl:scale-100" />
                    </div>
                </div> */}
                <NavBar />
                <div className="max-w-[1580px] mx-auto relative z-10 mt-20 lg:mt-48">
                    <div className="flex flex-col gap-10">
                        <h1 className="font-Grotesk font-medium text-white text-3xl sm:text-4xl lg:text-6xl">
                            <span className="font-Petit mr-5">A full service</span>
                            digital <br /> innovaion partner
                        </h1>
                        <h3 className="font-Jakarta font-normal text-white text-xl sm:w-2/3">
                            We have established expertise in everything that makes brand work, and keep working for our clients. Here’s a brief overview of what we get up to, please do get in touch if you’d like to learn more.
                        </h3>
                        <button className="px-8 py-3 bg-red-500 rounded-full w-fit flex justify-center items-center gap-3 -mt-5 sm:-mt-2 hover:bg-red-700">
                            <h5 className="text-white font-medium font-Grotesk text-base">Let's talk!</h5>
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-[#1B1612] relative overflow-hidden px-6 sm:px-16 lg:px-24 pt-20 pb-20 -mt-5 lg:mt-5 lg:mb-5 rounded-2xl z-30">
                <h3 className="font-Petit font-normal text-2xl text-[#cccccc]">01 / 02</h3>
                <div className="flex flex-col lg:flex-row justify-between mt-10 gap-5">
                    <h1 data-aos="fade-up" className="w-2/3 lg:w-2/5 font-Grotesk font-medium text-white text-2xl lg:text-4xl">
                        We combine
                        <span className="font-Petit ml-3">human empathy and intelligent data</span>
                        to provide the highest level of
                    </h1>
                    <h3 data-aos="fade-up" className="lg:w-2/5 font-Jakarta font-normal text-[#cccccc] text-xl">
                        So... to make it easier, think of us as your special ops digital product development team - tackling with your challenges and needs. Whether you are adding a new feature, a new product, or redesigning an existing product, we will help set you up for success.
                    </h3>
                </div>
                <div className="mt-12 sm:mt-20 lg:mt-40 flex flex-col gap-20 lg:gap-36">
                    <div className="">
                        <div className="flex items-center gap-4">
                            <h3 className="font-Grotesk font-medium text-white text-xl">01</h3>
                            <h1 className="font-Grotesk font-medium text-white text-[32px]">UX / UI Design</h1>
                        </div>
                        <div className="flex flex-col gap-10 lg:flex-row justify-between mt-10">
                            <div className="lg:w-2/5">
                                <Image src={design} className="w-full" />
                            </div>
                            <div className="lg:w-2/5">
                                <h3 data-aos="fade-up" className="font-Jakarta font-normal text-[#cccccc] text-xl">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                                <h3 data-aos="fade-up" className="font-Jakarta font-normal text-[#cccccc] text-xl mt-10">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                                <h1 className="font-Grotesk font-medium text-white text-2xl mt-12">Tools & technologies</h1>
                                <div className="flex flex-col gap-2 mt-8">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Figma</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Sketch</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Adobe Photoshop</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Adobe Illustrator</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Miro</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Zeplin</h3>
                                    </div>
                                </div>
                                <button className="hidden lg:flex items-center text-[#ccc] gap-2 mt-12 hover:text-white">
                                    <h3 className="link font-Jakarta font-normal text-lg">Learn more</h3>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center gap-4">
                            <h3 className="font-Grotesk font-medium text-white text-xl">02</h3>
                            <h1 className="font-Grotesk font-medium text-white text-[32px]">Front-end Development</h1>
                        </div>
                        <div className="flex flex-col gap-10 lg:flex-row justify-between mt-10">
                            <div className="lg:w-2/5">
                                <Image src={design} className="w-full" />
                            </div>
                            <div className="lg:w-2/5">
                                <h3 data-aos="fade-up" className="font-Jakarta font-normal text-[#cccccc] text-xl">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                                <h3 data-aos="fade-up" className="font-Jakarta font-normal text-[#cccccc] text-xl mt-10">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                                <h1 className="font-Grotesk font-medium text-white text-2xl mt-12">Tools & technologies</h1>
                                <div className="flex flex-col gap-2 mt-8">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Figma</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Sketch</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Adobe Photoshop</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Adobe Illustrator</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Miro</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Zeplin</h3>
                                    </div>
                                </div>
                                <button className="hidden lg:flex items-center text-[#ccc] gap-2 mt-12 hover:text-white">
                                    <h3 className="link font-Jakarta font-normal text-lg">Learn more</h3>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center gap-4">
                            <h3 className="font-Grotesk font-medium text-white text-xl">03</h3>
                            <h1 className="font-Grotesk font-medium text-white text-[32px]">Back-end Development</h1>
                        </div>
                        <div className="flex flex-col gap-10 lg:flex-row justify-between mt-10">
                            <div className="lg:w-2/5">
                                <Image src={design} className="w-full" />
                            </div>
                            <div className="lg:w-2/5">
                                <h3 data-aos="fade-up" className="font-Jakarta font-normal text-[#cccccc] text-xl">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                                <h3 data-aos="fade-up" className="font-Jakarta font-normal text-[#cccccc] text-xl mt-10">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                                <h1 className="font-Grotesk font-medium text-white text-2xl mt-12">Tools & technologies</h1>
                                <div className="flex flex-col gap-2 mt-8">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Figma</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Sketch</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Adobe Photoshop</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Adobe Illustrator</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Miro</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Zeplin</h3>
                                    </div>
                                </div>
                                <button className="hidden lg:flex items-center text-[#ccc] gap-2 mt-12 hover:text-white">
                                    <h3 className="link font-Jakarta font-normal text-lg">Learn more</h3>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center gap-4">
                            <h3 className="font-Grotesk font-medium text-white text-xl">04</h3>
                            <h1 className="font-Grotesk font-medium text-white text-[32px]">Hybrid mobile Development</h1>
                        </div>
                        <div className="flex flex-col gap-10 lg:flex-row justify-between mt-10">
                            <div className="lg:w-2/5">
                                <Image src={design} className="w-full" />
                            </div>
                            <div className="lg:w-2/5">
                                <h3 data-aos="fade-up" className="font-Jakarta font-normal text-[#cccccc] text-xl">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                                <h3 data-aos="fade-up" className="font-Jakarta font-normal text-[#cccccc] text-xl mt-10">
                                    Design thinking is at the core of what we do. All decisions are made with the end-user in mind, beginning with requirements gathering and user research, through idea generation, creating information architecture, wireframing and prototyping, all the way to user testing and development.
                                </h3>
                                <h1 className="font-Grotesk font-medium text-white text-2xl mt-12">Tools & technologies</h1>
                                <div className="flex flex-col gap-2 mt-8">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Figma</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Sketch</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Adobe Photoshop</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Adobe Illustrator</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Miro</h3>
                                        <h3 className="bg-[#333] font-Jakarta font-medium text-white text-sm px-8 py-2 rounded-3xl hover:bg-white hover:text-black">Zeplin</h3>
                                    </div>
                                </div>
                                <button className="hidden lg:flex items-center text-[#ccc] gap-2 mt-12 hover:text-white">
                                    <h3 className="link font-Jakarta font-normal text-lg">Learn more</h3>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.73224 1.51824C7.16947 1.95547 8.25429 2.17644 9.23953 2.28722C10.5088 2.43218 11.7975 2.37738 13.0385 2.07804C13.9689 1.85353 15.0078 1.49232 15.5711 0.928989M15.5711 0.928989C15.0078 1.49232 14.6459 2.53176 14.422 3.46161C14.1233 4.70317 14.0685 5.99187 14.2123 7.25995C14.3236 8.24578 14.5458 9.33177 14.9818 9.76782M15.5711 0.928989L1.42894 15.0711" stroke="currentcolor" strokeWidth={1.5} />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Service;
