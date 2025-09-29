import { useState, useEffect } from "react";

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
                    <div id="navbar-logo"><a href="#"><img src="" alt="Logo MangoDB" /></a></div>
                    <div id="hamburger" onClick={toggleMenu}>☰</div>
                </div>
                <ul className={`navbar-list ${isOpen ? "open" : ""}`}>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contáctanos</a></li>
                    <li onClick={() => setIsDarkTheme(prev => !prev)}><input type="checkbox" checked={isDarkTheme} readOnly />tema</li>
                    <li><a href="#">Iniciar Sesión</a></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar