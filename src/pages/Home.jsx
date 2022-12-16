import { useEffect } from "react"
import { Projects, Contact } from './'
import { user } from "../data"

const Home = () => {

  useEffect(() => {
    document.title = 'Arvin Garay | Architect | Project Manager | Designer | Building Science'
  }, [])

  return (
    <section>
      <h1 className="title">
        {user.name.toUpperCase()}
      </h1>
      <br/>
      <h4 className="title-secondary">
        {user.occupation}
      </h4>
      <div className="mt-50 pt-50 border-top">
          <p className="about h-100">
              {user.about}
          </p>
      </div>
      <div className="mt-50 pt-50 border-top">
        <Projects />
      </div>
      <div className="mt-50 pt-50 border-top">
        <Contact />
      </div>
    </section>
  )
}

export default Home