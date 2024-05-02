import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

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

    const backdropClass = scrolled ? 'bg-opacity-80 backdrop-blur-sm' : ''

    return (
        <nav className={`flex items-center justify-between border-b p-2 h-[80px] fixed top-0 w-full bg-white ${backdropClass}`}>
            <Link to={'/'} className="g-text font-extrabold text-2xl">JS Practice</Link>
            <div className="flex items-center justify-between gap-2">
                <div>
                    <div onClick={() => setIsDarkMode(!isDarkMode)} className="ghost-btn">
                        {isDarkMode ? <MoonIcon className="h-6 w-6 text-black" />: <SunIcon className="h-6 w-6 text-black" />}
                    </div>
                </div>
                <button className="btn">Add Question</button>
            </div>
        </nav>
    )
}
