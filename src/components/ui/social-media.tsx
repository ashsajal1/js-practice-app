import { CiTwitter, CiLinkedin, CiFacebook, CiLink } from "react-icons/ci";
import toast, { Toaster } from 'react-hot-toast';

export default function SocialMedia({ question }: { question: string }) {
    const text = `I've practice an interview question "${question}" in JsPracticeApp with fun. You can also try https://js-practice-app.vercel.app. #js_practice_app #javascript #interview_practice`

    const handleCopyUrl = () => {
        window.navigator.clipboard.writeText(text);
        toast.success(`Text copied to clipboard!`)
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="m-2 dark:text-white">Share to social media</h2>
            <Toaster position="top-center"
                reverseOrder={false} />
            <div className="flex items-center gap-2">
                <a target="_blink" title="Link to share in social media" href={`https://twitter.com/intent/tweet?text=${text}`} className="btn"><CiTwitter className="h-6 w-6" /></a>
                <a target="_blink" href={`https://www.linkedin.com/shareArticle?mini=true&url=https://js-practice-app.vercel.app&title=${text}`} title="Link to share in social media" className="btn"><CiLinkedin className="h-6 w-6" /></a>
                <a target="_blink" href={`https://www.facebook.com/sharer.php?u=https://https://js-practice-app.vercel.app`} title="Link to share in social media" className="btn"><CiFacebook className="h-6 w-6" /></a>
                <div onClick={handleCopyUrl} className="btn"><CiLink className="h-6 w-6" /></div>
            </div>
        </div>
    )
}
