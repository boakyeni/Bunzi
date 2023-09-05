import Link from "next/link"
const DashLink = ({ text }) => {
    
    return (
    <Link href='/' className="hover:bg-sky-100 w-full text-right transition-colors duration-1000 py-2">
        {text}
    </Link>
    )
}

export default DashLink