import type { Blog } from "@/hooks";
import Appbar from "./Appbar";
import { Avatar } from "./BlogCard";

export default function BlogPage({ blog }: { blog: Blog }) {
    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-30 w-full mt-10 max-h-xl font-inter gap-10 pt-10">
                    <div className="col-span-8 ">
                        <div className="text-6xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 pt-3">
                            Post on {"2nd Dec, 2024"}
                        </div>
                        <div className="pt-5 text-xl font-medium ">
                            {blog.content}
                        </div>
                    </div>
                    <div className="col-span-4 font-semibold leading-tight">
                        <div>
                            <h2 className="text-slate-600 text-lg">Author</h2>
                            <div className="flex w-full mt-2">
                                <div className="flex flex-col justify-center pr-4">
                                    <Avatar size={10} name={blog.author.name || "Anonymous"} />
                                </div>
                                <div>
                                    <div className="text-xl font-bold ">
                                        {blog.author.name || "Anonymous"}
                                    </div>
                                    <div className="pt-1 text-slate-500 font-extralight">
                                        Random Catch phrase by the user
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

