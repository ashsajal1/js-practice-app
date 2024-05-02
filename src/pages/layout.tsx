import { Outlet } from "react-router-dom";
import Navbar from "../components/partials/navbar";
import Footer from "../components/partials/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Layout() {
    useEffect(() => {
        AOS.init();
    },[])
    return (
        <>
            <Navbar />
            <main className="mt-[80px] dark:bg-black">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
