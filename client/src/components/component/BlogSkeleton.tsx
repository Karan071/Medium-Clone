export default function BlogSkeleton() {
    return (
        <div>
            <div className="animate-pulse">
                <div className="flex">
                    <div className="flex justify-center items-center gap-1">
                        <div>
                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="pl-2 w-24 h-4 bg-gray-200 rounded"></div>
                        <div className="pl-2 text-slate-400">
                            &bull;
                        </div>
                        <div className="pl-2 w-20 h-4 bg-gray-200 rounded"></div>
                    </div>
                </div>
                <div className="font-bold text-3xl mt-4">
                    <div className="w-64 h-8 bg-gray-200 rounded"></div>
                </div>
                <div className="font-normal text-2xl text-slate-500 mt-3">
                    <div className="w-full h-6 bg-gray-200 rounded"></div>
                    <div className="w-3/4 h-6 bg-gray-200 rounded mt-2"></div>
                </div>
                <div className="mt-4 text-slate-500" >
                    <div className="w-32 h-4 bg-gray-200 rounded"></div>
                </div>
            </div>
        </div>
    );
}