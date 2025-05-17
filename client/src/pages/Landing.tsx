import Footer from "@/components/component/Footer";
import Navbar from "@/components/component/Navbar";
import assetImg from '@/assets/medium.jpg'
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="bg-zinc-50 overflow-clip">
            <Navbar />
            <div className="h-screen font-inter flex items-center relative">
                <div className="">
                    <div className="absolute -right-55 md:-right-70 lg:-right-20 top-35">
                        <img src={assetImg} alt="asset" className="h-120 md:h-190" />
                    </div>
                    <div className="flex flex-col gap-5 mx-[30px] md:mx-[80px] lg:mx-[300px]">
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-medium font-inter tracking-tighter" >Human <br /> stories & ideas</h2>
                        <h4 className="font-medium md:text-xl lg:text-3xl">A place to read, write, and deepen your understanding</h4>
                        <button onClick={() => navigate("/signin")} className=" cursor-pointer bg-black text-white px-5 py-2 rounded-4xl w-[150px] md:w-[190px] mt-6 shadow-2xl">Start reading</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}