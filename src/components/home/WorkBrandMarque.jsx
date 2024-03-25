import Image from "next/image";

import "./Marquee.scss"
import { brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, } from "../../../public/assetes/img";

const WorkBrandMarque = () => {
    return (
        <div className="relative">
            <div className="absolute left-0 bg-gradient-to-r from-[#1B1219]/100 to-[#1B1219]/10 z-20 h-full w-1/6"></div>
            <div className="">
                <div className="marquee">
                    <div className="marquee_group_work_brand">
                        <Image src={brand1} alt="brand" />
                        <Image src={brand2} alt="brand" />
                        <Image src={brand3} alt="brand" />
                        <Image src={brand4} alt="brand" />
                        <Image src={brand5} alt="brand" />
                        <Image src={brand6} alt="brand" />
                        <Image src={brand7} alt="brand" />
                        <Image src={brand8} alt="brand" />
                    </div>
                    <div aria-hidden="true" className="marquee_group_work_brand">
                        <Image src={brand1} alt="brand" />
                        <Image src={brand2} alt="brand" />
                        <Image src={brand3} alt="brand" />
                        <Image src={brand4} alt="brand" />
                        <Image src={brand5} alt="brand" />
                        <Image src={brand6} alt="brand" />
                        <Image src={brand7} alt="brand" />
                        <Image src={brand8} alt="brand" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkBrandMarque
