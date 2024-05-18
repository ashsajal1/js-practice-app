import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Button from "./button";
import { AnimatePresence, motion } from "framer-motion";

export default function GotoTop() {
    const [showTopBtn, setShowTopBtn] = useState(false)
    useEffect(() => {
        const handleShowBtn = () => {
            if (window.scrollY > 500) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
        }
        window.addEventListener('scroll', handleShowBtn)

        return (() => {
            window.removeEventListener('scroll', handleShowBtn)
        })
    }, [])

    const handleGoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {showTopBtn && <motion.div
                    initial={{ scale: 0, x: -1000 }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{
                        duration: 1,
                        type: "spring"
                    }}
                >
                    <Button onClick={handleGoToTop} variant="solid" className="fixed bottom-12 right-12">
                        <ArrowUpCircleIcon className="h-6 w-6 text-white" />
                    </Button>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}
