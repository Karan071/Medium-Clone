import Footer from "@/components/component/Footer";
import Navbar from "@/components/component/Navbar";
import assetImg from '@/assets/medium.jpg'
export default function LandingPage() {
    return (
        <div className="bg-amber-50 overflow-clip">
            <Navbar />
            <div className="h-screen font-inter flex items-center relative">
                <div className="">
                    <div className="hidden md:block md:absolute md:-right-70 lg:-right-20 top-25">
                        <img src={assetImg} alt="asset" className="h-180" />
                    </div>
                    <div className="flex flex-col gap-5 md:mx-[80px] lg:mx-[300px]">
                        <h2 className="md:text-8xl lg:text-9xl font-medium font-shantell" >Human <br /> stories & ideas</h2>
                        <h4 className="font-medium md:text-xl lg:text-3xl">A place to read, write, and deepen your understanding</h4>
                        <button className="bg-black text-white px-4 py-2 rounded-4xl w-[170px]">Start reading</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}