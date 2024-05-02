import { CiTwitter, CiLinkedin, CiFacebook, CiLink } from "react-icons/ci";

const text = `I've practice an interview question in JsPracticeWeb with fun. You can also try https://js-practice-app.vercel.app. #js_practice_app #javascript #interview_practice`

export default function SocialMedia() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="m-2 dark:text-white">Share to social media</h2>
            <div className="flex items-center gap-2">
                <a title="Link to share in social media" href={`https://twitter.com/intent/tweet?text=${text}`} className="btn"><CiTwitter className="h-6 w-6" /></a>
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://js-practice-app.vercel.app&title=${text}`} title="Link to share in social media" className="btn"><CiLinkedin className="h-6 w-6" /></a>
                <a href={`https://www.facebook.com/sharer.php?u=https://https://js-practice-app.vercel.app`} title="Link to share in social media" className="btn"><CiFacebook className="h-6 w-6" /></a>
                <div onClick={() => window.navigator.clipboard.writeText('https://js-practice-app.vercel.app')} className="btn"><CiLink className="h-6 w-6" /></div>
            </div>
        </div>
    )
}
