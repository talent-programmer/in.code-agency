import Image from "next/image";

import "./Marquee.scss"
import { brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, } from "../../../public/assetes/img";

const WorkBrandMarque = () => {
    return (
        <div className="">
            <div className="marquee">
                <div className="marquee_group_work_brand">
                    <Image src={brand1} />
                    <Image src={brand2} />
                    <Image src={brand3} />
                    <Image src={brand4} />
                    <Image src={brand5} />
                    <Image src={brand6} />
                    <Image src={brand7} />
                    <Image src={brand8} />
                </div>
                <div aria-hidden="true" className="marquee_group_work_brand">
                    <Image src={brand1} />
                    <Image src={brand2} />
                    <Image src={brand3} />
                    <Image src={brand4} />
                    <Image src={brand5} />
                    <Image src={brand6} />
                    <Image src={brand7} />
                    <Image src={brand8} />
                </div>
            </div>
        </div>
    )
}

export default WorkBrandMarque
