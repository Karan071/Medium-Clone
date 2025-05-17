import Appbar from "@/components/component/Appbar";
import { BACKEND_URL } from "@/config";
import axios from "axios";
import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Publish() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    async function OnSubmitFunction(e: React.FormEvent) {
        e.preventDefault();
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
            title: title,
            content: description
        },{
            headers : {
                Authorization : localStorage.getItem("token")
            }
        });
        toast("Blog is successfully Published")
        navigate(`/blog/${response.data.id}`)
    }

    return <div>
        <Appbar />
        <div className="flex flex-col justify-center items-center w-full pt-6">
            <form onSubmit={OnSubmitFunction} className="mb-6 max-w-screen-2xl w-full">
                <input onChange={(e) => setTitle(e.target.value)} type="text" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-white text-base focus:ring-blue-500 focus:border-blue-500" placeholder="Title" />
                <div className="w-full pt-4">
                    <TestEditor onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Publish post
                </button>
            </form>
        </div>
    </div>
}

function TestEditor({onChange}:{onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return <div>
        <form>
            <div className="w-full mb-4 border border-gray-300 rounded-lg bg-gray-50">
                <div className="px-4 py-2 bg-white rounded-b-lg">
                    <textarea onChange={onChange} rows={8} className="block outline-none w-full px-0 p-4 text-base text-gray-900 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Content" required ></textarea>
                </div>
            </div>
        </form>

    </div>
}