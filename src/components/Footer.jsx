import { Link } from 'react-router-dom'
import './styles/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <h3>
                © Arvin Garay
            </h3>
            <small>
                Handcrafted by
                <a href="https://khvorostovskyi.com" target="_blank" rel="noreferrer">
                    Bohdan Khvorostovskyi
                </a>
            </small>
        </footer>
    )
}

export default Footer