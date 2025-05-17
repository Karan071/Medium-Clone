import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

interface BlogCardProps {
    id: string;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export default function BlogCard({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) {
    return <Link to={`/blog/${id}`}>
        <div className="p-5 font-inter w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <div className="flex justify-center items-center gap-1">
                    <div>
                        <Avatar name={authorName} size={8} />
                    </div>
                    <div className="pl-2 ">
                        {authorName}
                    </div>
                    <div className="pl-2 text-slate-400">
                        &bull;
                    </div>
                    <div className="pl-2 font-extralight text-slate-400">
                        {publishedDate}
                    </div>
                </div>
            </div>
            <div className="font-bold text-3xl mt-4">
                {title}
            </div>
            <div className="font-normal text-xl text-slate-500 mt-3">
                {/* todo : add a check here to check content > 100 then add "..." */}
                {content.slice(0, 150) + "..."}
            </div>
            <div className="mt-4 text-slate-500" >
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>
            <Separator className="mt-4" />
        </div>
    </Link>
}

export function Avatar({ name, size = 6 }: { name: string, size?: number }) {
    const sizeClasses = {
        4: 'w-4 h-4 text-xs',
        6: 'w-6 h-6 text-sm',
        8: 'w-8 h-8 text-base',
        10: 'w-10 h-10 text-2xl'
    };

    return (
        <div className={`relative inline-flex items-center justify-center ${sizeClasses[size as keyof typeof sizeClasses] || sizeClasses[6]} overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600`}>
            <span className="text-gray-900 dark:text-gray-300 font-extralight">
                {name[0]}
            </span>
        </div>
    )
}
