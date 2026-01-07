import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import FooterSection from "../components/FooterSection"

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 mx-32">
                <Outlet />
            </main>
            <FooterSection />
        </div>
    )
}

export default MainLayout;