import { useNavigate } from "react-router-dom"
import servicos from "../../services/servicosWrappen"

const ServicosWrappen = () => {
    const navigate = useNavigate()
    const handleClick = (url) => {
        navigate(`services/${url}`)
    }
    return (
        <>
            <article>
                {
                    servicos.map((index) =>
                        <li id={index.id}>
                            <p>{index.nome}</p>
                            <p>{index.descricao}</p>
                            <button onClick={() => handleClick(index.nav)}><img src="/" /></button>
                        </li>
                    )
                }
            </article>
        </>
    )
}

export default ServicosWrappen