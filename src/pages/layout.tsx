import { Outlet } from "react-router-dom";
import Navbar from "../components/partials/navbar";
import Footer from "../components/partials/footer";

export default function Layout() {
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
