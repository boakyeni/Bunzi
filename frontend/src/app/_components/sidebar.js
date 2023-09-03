"use client"
import Link from "next/link"
const Sidebar = () => {
    const goto = (section) => {
        if (typeof window !== "undefined") {
            document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <aside className="relative self-start h-screen sticky top-0 bg-white col-span-1 max-lg:hidden">
            <div className="flex flex-col h-screen fixed top-3 place-items-center w-1/5 justify-around">
                <h1 className=" text-3xl text-center px-[1rem]">Bunzi Cloud</h1>
                <div className="flex flex-col">
                    <button onClick={() => goto("first-section")}>
                        Click
                    </button>
                    <button onClick={() => goto("second-section")}>
                        Click
                    </button>
                    <button onClick={() => goto("second-section")}>
                        Click
                    </button>
                    <button onClick={() => goto("second-section")}>
                        Click
                    </button>
                    <button onClick={() => goto("second-section")}>
                        Click
                    </button>
                </div>
                <div>Logo</div>

            </div>
        </aside>
    )
}

export default Sidebar