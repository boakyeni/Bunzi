"use client"
import NavButton from "./navButton"
const Sidebar = () => {
    
    
    return (
        <aside className="relative self-start h-screen sticky top-0 bg-[#ffffff] col-span-1 max-lg:hidden rounded-tr-3xl shadow-2xl">
            <div className="flex flex-col h-screen fixed top-3 place-items-end w-1/5 justify-around">
                <h1 className=" fixed top-3 text-2xl text-center px-[1rem] py-[3rem]">Bunzi Cloud</h1>
                <div className="fixed top-48 flex flex-col w-1/5 place-items-end ">
                    <NavButton text={"Overview"} section={"first-section"} 
                    />
                    <NavButton text={"Services"} section={"second-section"}/>
                    <NavButton text={"Documentation"} section={"second-section"}/>
                    <NavButton text={"Pricing"} section={"second-section"}/>
                    <NavButton text={"Login"} section={"second-section"}/>
                </div>
                <div className="fixed inset-x-0 bottom-0">Logo</div>

            </div>
        </aside>
    )
}

export default Sidebar