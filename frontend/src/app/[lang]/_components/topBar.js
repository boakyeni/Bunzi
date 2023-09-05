import Link from "next/link"
const TopBar = () => {
    
    
    return (
        <aside className="flex flex-row absolute sticky top-0 right-0 bg-white w-2/5 py-3 float-right rounded-bl-3xl rounded-tl-3xl justify-around z-10 shadow-xl">
            <div>English</div>
            <Link href='/'>Login</Link>
            <Link href='/' >Sign Up</Link>
        </aside>
    )
}

export default TopBar