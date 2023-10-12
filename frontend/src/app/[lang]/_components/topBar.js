"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Drawer } from "./Drawer"
import { RxHamburgerMenu } from "react-icons/rx"
import { OpenMenu, CloseMenu } from "@/redux/menuReducer"
import { useSelector, useDispatch } from 'react-redux'
import NavButton from "./navButton"

const TopBar = () => {

    const dispatch = useDispatch()
    const isMenuOpen = useSelector(({ menuOpen }) => {
        return menuOpen
    })

    const toggleMenuClosed = () => {
        dispatch(CloseMenu())
    }

    const goto = (section) => {
        if (typeof window !== "undefined") {
            document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
        }
    }
    const closeMenuAndGoTo = (section) => {
        toggleMenuClosed()
        goto(section)
    }


    return (
        <motion.header>
            <aside className="flex flex-row absolute sticky top-0 right-0 bg-white lg:w-5/12  lg:float-right lg:rounded-bl-3xl lg:rounded-tl-3xl  justify-between z-10 shadow-2xl text-sm pl-6">
                <button className="lg:hidden" onClick={() => dispatch(OpenMenu())}>
                    <RxHamburgerMenu className="shrink-0 ml-6 lg:ml-16 scale-[1.25]" />
                    {/* <RxMagnifyingGlass className="shrink-0 hidden xl:inline  mb-6 ml-6 lg:ml-16" /> */}
                </button>
                <div className="py-3 lg:hidden">Logo</div>
                <div className=" py-3">English</div>
                <Link href='/' className="py-3">Docs</Link>
                <Link href='/' className=" py-3">Login</Link>
                <Link href='/' className="py-3 px-8 rounded-l-3xl bg-blue-400 text-white">Start free</Link>
            </aside>
            <div className="lg:hidden">
                <Drawer open={isMenuOpen} onClose={() => dispatch(CloseMenu())}>
                    <div className='flex flex-col mt-10  text-md text-zinc-800 mx-8'>
                        <Link href="/" className=" py-3 hover:text-zinc-400 border-b " onClick={toggleMenuClosed}>HOME</Link>
                        <Link href="/" className="py-3 hover:text-zinc-400 border-b" onClick={toggleMenuClosed}>COLLECTIONS</Link>
                        <Link href="/" scroll={false} className="text-left py-3 hover:text-zinc-400 border-b" onClick={() => closeMenuAndGoTo("second-section")} onTouchEnd={() => closeMenuAndGoTo("second-section")}>
                            Second Section
                        </Link>
                        <Link href="/" className="py-3 hover:text-zinc-400 border-b " onClick={toggleMenuClosed}>HAIR CARE</Link>
                        <Link href="/" className="py-3 hover:text-zinc-400 border-b" onClick={toggleMenuClosed}>POLICIES</Link>
                        <Link href="/" className="py-3 hover:text-zinc-400 border-b " onClick={toggleMenuClosed}>FAQs</Link>
                    </div>
                </Drawer>
            </div>
        </motion.header>
    )
}

export default TopBar