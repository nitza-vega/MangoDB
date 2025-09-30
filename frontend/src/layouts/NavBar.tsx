import { useState, useEffect } from "react";
import { GrSun } from "react-icons/gr";
import { FaMoon } from "react-icons/fa";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(isDarkTheme ? "dark" : "light");
    }, [isDarkTheme]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav id="navbar">
                <div id="navbar-header">
                    <div id="navbar-logo"><a href="/"><img src="src/assets/mangodb-logo.png" alt="Logo MangoDB" /></a></div>
                    <div id="hamburger" onClick={toggleMenu}>☰</div>
                </div>
                <ul className={`navbar-list ${isOpen ? "open" : ""}`}>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/Nosotros">Nosotros</a></li>
                    <li><a href="/">Cotización</a></li>
                    <li><a href="/Contáctanos">Contáctanos</a></li>
                    <li onClick={() => setIsDarkTheme(prev => !prev)}>
                        {isDarkTheme ? (
                            <GrSun size={20} color="yellow" />
                        ) : (
                            <FaMoon size={20} color="yellow" />
                        )}
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar