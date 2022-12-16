import { Link } from 'react-router-dom'
import './styles/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <h3>
                © Arvin Garay
            </h3>
            <small>
                Handcrafted by
                <a href="https://khvorostovskyi.com" target="_blank" rel="noreferrer">
                    Bohdan Khvorostovskyi
                </a>
            </small>
        </div>
    )
}

export default Footer