import Navbar from "../layout/Navbar";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import Hamburger from 'hamburger-react'

const Header = () => {

    function handleClickMenu(toggled) {
        if (toggled) {
            document.getElementById('mobileMenu').classList.add('show');
        } else {
            document.getElementById('mobileMenu').classList.remove('show');
        }
    }




    return (
        <header>
            <div className="header">
                <NavLink to="/" ><img src="/images/branding/CoquereLogo.webp" alt="Coquere Logo" className="header__brand" /></NavLink>
                {window.innerWidth < 1200 ? <Hamburger size={20} color="#ffffff" onToggle={handleClickMenu} /> : <Navbar />}

            </div>
            <MobileMenu />
        </header>
    )
}

export default Header