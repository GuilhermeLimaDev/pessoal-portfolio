import './Navbar.css'
import logofieb from '../../assets/logo-fiebtech-branco.svg'

const Navbar = () => {
    return (
        <nav>
            <div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#experience">Experiencia</a></li>
                </ul>
            </div>
            <div>
                <img src={logofieb} />
            </div>
            <div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#experience">Experiencia</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar