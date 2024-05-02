import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useThemeContext } from "../../hooks/useThemeContext";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const {isDarkMode, toggleMode} = useThemeContext()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 120) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const backdropClass = scrolled ? 'bg-opacity-80 dark:bg-opacity-70 backdrop-blur-sm' : ''

    return (
        <nav className={`flex items-center justify-between border-b dark:border-gray-800 p-2 h-[80px] fixed top-0 w-full bg-white ${backdropClass} dark:bg-black`}>
            <Link to={'/'} className="g-text font-extrabold text-2xl">JS Practice</Link>
            <div className="flex items-center justify-between gap-2">
                <div>
                    <div onClick={toggleMode} className="ghost-btn">
                        {isDarkMode ? <MoonIcon className="h-6 w-6 text-black dark:text-white" />: <SunIcon className="h-6 w-6 text-black dark:text-white" />}
                    </div>
                </div>
                <button className="btn">Add Question</button>
            </div>
        </nav>
    )
}
