import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GoBack, Img } from '../components'
import { portfolio } from '../data'
import './styles/Project.css'

const Project = () => {
    const { code } = useParams()
    const [item, setItem] = useState(portfolio.find(item => item.code.toLowerCase() === code.toLowerCase()));
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = `Arvin Garay | ${item ? item.name : 'Project'} | Portfolio | Architect | Project Manager | Designer | Building Science`
    }, [])

    return (
        <section className="project-detailed">
            <GoBack />
            <div className="detailed-container mt-50">
                {item ? (
                    <div className="project">
                        <div className="flex gap-20 align-center">
                            <div className="project-card">
                                <div className="project-card-code">
                                    {item.code}
                                </div>
                                <div className="project-card-id">
                                    {item.id}
                                </div>
                            </div>
                            <div className="flex flex-column">
                                <h1 className="project-title">
                                    {item.name}
                                </h1>
                                <div className="tip">
                                    Address
                                </div>
                                <h4 className="project-location">
                                    {item.location}
                                </h4>
                            </div>
                        </div>
                        <div className="tip mt-10">
                            Size
                        </div>
                        <h5 className="project-size">
                            {item.size}
                        </h5>
                        <div className="tip">
                            Firm
                        </div>
                        <h5 className="project-size">
                            {item.firm}
                        </h5>
                        <div className="tip mt-20">
                            Description
                        </div>
                        <p className="project-description" onClick={() => setShowMore(!showMore)}>
                            {item.description.slice(0, 200)}
                            {item.description.length > 200 && !showMore && '...'}
                            {showMore && item.description.slice(200)}
                        </p>
                        <div className="mt-50 gallery">
                            {item.images.map((image, index) => (
                                <Img key={`${index}-gallery`}
                                    img={`/assets/projects/${image}`}
                                    alt={item.code}
                                    style={{
                                        animationDelay: `${index * 0.1}s`
                                    }}
                                    bigDisplay
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="title">
                        <h1>Project not found</h1>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Project