import { useEffect, useState } from 'react'
import { user } from '../data'

const About = () => {
    const [showLetter, setShowLetter] = useState(1)

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = `Arvin Garay | About Me | Portfolio | Architect | Project Manager | Designer | Building Science`

        const interval = setInterval(() => {
            setShowLetter((prev) => prev + 1)
        }, 10)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="about">
            <h1 className="title">
                ABOUT
            </h1>
            <div className="mt-50">
                <p className="about h-100">
                    {user.about.slice(0, showLetter)}<span className="blink">|</span>
                </p>
            </div>
        </section>
    )
}

export default About