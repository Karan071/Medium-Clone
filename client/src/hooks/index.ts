import { BACKEND_URL } from "@/config";
import axios from "axios";
import { useEffect, useState } from "react"


export interface Blog {
    content: string;
    title: string;
    id: number;
    author: {
        name: string;
    }
}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [blog, setBlog] = useState<Blog | null>(null);

    useEffect(() => {
        setLoading(true); // Begin loading

        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token") || ""
            }
        }).then(response => {
            setBlog(response.data.blog);
            setLoading(false); // Done loading
        }).catch((error) => {
            console.error("Error fetching blog:", error);
            setLoading(false);
        });
    }, [id]);

    return {
        loading,
        blog
    };
};


// // copy of the code
// export function useBlog2({ id }: { id: string }) {
//     const [loading, setLoading] = useState(true);
//     const [blog, setBlog] = useState<Blog>();

//     useEffect(() => {
//         let isMounted = true; 

//         const fetchBlog = async () => {
//             try {
//                 const response = await axios.get(`/api/v1/blog/${id}`, {
//                     headers : {
//                         Authorization : localStorage.getItem("token")
//                     }
//                 });
//                 if (isMounted) {  // Only update state if component is still mounted
//                     setBlog(response.data.blog);
//                     setLoading(false);
//                 }
//             } catch (error) {
//                 if (isMounted) {
//                     setLoading(false);
//                 }
//             }
//         };

//         fetchBlog();

//         return () => {
//             isMounted = false;  // Cleanup function
//         };
//     }, [id]);

//     return { loading, blog };
// }


export const useBlogs = (): { loading: boolean; blogs: any[] } => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            .then(response => {
                setBlogs(response.data.blogs);
                setLoading(false);
            })
    }, [])

    return {
        loading,
        blogs
    }
}