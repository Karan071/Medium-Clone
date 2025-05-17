import { useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { type SignUpType } from "@/schema"
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Auth({ type }: { type: "signup" | "signin" }) {
    const [postInputs, setPostInputs] = useState<SignUpType>({
        name: "",
        username: "",
        email: "",
        password: ""
    })

    function sendRequests() {

    }

    return (
        <div className="h-screen flex justify-center flex-col font-inter ">
            <div className="flex justify-center">
                <div className="max-w-xl w-full">
                    <div className="flex justify-center items-center">
                        <div className="text-5xl font-bold mb-2">
                            {type === "signin" ? "Login" : "Create an Account"}
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className=" text-xl text-slate-400">
                            {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                            <Link to={type === "signin" ? "/signup" : "/signin"} className="underline pl-1">
                                {type === "signin" ? "Sign up" : "Sign in"}
                            </Link>
                        </div>
                    </div>
                    <div className="mt-4 space-y-3">
                        {type === "signup" ? <div>
                            <LabelledInput label="Name" placeholder="Enter the Name" onChange={(e) => {
                                setPostInputs(c => ({
                                    ...c,
                                    name: e.target.value
                                }))
                            }} />
                            <LabelledInput label="Username" placeholder="Enter the Username" onChange={(e) => {
                                setPostInputs(c => ({
                                    ...c,
                                    username: e.target.value
                                }))
                            }} />
                        </div> : null}
                        <LabelledInput label="Email" placeholder="Enter the Email" onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                email: e.target.value
                            }))
                        }} />
                        <LabelledInput label="Password" type={"password"} placeholder="Enter the Password" onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                password: e.target.value
                            }))
                        }} />
                        <button className="text-white bg-black/80 w-full rounded-md py-3 mt-6 cursor-pointer">
                            {type === "signin" ? "Sign In" : "Sign Up"}
                        </button>
                        <div className="flex items-center gap-2 mt-2" >
                            <button className="flex items-center justify-center gap-2 text-white bg-black/80 w-1/2 rounded-md py-3 cursor-pointer">
                                <FaGithub />Github
                            </button>
                            <button className="flex items-center justify-center gap-2 text-white bg-black/80 w-1/2 rounded-md py-3 cursor-pointer">
                                <FaGoogle />Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input type={type || 'text'} onChange={onChange} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>
    );


}