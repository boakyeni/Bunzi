"use client"
import DashLink from "./dashLink"
const DashSidebar = () => {


    return (
        <aside className="relative self-start h-screen sticky top-0 bg-white col-span-1 max-lg:hidden ">
            <div className="flex flex-col h-screen fixed top-3 w-1/5">
                <h1 className="top-0 text-xl text-center px-[1rem] bg-white py-[1rem]">Dashboard</h1>
                <div className="flex flex-col overflow-y-scroll overflow-y-hidden">
                    <DashLink text={"File Storage"}
                    />
                    <DashLink text={"SQL Server"} />
                    <DashLink text={"Compute Instance"} />
                    <DashLink text={"Analytics"}/>

                </div>
                <div className="fixed inset-x-0 bottom-0">Logo</div>

            </div>
        </aside>
    )
}

export default DashSidebar