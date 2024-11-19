import { Appbar } from "@/Components/Appbar";
import { Card } from "@/Components/Card";
import { Button } from "@/Components/ui/Button";
import Image from "next/image"
export default function Home() {
  return (
    <div className=" h-screen bg-cover bg-center" style={{ backgroundImage: "url('/techvilla-bg.png')" }}>
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
            <Button text="Join Us" />
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
      </div>

    </div>
  );
}

