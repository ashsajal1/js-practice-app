import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between border-b p-2 h-[80px]">
            <Link to={'/'} className="g-text font-extrabold text-2xl">JS Practice</Link>
            <div className="flex items-center justify-between gap-2">
                <button className="btn">Add Question</button>
            </div>
        </nav>
    )
}
