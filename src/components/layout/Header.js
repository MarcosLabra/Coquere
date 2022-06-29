import Navbar from "../layout/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {

    function handleClickMenu() {
        document.getElementById('mobileMenu').classList.toggle('show');
    }

    return (
        <header>
            <NavLink to="/" ><img src="/images/branding/CoquereLogo.webp" alt="Coquere Logo" className="brand" /></NavLink>
            {window.innerWidth < 1200 ? <img src="/images/icons/menuIcon.svg" alt="Menu Icon" className="menuIcon" onClick={handleClickMenu} /> : <Navbar />}
        </header>
    )
}

export default Header