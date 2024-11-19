import Image from "next/image"
export const Footer = () => {
    return <div className="flex flex-col gap-4 my-3 backdrop-blur-lg py-10">
        <div className="flex mx-16 justify-between">
            <div className="flex items-center gap-4">
                <p className="text-xl" >Join Us:</p>
                <div className="flex gap-2">
                    <div>
                        {/* Instagram */}
                        <Image src="/insta.svg" width="50" height="50" alt="" />
                    </div>
                    <div>
                        {/* X */}
                        <Image src="/X.svg" width="50" height="50" alt="" />
                    </div>
                    <div>
                        {/* Github */}
                        <Image src="/github.svg" width="50" height="50" alt="" />
                    </div>
                    <div>
                        {/* LinkedIn */}
                        <Image src="/linkedin.svg" width="50" height="50" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div>
                    Contact us:
                </div>
                <div>
                    <p>codingclub@lnct.ac.in</p>
                    <p>techvillalnct@gmail.com</p>
                </div>

            </div>
        </div>
        <div className="text-center text-x5">
            Copyrights 2024 by <span className="text-semibold" >TECHVILLA LNCT</span>. All rights reserved.
        </div>
    </div>
}