import appLogo from "@/assets/lightMode.png";
// import { Bell, Ellipsis } from "lucide-react";
import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";
import { CirclePlus, Search } from "lucide-react";

export default function Appbar() {
    return (
        <div className="border-b flex justify-between px-30 font-inter">
            <div className="flex justify-center items-center gap-4 cursor-pointer">
                <Link to={"/blogs"}>
                    <img src={appLogo} alt="logo" className="w-[60px]" />
                </Link>
                <div className="flex items-center text-b">
                    <div className="relative">
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-slate-500" />
                        <input
                            type="text"
                            className="rounded-3xl p-2 pl-10 text-slate-500"
                            placeholder="Search"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-6">
                <Link to={"/publish"}>
                    <button className="flex items-center">
                        <CirclePlus size={30} className="text-slate-500" />
                    </button>
                </Link>
                <Avatar name="Karan" size={8}/>
            </div>
        </div>
    )
}


{/* <button className="bg-green-600 rounded-4xl px-5 py-1.5 text-white">
    Publish
</button>
<Ellipsis className="text-slate-600" />
<Bell className="text-slate-600" /> */}