import Qoute from "@/components/component/Quote";
import { Input } from "@/components/ui/input";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import type { SignInType } from "@/schema";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/config";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner"


export default function Signin() {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignInType>({
        email: "",
        password: ""
    });

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        await respondFunction(postInputs);
    }

    async function respondFunction(postInputs: SignInType) {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs);
            console.log("API Response:", response.data);

            const jwt = response.data?.token || response.data?.jwt;
            if (!jwt) {
                console.error("Token not found in response:", response.data);
                throw new Error("No token received from server");
            }

            localStorage.setItem("token", jwt);
            toast.success("Login successful!");
            navigate("/blogs");
        } catch (error) {
            console.error("Login error:", error);
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.message || error.message;
                toast.error(`Login failed: ${errorMessage}`);
            } else {
                toast.error(`Login failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
            }
        }
    }


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 font-inter py-40 md:py-30 lg:py-0 bg-white">
            <div className="flex flex-col justify-center items-center px-4">
                <h1 className="font-bold text-3xl md:text-5xl mb-2">Login</h1>
                <h2 className="text-slate-600 text-base md:text-xl mb-8 text-center">Don't have an account? <Link to="/signup">
                    <span className="underline cursor-pointer">Sign Up</span></Link></h2>
                <form onSubmit={handleSubmit} className="w-full md:w-3/4 lg:w-1/2 space-y-4 md:space-y-6">
                    <div className="flex flex-col gap-2">
                        <label>Email</label>
                        <Input
                            name="email"
                            type="text"
                            placeholder="Enter your email"
                            onChange={(e) => setPostInputs(c => ({ ...c, email: e.target.value }))}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Password</label>
                        <Input
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPostInputs(c => ({ ...c, password: e.target.value }))}
                        />
                    </div>
                    <button className="text-white bg-black/80 w-full rounded-md py-2 md:py-3 mt-4 md:mt-6 cursor-pointer">
                        Login
                    </button>
                    <div className="flex items-center gap-2">
                        <button className="flex items-center justify-center gap-2 text-white bg-black/80 w-1/2 rounded-md py-2 md:py-3 cursor-pointer">
                            <FaGithub />Github
                        </button>
                        <button className="flex items-center justify-center gap-2 text-white bg-black/80 w-1/2 rounded-md py-2 md:py-3 cursor-pointer">
                            <FaGoogle />Google
                        </button>
                    </div>
                </form>
                <div className="absolute top-5 left-5">
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center justify-center gap-2 p-1.5 md:p-2 shadow-sm rounded-md bg-white hover:bg-gray-50 transition-colors duration-200 border border-gray-200">
                        <ArrowLeft size={24} className="rounded-full bg-gray-800 text-white p-1 hover:bg-gray-900 transition-colors duration-200 shadow-2xl md:size-[30px]" />
                        <span className="text-sm md:text-base text-gray-800 font-medium pr-1 md:pr-2">Back to Home Page</span>
                    </button>
                </div>
            </div>
            <div className="hidden lg:block">
                <Qoute />
            </div>
        </div>
    )
}






// import Quote from "@/components/component/Quote";
// import Auth from "@/components/component/Auth";

// export default function Signin() {
//     return <div className="grid grid-cols-1 md:grid-cols-2">
//         <div>
//             <Auth type="signin" />
//         </div>
//         <div className="hidden lg:block">
//             <Quote />
//         </div>
//     </div>
// }

