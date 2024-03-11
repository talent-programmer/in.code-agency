import Image from "next/image";

import "./Marquee.scss"

const BrandMarque = () => {
    return (
        <div className="bg-white py-1">
            <div className="border border-t-2 border-b-2 border-y-black marquee">
                <div className="marquee_group_brand">
                    <h3 className="font-Grotesk">@Incode 2K24</h3>
                    <h3 className="font-Petit">@Incode 2K24</h3>
                    <h3 className="font-Grotesk">@Incode 2K24</h3>
                    <h3 className="font-Petit">@Incode 2K24</h3>
                    <h3 className="font-Grotesk">@Incode 2K24</h3>
                    <h3 className="font-Petit">@Incode 2K24</h3>
                    <h3 className="font-Grotesk">@Incode 2K24</h3>
                    <h3 className="font-Petit">@Incode 2K24</h3>
                </div>
                <div aria-hidden="true" className="marquee_group_brand">
                    <h3 className="font-Grotesk">@Incode 2K24</h3>
                    <h3 className="font-Petit">@Incode 2K24</h3>
                    <h3 className="font-Grotesk">@Incode 2K24</h3>
                    <h3 className="font-Petit">@Incode 2K24</h3>
                    <h3 className="font-Grotesk">@Incode 2K24</h3>
                    <h3 className="font-Petit">@Incode 2K24</h3>
                    <h3 className="font-Grotesk">@Incode 2K24</h3>
                    <h3 className="font-Petit">@Incode 2K24</h3>
                </div>
            </div>
        </div>
    )
}

export default BrandMarque
