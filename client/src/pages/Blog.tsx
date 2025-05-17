import { useBlog } from "@/hooks"
import { useParams } from "react-router-dom";
import BlogPage from "@/components/component/BlogPage";
import Appbar from "@/components/component/Appbar";

export default function Blog() {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });

    if (loading) {
        return <div>
            <BlogPageSkeleton/>
        </div>
    }

    return (
        <div>
            {blog ? <BlogPage blog={blog} /> : <div>Blog not found</div>}
        </div>
    )
}


function BlogPageSkeleton() {
    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-30 w-full mt-10 max-h-xl font-inter gap-10 pt-10">
                    <div className="col-span-8">
                        <div className="h-16 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                        <div className="h-5 bg-gray-200 rounded w-1/4 mt-3 animate-pulse"></div>
                        <div className="space-y-3 mt-5">
                            <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-5 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                        <div className="flex w-full mt-2">
                            <div className="flex flex-col justify-center pr-4">
                                <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
                            </div>
                            <div className="flex-1">
                                <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4 mt-1 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}