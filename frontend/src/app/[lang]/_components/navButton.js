import Link from 'next/link'
const NavButton = ({ text, section }) => {
    const goto = (section) => {
        if (typeof window !== "undefined") {
            document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
            if (section == "first-section") {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }
    return (
        <Link href="/" scroll={false} className="hover:bg-sky-100 w-full text-right transition-colors duration-1000 py-2 pr-3" onClick={() => goto(section)}>
            {text}
        </Link>
    )
}

export default NavButton