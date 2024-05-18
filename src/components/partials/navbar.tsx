import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon, Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { useThemeContext } from "../../hooks/useThemeContext";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isShowMenu, setIsShowMenu] = useState(false);
    const [isShowIconAnimaition, setIsShowIconAnimation] = useState(false);
    const { isDarkMode, toggleMode } = useThemeContext()

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

    useEffect(() => {
        const interval = setInterval(() => {
            setIsShowIconAnimation(true);
            setTimeout(() => {
                setIsShowIconAnimation(false);
            }, 2000);
        }, 5000);
    
        return () => clearInterval(interval);
    }, []);
    

    const backdropClass = scrolled ? 'bg-opacity-80 dark:bg-opacity-60 backdrop-blur-sm' : ''

    return (
        <motion.nav
        initial={{y:-100}}
        animate={{y:0}}
        transition={{
            duration: 0.1
        }}
         
         className={`flex flex-col items-center justify-between z-10 border-b dark:border-gray-800 p-4 min-h-[80px] fixed top-0 w-full bg-white ${backdropClass} dark:bg-black`}>
            <div className="flex w-full items-center justify-between">
                <Link to={'/'} className="g-text font-extrabold text-2xl select-none">JS Practice</Link>
                <div className="flex items-center justify-between gap-2">
                    <div>
                        <div onClick={toggleMode} className="ghost-btn">
                            {isDarkMode ? <MoonIcon className={`h-6 w-6 text-black dark:text-white ${isShowIconAnimaition? 'animate-pulse':''}`} /> : <SunIcon className={`h-6 w-6 text-black dark:text-white ${isShowIconAnimaition? 'animate-spin':''}`} />}
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-2">
                        <a href="https://github.com/ashsajal1/js-practice-app/" target="_blink" className="btn">Add Question</a>
                        <Link to='/quiz' className="btn">Play Quiz</Link>
                    </div>

                    <Bars3CenterLeftIcon onClick={() => setIsShowMenu(!isShowMenu)} className={`h-6 w-6 dark:text-white text-black md:hidden ${isShowMenu ? 'hidden' : ''}`} />

                    <XMarkIcon onClick={() => setIsShowMenu(false)} className={`h-6 w-6 dark:text-white text-black md:hidden ${isShowMenu ? '' : 'hidden'}`} />

                </div>

            </div>

            <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                transition={{
                    duration: 1000,
                    type: 'tween'
                }}
                className={`${isShowMenu ? 'flex' : 'hidden'} items-center flex-col gap-2 w-full mt-6 md:hidden`}>
                <Link onClick={() => setIsShowMenu(!isShowMenu)} className="btn w-full" to='/quiz'>Play Quiz</Link>
                <Link onClick={() => setIsShowMenu(!isShowMenu)} className="btn w-full" to='/quiz'>Add Quiz</Link>
            </motion.div>
        </motion.nav>
    )
}
