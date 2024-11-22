import { Appbar } from "@/Components/Appbar";
import { Footer } from "@/Components/Footer";
import { Roadmaps } from "@/Components/Roadmaps";
import { roadMapsdetails } from "@/data/data";

export default function Resources() {
    return (
        <div className="min-h-screen bg-cover bg-center text-white"
            style={{ backgroundImage: "url('/techvilla-bg.png')" }}>
            <div className="mb-10">
                <Appbar />
            </div>
            <div>
                <div>
                    <h1 className="text-center text-5xl font-extralight">Resources</h1>
                    <div className="space-y-12 flex flex-col items-center gap-4">
                        <h1 className="mt-10 text-center text-3xl">Enter To The Villa of Tech !</h1>
                        <div className="grid grid-cols-3 gap-8">
                            {roadMapsdetails.map((data) => (
                                <Roadmaps img={data.img} title={data.title} desc={data.desc} link={data.link} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}
