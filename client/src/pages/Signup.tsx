import Qoute from "@/components/component/Quote";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import axios from "axios"
import { BACKEND_URL } from "@/config";
import { useState } from "react";
import type { SignUpType } from "@/schema";
import { toast } from 'sonner'
import { ArrowLeft } from "lucide-react";


export default function Signup() {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignUpType>({
        name: "",
        username: "",
        email: "",
        password:"",
    });

    async function handleSubmit (e: React.FormEvent) {
        e.preventDefault();
        await respondData(postInputs)
    }

    async function respondData (postInputs: SignUpType) {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs);
            console.log("API Response:", response.data);
            if (!response.data.token) {
                throw new Error("No token received from server");
            }
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            console.log("Token saved to localStorage:", jwt);
            toast.success("User Successfully Registered");
            navigate("/signin");
        } catch (error) {
            console.error("Signup Error:", error);
            toast.error(`Request failed: ${error instanceof Error ? error.message : "Unknown error"}`);
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 font-inter py-30 lg:py-2 bg-white">
            <div className="flex flex-col justify-center items-center px-4">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-2 text-center">Create an account</h1>
                <h2 className="text-slate-600 text-lg md:text-xl mb-8 text-center">Already have an account? <Link to="/signin"><span className="underline cursor-pointer">Log In</span></Link></h2>
                <form onSubmit={handleSubmit} className="w-full md:w-3/4 lg:w-1/2 space-y-4 md:space-y-6">
                    <div className="flex flex-col gap-1 md:gap-2">
                        <label className="mt-1 md:mt-2">Name</label>
                        <Input
                            name="name"
                            type="text"
                            placeholder="Name"
                            onChange={(e) => setPostInputs(c => ({...c, name: e.target.value}))}
                            />
                    </div>
                    <div className="flex flex-col gap-1 md:gap-2">
                        <label>Email</label>
                        <Input
                            name="email"
                            type="text"
                            placeholder="Enter your email"
                            onChange={(e) => setPostInputs(c => ({...c, email: e.target.value}))}
                            />
                    </div>
                    <div className="flex flex-col gap-1 md:gap-2">
                        <label>Username</label>
                        <Input
                            name="username"
                            type="text"
                            placeholder="Username"
                            onChange={(e) => setPostInputs(c => ({...c, username: e.target.value}))}
                            />
                    </div>
                    <div className="flex flex-col gap-1 md:gap-2">
                        <label>Password</label>
                        <Input
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPostInputs(c => ({...c, password: e.target.value}))}
                            />
                    </div>
                    <button className="text-white bg-black/80 w-full rounded-md py-2 md:py-3 mt-4 md:mt-6 cursor-pointer">
                        Sign up
                    </button>
                    <div className="flex items-center gap-2">
                        <button className="flex items-center justify-center gap-2 text-white bg-black/80 w-1/2 rounded-md py-2 md:py-3 cursor-pointer">
                            <FaGithub />Github
                        </button>
                        <button className="flex items-center justify-center gap-2 text-white bg-black/80 w-1/2 rounded-md py-2 md:py-3 cursor-pointer">
                            <FaGoogle /> Google
                        </button>
                    </div>
                </form>
                <div className="absolute top-5 left-5">
                    <button
                    onClick={() => navigate("/")}
                    className="flex items-center justify-center gap-2 p-2 shadow-sm rounded-md bg-white hover:bg-gray-50 transition-colors duration-200 border border-gray-200">
                        <ArrowLeft size={30} className="rounded-full bg-gray-800 text-white p-1.5 hover:bg-gray-900 transition-colors duration-200"/>
                        <span className="text-gray-800 font-medium pr-2">Back to Home Page</span>
                    </button>
                </div>
            </div>
            <div className="hidden lg:block">
                <Qoute />
            </div>
        </div>
    )
}


    // import Auth from "@/components/component/Auth";
    // import Quote from "@/components/component/Quote";
    
    // export default function Signup(){
    //     return <div className="grid grid-cols-1 lg:grid-cols-2">
    //         <div>
    //             <Auth type="signup"/>
    //         </div>
    //         <div className="hidden lg:block">
    //             <Quote/>
    //         </div>
    //     </div>
    // }
    
