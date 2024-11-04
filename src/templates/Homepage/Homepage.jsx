import './Homepage.css'
import Navbar from "../../components/Navbar/Navbar"
import ServicosWrappen from "../../components/ServicosWrappen/ServicosWrappen"
import Footer from '../../components/Footer/Footer'
import globo from '../../assets/globo.png'
import joia from '../../assets/joia.png'

const Homepage = () => {
    
    return (
        <>
            <Navbar />
            <section className="firstSession">
                <h1>
                    <button>Download for CV</button>
                    <br />
                    I'm <strong>Guilherme</strong>, <br />Programmer and Graphics Designer
                </h1>
                <article>
                    <p><img src={globo}/><h4>5+ Projetos</h4> Realizados</p>
                    <p><img src={joia}/><h4>2 Anos</h4> De experiencia</p>
                </article>
                <div>
                    <button>button 1</button>
                    <button>button 2</button>
                </div>
            </section>
            <section className="secondSession">
                <label>
                    <h1>My <strong>Services</strong></h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.</p>
                </label>
                <hr />
                <ServicosWrappen />
            </section>
            <section className='threeSession'>
                <img src='/' />
                <label>
                    <h1>Venha fazer seu proximo projeto conosco!</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.</p>
                </label>
            </section>
            <Footer />
        </>
    )
}

export default Homepage