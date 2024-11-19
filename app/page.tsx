import { Appbar } from "@/Components/Appbar";
import { Card } from "@/Components/Card";
import { Footer } from "@/Components/Footer";
import { Button2 } from "@/Components/ui/Button2";
import { coreTeam } from "@/data/coreTeam";
// import { Team } from "@/Components/Team";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel"
import { Team } from "@/Components/Team";
export default function Home() {
  return (
    <div className=" h-full bg-cover bg-center text-white" style={{ backgroundImage: "url('/techvilla-bg.png')" }}>
      <div>
        <Appbar />
      </div>
      <div className="mt-20 flex flex-col gap-5">
        {/* Heading of website */}
        <div className="flex flex-col items-center justify-center gap-2 ">
          <div className="space-y-3">
            <Image src="/techvilla-heading-logo.png" width={662} height={90} alt="" />
            <h2 className="text-center font-semibold">CODE . CREATE . CONTRIBUTE</h2>
          </div>
          <div className="mt-2 space-y-4 flex flex-col items-center">
            <p className="text-center ">Empowering the Next Generation of Developers</p>
            <Button2 text="Join Us" />
          </div>
        </div>
        {/* Heading of website finishes */}

        {/* Vision Mission  */}
        <div className="flex justify-between p-4 px-16">
          <div>
            <Card title="Vision" desc="Our Vision is to empower students with the power of coding and learning in public, that can unlock a world of infinite possibilities, and to alleviate the tech leaders of tommorow." />
          </div>
          <div>
            <Card title="Vision" desc="Our Vision is to empower students with the power of coding and learning in public, that can unlock a world of infinite possibilities, and to alleviate the tech leaders of tommorow." />
          </div>
          <div>
            <Card title="Vision" desc="Our Vision is to empower students with the power of coding and learning in public, that can unlock a world of infinite possibilities, and to alleviate the tech leaders of tommorow." />
          </div>
        </div>
        {/* Vision Mission ends  */}

        {/* Glimpses */}
        <div className="flex flex-col items-center gap-6 my-4">
          <h1 className="text-center text-xl">Glimpses</h1>

          <Carousel className="w-full max-w-7xl rounded-md">
            <CarouselContent className="rounded-md">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 flex justify-center">
                    <Image src="/codebeta-winners.jpg" className="rounded-md" width={1300} height={650} alt="" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        {/* Glimpses end hota hai*/}
      </div>

      {/* CORE TEAM */}
      <div>
        <h1 className="text-center text-xl mb-8 my-5">Meet Our Team</h1>
        <div className="grid grid-cols-5 gap-6">
          {coreTeam.map((data) => (
            <Team TeamProps={data} name={data.name} img={data.img} role={data.role} />
          ))}
        </div>



      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
}

