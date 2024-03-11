import { useEffect } from "react";

import Image from "next/image";
import Aos from "aos";
import "./EachWork.scss"

const EachWork = (props) => {

    const {src, title, description} = props;

    useEffect(() => {
        Aos.init(); // Initialize AOS
    }, []);

    return (
        <div className="flex flex-col gap-5">
            <Image data-aos="fade-up" src={src} className="custom-cursor" />
            <h3 data-aos="fade-up" className="font-Jakarta font-normal text-[#ccc] text-lg">Case study</h3>
            <h1 data-aos="fade-up" className="font-Grotesk font-medium text-white text-4xl">{title}</h1>
            <h3 data-aos="fade-up" className="font-Jakarta font-normal text-[#ccc] text-lg">{description}</h3>
        </div>
    )
}

export default EachWork;
