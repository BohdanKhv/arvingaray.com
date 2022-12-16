import { Link, useLocation } from 'react-router-dom'
import { Img } from './'
import { user } from '../data'
import './styles/Nav.css'


const Nav = () => {
  const location = useLocation()

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-img">
          <div>
            <Img img={`/assets/photo.jpg`} alt="Photo" />
          </div>
        </div>
        <div className={`nav-name${location.pathname === '/' ? ' active' : ''}`}>
          <Link to="/">
            <h1>{user.name}</h1>
            <h5>{user.occupation}</h5>
          </Link>
        </div>
        <div className="nav-items">
          <div className={`nav-item${location.pathname === '/about' ? ' active' : ''}`}>
            <Link to="/about">ABOUT</Link>
          </div>
          <div className={`nav-item${location.pathname === '/projects' ? ' active' : ''}`}>
            <Link to="/projects">PROJECTS</Link>
          </div>
          <div className={`nav-item${location.pathname === '/contact' ? ' active' : ''}`}>
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav