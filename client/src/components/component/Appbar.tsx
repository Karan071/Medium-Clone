import appLogo from "@/assets/lightMode.png";
import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";
import { CirclePlus, Search } from "lucide-react";
import { useAvatarName } from "@/hooks";

export default function Appbar() {
    const { name } = useAvatarName();
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
                <Avatar name={name} size={8} />
            </div>
        </div>
    )
}

