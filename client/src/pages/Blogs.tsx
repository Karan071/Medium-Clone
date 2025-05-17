import Appbar from "@/components/component/Appbar";
import BlogCard from "@/components/component/BlogCard";
import BlogSkeleton from "@/components/component/BlogSkeleton";
import { useBlogs } from "@/hooks";


export default function Blogs() {
    const { loading, blogs } = useBlogs();

    console.log("Loading:", loading);
    console.log("Blogs:", blogs);

    if (loading) {
        return (
            <div>
                <Appbar />
                <div className="flex flex-col justify-center items-center ">
                    <div className="p-5 font-inter w-screen max-w-screen-md mt-2 space-y-4">
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                    </div>
                </div>
            </div>
        )
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

