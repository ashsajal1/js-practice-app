import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function GotoTop() {
    const [showTopBtn, setShowTopBtn] = useState(false)
    useEffect(() => {
        const handleShowBtn = () => {
            if (window.scrollY > 700) {
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
            {showTopBtn && <div onClick={handleGoToTop} className="fixed bottom-12 right-12 border">
                <ArrowUpCircleIcon className="h-6 w-6" />
            </div>}
        </>
    )
}
