import { useParams } from "react-router-dom"

const ServicePage = () => {
    const { url } = useParams()

    return <>{url}</>

}

export default ServicePage