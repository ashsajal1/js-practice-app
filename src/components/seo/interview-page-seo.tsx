import { Helmet } from 'react-helmet-async'

export default function PageSeo({
    title = "JavaScript Practice App - Practice Interview Questions | Rust, JavaScript, Go, React, Vue, and More",
    description = "Prepare for your next coding interview with our comprehensive practice platform. Test your skills with questions and challenges in Rust, JavaScript, Go, React, Vue, and other popular programming languages and frameworks. Enhance your problem-solving abilities and get ready to ace your interviews.",
    keywords = "programming interview, coding interview practice, Rust interview questions, JavaScript interview questions, Go interview questions, React interview questions, Vue interview questions, programming languages, frameworks, coding challenges, interview preparation",
    ogImage = "/cover.png",
    url = "https://js-practice-app.vercel.app/interview"
}) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={ogImage} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <link rel="canonical" href={url} />
        </Helmet>
    )
}
