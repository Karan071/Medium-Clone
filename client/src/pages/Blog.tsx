import { useBlog } from "@/hooks"
import { useParams } from "react-router-dom";
import BlogPage from "@/components/component/BlogPage";

export default function Blog() {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });

    if (loading) {
        return <div>
            loading..
        </div>
    }

    return (
        <div>
            {blog ? <BlogPage blog={blog} /> : <div>Blog not found</div>}
        </div>
    )
}


