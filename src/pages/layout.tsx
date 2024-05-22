import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/partials/navbar";
import Footer from "../components/partials/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import GotoTop from "../components/ui/go-to-top";
import { getRandomTopics } from "../features/topic/topicSlice";

export default function Layout() {
    const location = useLocation();
    // console.log(location)

    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, [])

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRandomTopics());
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <main className="mt-[80px] dark:bg-black">
                <AnimatePresence mode="wait">
                    <Outlet />
                </AnimatePresence>
            </main>
            <GotoTop />
            {location.pathname !== '/interview' && <Footer />}
        </>
    )
}