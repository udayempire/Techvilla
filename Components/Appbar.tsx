import Link from  "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
export const Appbar=()=>{
    return <div className="flex justify-between text-xl px-5 items-center backdrop-blur-sm">
        <div>
            <Image src={"/Logo.svg"} width={50} height={10} alt="" ></Image>
        </div>
        <div className="flex gap-6">
            <Link href="/" >Home</Link>
            <Link href={"/resources"}>Resources</Link>
            <Link href={"/ourTeam"} >Our Team</Link>
            <Link href={"/events"}>Events</Link>
        </div>
        <Button variant={"outline"} >Login</Button>
    </div>
}