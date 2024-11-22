import Image from "next/image"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
export const UpcomingEvent = () => {
    const router = useRouter()
    return <div className="w-full max-w-lg flex flex-col  gap-4 border p-6 rounded-md backdrop-blur-lg">

        <Image src={"/orientation.jpeg"} className="rounded-md w-full" width={250} height={100} alt=""  ></Image>
        <h1 className="text-center font-semibold ">Techvilla Orientation 2024-25</h1>
        <p className="font-extralight" >Join us for the session Packed Orientation session for the Offical Coding Club of Lnct</p>
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
                <Image src={"/Location.svg"} alt="" width={28} height={28} ></Image>
                <p>LNCTE Auditorium</p>
            </div>
            <div className="flex gap-2">
                <Image src={"/date.svg"} alt="" width={28} height={28} ></Image>
                <p>23rd october</p>
            </div>
        </div>
        <Button onClick={()=>{
            router.push("https://lu.ma/f6pqfzl8")
        }}
        >Register Now</Button>
    </div>

}