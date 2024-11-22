"use client"
import { Button2 } from "./ui/Button2";
import Image from "next/image";
import { useRouter } from "next/navigation"
interface Roadmaps {
    img: string,
    title: string,
    desc: string,
    link: string
}

export const Roadmaps = ({ title, desc, img, link }: Roadmaps) => {
    const router = useRouter()
    return (
        <div className="relative w-96 h-96 overflow-hidden rounded-lg p-[1px] backdrop-blur-2xl shadow-2xl ">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
            <div className="relative flex h-full w-full flex-col gap-4 rounded-lg bg-black">
                <Image alt="" src={img} width={500} height={500} className="rounded-b-sm" />
                <p className="font-semibold text-center text-white">{title}</p>
                <div className="p-4">
                    <p className="text-left text-white">{desc}</p>
                    <div className="flex justify-center mt-4">
                        <Button2 onClick={() => {
                            router.push("https://github.com/WeMakeDevs/roadmaps/tree/main/Frontend-Development")
                        }} text="Learn" />
                    </div>
                </div>
            </div>
        </div>
    );
};
