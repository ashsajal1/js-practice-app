import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon, Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'
import { useThemeContext } from "../../hooks/useThemeContext";
import Button from "../ui/button";
import { CiTrophy, CiBeaker1, CiMicrophoneOn } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setVoice } from "../../features/voice/voiceSlice";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { LuMic } from "react-icons/lu";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isShowMenu, setIsShowMenu] = useState(false);
    const [isShowIconAnimaition, setIsShowIconAnimation] = useState(false);
    const { isDarkMode, toggleMode } = useThemeContext()

    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    const dispatch = useDispatch()
    const voice = useTypedSelector(state => state.voice.voice)

    useEffect(() => {
        const synth = window.speechSynthesis;
        if (voice) {
            const selectedVoice = synth.getVoices()
            if (selectedVoice) {
                setVoices(selectedVoice);
            }
        } else {
            const handleVoicesChanged = () => {
                setVoices(synth.getVoices());
            };

            // Load voices initially
            handleVoicesChanged();
            // Ensure the voices are loaded on all browsers
            if (synth.onvoiceschanged !== undefined) {
                synth.onvoiceschanged = handleVoicesChanged;
            }
        }
    }, [voice]);

    const handleVoiceChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedVoiceName = e.target.value;
        dispatch(setVoice(selectedVoiceName));
    };
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

    const backdropClass = scrolled ? 'bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm' : ''

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
                duration: 0.1
            }}

            className={`flex flex-col items-center justify-between z-10 border-b dark:border-b-gray-900 md:dark:border-none p-4 min-h-[80px] fixed top-0 w-full bg-white ${backdropClass} dark:bg-black`}>
            <div className="flex w-full items-center justify-between">
                <Link to={'/'} className="g-text font-extrabold text-2xl select-none">JS Practice</Link>
                <div className="flex items-center justify-between gap-2">
                    <div>
                        <div onClick={toggleMode} className="ghost-btn">
                            {isDarkMode ? <MoonIcon className={`h-6 w-6 text-black dark:text-white ${isShowIconAnimaition ? 'animate-pulse' : ''}`} /> : <SunIcon className={`h-6 w-6 text-black dark:text-white ${isShowIconAnimaition ? 'animate-spin' : ''}`} />}
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-2">
                        <Link to='/quiz'>
                            <Button className="flex items-center gap-1">
                                <CiTrophy className="h-5 w-5" />
                                Play Quiz
                            </Button>
                        </Link>
                        <Link to='/interview'>
                            <Button className="flex items-center gap-1" variant="outline">
                                <CiBeaker1 className="h-5 w-5" />
                                Start Interview
                            </Button>
                        </Link>

                        <Button className="focus-within:bg-blue-100 flex items-center gap-2" variant="outline">
                            <CiMicrophoneOn className="h-6 w-6" />
                            <select onChange={handleVoiceChange} className="w-[40px] dark:bg-black hover:bg-blue-100 focus:outline-none">
                                <option disabled selected>{voice}</option>
                                {voices.map(voice => <option key={voice.name} value={voice.name}>{voice.name}</option>)}
                            </select>
                        </Button>

                    </div>

                    <Bars3CenterLeftIcon onClick={() => setIsShowMenu(!isShowMenu)} className={`h-6 w-6 dark:text-white text-black md:hidden ${isShowMenu ? 'hidden' : ''}`} />

                    <XMarkIcon onClick={() => setIsShowMenu(false)} className={`h-6 w-6 dark:text-white text-black md:hidden ${isShowMenu ? '' : 'hidden'}`} />

                </div>

            </div>

            <AnimatePresence mode="wait">
                {isShowMenu && <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{
                        duration: 0.2,
                        type: 'tween'
                    }}
                    className={`flex flex-col items-center gap-2 w-full mt-6 md:hidden`}>

                    <div className="flex items-center gap-2 w-full">
                        <Link onClick={() => setIsShowMenu(!isShowMenu)} className="w-full" to='/quiz'><Button className="w-full flex items-center gap-1" variant="outline">
                            <CiTrophy className="h-5 w-5" />
                            Play Quiz
                        </Button></Link>
                        <Link className="w-full" onClick={() => setIsShowMenu(!isShowMenu)} to='/interview'>
                            <Button className="w-full flex items-center gap-1" variant="outline">
                                <CiBeaker1 className="h-5 w-5" />
                                Start Interview
                            </Button>
                        </Link>
                    </div>

                    <Button className="w-full focus-within:bg-blue-100 flex items-center gap-2" variant="outline">
                        <LuMic />
                        <select onChange={handleVoiceChange} className="w-full bg-white dark:bg-black hover:bg-blue-100 focus:outline-none">
                            <option disabled selected>{voice}</option>
                            {voices.map(voice => <option key={voice.name} value={voice.name}>{voice.name}</option>)}
                        </select>
                    </Button>
                </motion.div>}
            </AnimatePresence>

        </motion.nav>
    )
}
