
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import "./Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="header">
            <div className="container header-inner">
                {/* Logo */}
                <Link to="/" className="logo" onClick={closeMenu}>
                    <span className="logo-mark">✦</span>
                    <span className="logo-text">Premier</span>
                </Link>

                {/* Navigation */}
                <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
                    <a href="/#features" onClick={closeMenu}>
                        Features
                    </a>
                    <a href="/#workflow" onClick={closeMenu}>
                        How it works
                    </a>
                    <a href="/#pricing" onClick={closeMenu}>
                        Pricing
                    </a>
                    <a href="/#about" onClick={closeMenu}>
                        About
                    </a>

                    {/* Mobile actions */}
                    <div className="mobile-actions">
                        <Link to="/login" className="mobile-login" onClick={closeMenu}>
                            Login
                        </Link>

                        <Link
                            to="/login"
                            className="mobile-get-started"
                            onClick={closeMenu}
                        >
                            Get Started ↗
                        </Link>
                    </div>
                </nav>

                {/* Desktop actions */}
                <div className="header-actions">
                    <Link to="/login" className="login-btn">
                        Login
                    </Link>

                    <Link to="/login" className="header-primary-btn">
                        Get Started <span>↗</span>
                    </Link>
                </div>

                {/* Hamburger button */}
                <button
                    type="button"
                    className="hamburger-btn"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >
                    {menuOpen ? <X size={23} /> : <Menu size={23} />}
                </button>
            </div>
        </header>
    );
}

export default Header;
