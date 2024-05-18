import { Outlet } from "react-router-dom";
import Navbar from "../components/partials/navbar";
import Footer from "../components/partials/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export default function Layout() {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, [])
    return (
        <>
            <Navbar />
            <main className="mt-[80px] dark:bg-black">
                <AnimatePresence mode="wait">
                    <Outlet />
                </AnimatePresence>
            </main>
            <Footer />
        </>
    )
}
