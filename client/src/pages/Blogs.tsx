import Appbar from "@/components/component/Appbar";
import BlogCard from "@/components/component/BlogCard";
import { useBlogs } from "@/hooks";

export default function Blogs() {
    const { loading, blogs } = useBlogs();

    console.log("Loading:", loading);
    console.log("Blogs:", blogs);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-slate-500"></div>
        </div>
    }

    return (
        <div>
            <Appbar />
            <div className="flex justify-center mt-2">
                <div className="">
                    {blogs.length === 0 && !loading && (
                        <div className="text-center py-8">No blogs found</div>
                    )}
                    {blogs.map((blog, key) => (
                        <BlogCard key={key}
                            id={blog.id}
                            authorName={blog.author.name}
                            title={blog.title}
                            content={blog.content}
                            publishedDate={"10 Jan, 2023"}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

