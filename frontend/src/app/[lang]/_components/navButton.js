
const NavButton = ({ text, section }) => {
    const goto = (section) => {
        if (typeof window !== "undefined") {
            document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
    <button className="hover:bg-sky-100 w-full text-right transition-colors duration-1000 py-2 pr-3" onClick={() => goto(section)}>
        {text}
    </button>
    )
}

export default NavButton