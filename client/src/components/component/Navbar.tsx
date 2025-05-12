import Medium from "../../assets/Medium.svg"

const navItems = [
    { item: "Our stories" },
    { item: "Membership" },
    { item: "Write" },
    { item: "Sign in" }
];

export default function Navbar() {
    return (
        <div className="w-full absolute top-0 flex justify-between items-center border-b-1 border-black py-2">
            <div className="flex mx-[20px] sm:mx-[50px] md:mx-[80px] lg:mx-[300px] py-2 sm:py-2 md:py-3 font-inter w-full justify-between items-center">
                <div>
                    <img src={Medium} alt="logo" className="w-20 md:w-30 lg:w-40" />
                </div>
                <div className="flex sm:text-sm lg:text-base items-center gap-3 sm:gap-5">
                    <nav className="hidden md:flex gap-3 sm:gap-5">
                            {navItems.map((i, key) => (
                                <ul key={key} className="flex items-center">{i.item}</ul>
                            ))}
                    </nav>
                    <button className="bg-black text-white rounded-4xl py-1 px-3 sm:py-2 ">Get Started</button>
                </div>
            </div>
        </div>
    )
}