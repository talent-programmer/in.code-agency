import Image from "next/image";
import "./EachWork.scss"

const EachWork = (props) => {

    const {src, title, description} = props;

    return (
        <div className="flex flex-col gap-5">
            <Image data-aos="fade-up" src={src} alt="each-work-image" className="custom-cursor" />
            <h3 data-aos="fade-up" className="font-Jakarta font-normal text-[#ccc] text-base lg:text-lg">Case study</h3>
            <h1 data-aos="fade-up" className="font-Grotesk font-medium text-white text-xl leading-7 lg:leading-8 lg:text-[32px]">{title}</h1>
            <h3 data-aos="fade-up" className="font-Jakarta font-normal text-[#ccc] text-base  lg:text-xl">{description}</h3>
        </div>
    )
}

export default EachWork;
