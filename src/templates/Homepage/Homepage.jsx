import './Homepage.css'
import Navbar from "../../components/Navbar/Navbar"
import ServicosWrappen from "../../components/ServicosWrappen/ServicosWrappen"
import Footer from '../../components/Footer/Footer'

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
                    <p><h4>5+ Projetos</h4> Realizados</p>
                    <p><h4>2 Anos</h4> De experiencia</p>
                </article>
            </section>
            <section className="secondSession">
                <label>
                    <h1>My Services</h1>
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