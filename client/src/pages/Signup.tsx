import Qoute from "@/components/component/Quote";

import { Input } from "@/components/ui/input";

export default function Signup() {

    return (
        <div className="grid grid-cols-2 font-inter">
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-5xl mb-2">Create an account</h1>
                <h2 className="text-slate-600 text-xl mb-8">Already have an account <span className="underline">Login</span></h2>
                <div className="w-1/2 space-y-6">
                    <div className="space-y-2">
                        <label>Name</label>
                        <Input
                            name=""
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                    <div className="space-y-2">
                        <label>Email</label>
                        <Input
                            name=""
                            type="text"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="space-y-2">
                        <label>Username</label>
                        <Input
                            name=""
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="space-y-2">
                        <label>Password</label>
                        <Input
                            name=""
                            type="text"
                            placeholder="Password"
                        />
                    </div>
                    <button className="text-white bg-black/80 w-full rounded-md py-3 mt-6">
                        Sign up
                    </button>
                </div>
            </div>
            <Qoute />
        </div >
    )
}