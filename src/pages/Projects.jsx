import { useEffect } from 'react'
import { Card } from '../components'
import { portfolio } from '../data'

const Projects = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = `Arvin Garay | Projects | Portfolio | Architect | Project Manager | Designer | Building Science`
    }, [])

    return (
        <section className="projects">
            <h1 className="title">
                PROJECTS
            </h1>
            <div className="projects-container mt-50">
                {portfolio.map((item, index) => (
                    <Card key={`${index}-project`} item={item} index={index} />
                ))}
            </div>
        </section>
    )
}

export default Projects