import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    };

    useEffect(() => {
        const changeWidth = () => setWidth(window.innerWidth);
        window.addEventListener("resize", changeWidth);
        return () => window.removeEventListener("resize", changeWidth);
    });

    return (
        <nav>
            {(toggleMenu || width > 500) && (
                <ul className="liste">
                    <li className="items"><Link to="/">Accueil</Link></li>
                    <li className="items"><Link to="/write">Écrire</Link></li>
                    <li className="items"><Link to="/contact">Contact</Link></li>
                </ul>
            )}
            <button onClick={toggleNav} className="btn">
                BTN
            </button>
        </nav>
    );
}
