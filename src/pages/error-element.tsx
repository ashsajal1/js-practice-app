import Navbar from "../components/partials/navbar";
import Footer from "../components/partials/footer";
import 'aos/dist/aos.css';
import GotoTop from "../components/ui/go-to-top";

export default function ErrorElement() {

    return (
        <>
            <Navbar />
            <main className="mt-[80px] flex flex-col items-center justify-center h-screen dark:bg-black">
                <h2 className="text-center font-bold text-2xl mt-6 dark:text-white">An unexpected Error occurred!</h2>
                <p className="dark:text-slate-500 text-gray-700 mt-2">Try refreshing the page.</p>
            </main>
            <GotoTop />
            <Footer />
        </>
    )
}