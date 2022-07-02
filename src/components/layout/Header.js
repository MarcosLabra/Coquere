import Navbar from "../layout/Navbar";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Header = () => {

    function handleClickMenu() {
        document.getElementById('mobileMenu').classList.toggle('show');
    }

    return (
        <header>
            <div className="header">
                <NavLink to="/" ><img src="/images/branding/CoquereLogo.webp" alt="Coquere Logo" className="header__brand" /></NavLink>
                {window.innerWidth < 1200 ? <img src="/images/icons/menuIconLight.svg" alt="Menu Icon" className="header__menuIcon" onClick={handleClickMenu} /> : <Navbar />}
            </div>
            <MobileMenu />
        </header>
    )
}

export default Header