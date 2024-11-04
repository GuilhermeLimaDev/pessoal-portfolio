import { Route, Routes } from "react-router-dom"
import Homepage from "./Homepage/Homepage"
import ServicePage from "./Service/ServicePage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="services/:url" element={<ServicePage />} />
        </Routes>
    )
}

export default AppRoutes