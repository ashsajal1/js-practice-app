import { Link } from 'react-router-dom'
import AnimatedPage from '../components/ui/animated-page'
export default function NotFound() {
    return (
        <AnimatedPage>
            <div className="h-screen flex items-center justify-center">
                <div className="flex flex-col items-center justify-center p-12 rounded border border-blue-700 border-dashed">
                    <p className="font-bold text-4xl bg-gradient-to-br from-blue-600 to-blue-900 bg-clip-text text-transparent">404</p>
                    <p className="bg-gradient-to-br from-blue-600 to-blue-900 bg-clip-text text-transparent">Page not found</p>

                    <div className="flex items-center gap-2 mt-4">
                        <Link className="bg-gradient-to-br from-blue-600 to-blue-900 p-2 rounded text-white flex items-center justify-center hover:to-blue-950 active:ring cursor-pointer select-none" to={'/'}>Home</Link>
                        <div className="bg-gradient-to-br from-blue-600 to-blue-900 p-2 rounded text-white flex items-center justify-center hover:to-blue-950 active:ring cursor-pointer select-none" onClick={() => { window.history.back() }}>Back</div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}
