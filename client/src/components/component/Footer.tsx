const smallFooterItems = [
    { item: "About" },
    { item: "Help" },
    { item: "Terms" },
    { item: "Privacy" },
];
const fullFooterItems = [
    {item: "Help"},
    {item: "Status"},
    {item: "About"},
    {item: "Careers"},
    {item: "Press"},
    {item: "Blog"},
    {item: "Privacy"},
    {item: "Rules"},
    {item: "Terms"},
    {item: "Text to speech"},
]
export default function Footer() {
    return <div className="flex items-center bg-black text-white md:text-black md:bg-transparent border-t-1 border-black font-inter absolute bottom-0 w-full py-4 ">
        <div className="flex ml-3 gap-4 py-2 w-full">
            <div className="flex md:hidden text-xs w-full">
                <ul className="flex justify-center items-center gap-5 w-full">
                    {smallFooterItems.map((i, key) => (
                        <li key={key}>{i.item}</li>
                    ))}
                </ul>
            </div>
            <div className="hidden md:flex text-md w-full">
                <ul className="flex justify-center items-center gap-5 w-full">
                    {fullFooterItems.map((i, key) => (
                        <li key={key}>{i.item}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
}