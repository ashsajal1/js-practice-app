import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X, Mic, Trophy, FlaskConical, ChevronDown, Home as HomeIcon } from 'lucide-react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useThemeContext } from "../../hooks/useThemeContext";
import Button from "../ui/button";
import { useDispatch } from "react-redux";
import { setVoice } from "../../features/voice/voiceSlice";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { cn } from "../../lib/cn";

const navItems = [
  { name: 'Home', path: '/', icon: <HomeIcon className="h-4 w-4" /> },
  { name: 'Play Quiz', path: '/quiz', icon: <Trophy className="h-4 w-4" /> },
  { name: 'Interview Prep', path: '/interview', icon: <FlaskConical className="h-4 w-4" /> },
  { name: 'Practice', path: '/practice', icon: <FlaskConical className="h-4 w-4" /> },
];

export default function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVoiceMenuOpen, setIsVoiceMenuOpen] = useState(false);
    const { isDarkMode, toggleMode } = useThemeContext();
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    const [isScrolled, setIsScrolled] = useState(false);
    const voiceMenuRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const voice = useTypedSelector(state => state.voice.voice);
    const { scrollY } = useScroll();
    
    // Handle scroll effect with framer-motion
    useEffect(() => {
        return scrollY.onChange((latest) => {
            if (latest > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        });
    }, [scrollY]);

    // Load voices
    useEffect(() => {
        const synth = window.speechSynthesis;
        const handleVoicesChanged = () => {
            const availableVoices = synth.getVoices();
            setVoices(availableVoices);
            
            // Set a default voice if none is selected
            if (!voice && availableVoices.length > 0) {
                const defaultVoice = availableVoices.find(v => v.default) || availableVoices[0];
                dispatch(setVoice(defaultVoice.name));
            }
        };

        // Initial load
        handleVoicesChanged();
        
        // Add event listener for voice changes
        if (synth.onvoiceschanged !== undefined) {
            synth.onvoiceschanged = handleVoicesChanged;
        }

        // Cleanup
        return () => {
            if (synth.onvoiceschanged === handleVoicesChanged) {
                synth.onvoiceschanged = null;
            }
        };
    }, [dispatch, voice]);

    const handleVoiceSelect = (voiceName: string) => {
        dispatch(setVoice(voiceName));
        setIsVoiceMenuOpen(false);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (voiceMenuRef.current && !voiceMenuRef.current.contains(event.target as Node)) {
                setIsVoiceMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const navBackground = isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' 
        : 'bg-transparent';

    const navBorder = isScrolled 
        ? 'border-b border-gray-200 dark:border-gray-800' 
        : 'border-b border-transparent';

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                'fixed top-0 z-50 w-full transition-all duration-300',
                navBackground,
                navBorder,
                'px-4 sm:px-6 lg:px-8 py-3'
            )}
        >
            <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <Link 
                    to="/" 
                    className="flex items-center"
                >
                    <motion.span 
                        className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        JS Practice
                    </motion.span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={cn(
                                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                                location.pathname === item.path
                                    ? 'text-blue-600 dark:text-blue-400'
                                    : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white',
                                'flex items-center gap-2'
                            )}
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Right side controls */}
                <div className="flex items-center gap-3">
                    {/* Voice Selection Dropdown */}
                    <div className="relative" ref={voiceMenuRef}>
                        <Button
                            variant="ghost"
                            onClick={() => setIsVoiceMenuOpen(!isVoiceMenuOpen)}
                            className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-md"
                        >
                            <Mic className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                            <span className="hidden sm:inline text-gray-700 dark:text-gray-300">Voice</span>
                            <ChevronDown className={cn(
                                'h-4 w-4 transition-transform text-gray-700 dark:text-gray-300',
                                isVoiceMenuOpen ? 'transform rotate-180' : ''
                            )} />
                        </Button>

                        <AnimatePresence>
                            {isVoiceMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2, ease: 'easeOut' }}
                                    className="absolute right-0 mt-2 w-64 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 overflow-hidden"
                                >
                                    <div className="py-1">
                                        <div className="px-4 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">
                                            Select Voice
                                        </div>
                                        <div className="max-h-60 overflow-y-auto">
                                            {voices.length > 0 ? (
                                                voices.map((v) => (
                                                    <button
                                                        key={v.name}
                                                        onClick={() => handleVoiceSelect(v.name)}
                                                        className={cn(
                                                            'w-full text-left px-4 py-2 text-sm flex items-center',
                                                            voice === v.name
                                                                ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                                                                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50'
                                                        )}
                                                    >
                                                        <span className="truncate">{v.name}</span>
                                                        {voice === v.name && (
                                                            <span className="ml-auto text-blue-500">
                                                                ✓
                                                            </span>
                                                        )}
                                                    </button>
                                                ))
                                            ) : (
                                                <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                                                    No voices available
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Theme Toggle */}
                    <Button
                        variant="ghost"
                        onClick={toggleMode}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {isDarkMode ? (
                            <Sun className="h-5 w-5 text-yellow-500" />
                        ) : (
                            <Moon className="h-5 w-5 text-gray-700" />
                        )}
                    </Button>

                    {/* Mobile menu button */}
                    <Button
                        variant="ghost"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden"
                    >
                        <div className="pt-2 pb-3 space-y-1 px-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={cn(
                                        'block px-3 py-2 rounded-md text-base font-medium',
                                        location.pathname === item.path
                                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50',
                                        'flex items-center gap-2'
                                    )}
                                >
                                    {item.icon}
                                    {item.name}
                                </Link>
                            ))}
                            
                            {/* Mobile Voice Selection */}
                            <div className="px-3 py-2
                            ">
                                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 px-1">
                                    Text-to-Speech Voice
                                </div>
                                <select
                                    value={voice || ''}
                                    onChange={(e) => handleVoiceSelect(e.target.value)}
                                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    {voices.length > 0 ? (
                                        voices.map((v) => (
                                            <option key={v.name} value={v.name}>
                                                {v.name}
                                            </option>
                                        ))
                                    ) : (
                                        <option disabled>No voices available</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
