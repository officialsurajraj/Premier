
import { Link } from "react-router-dom";
import {
    // Instagram
    // Facebook,
    ArrowUpRight,
    Heart
} from "lucide-react";

import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" id="about">
            <div className="footer-container">
                {/* Brand section */}
                <div className="footer-main">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <span className="footer-logo-mark">✦</span>
                            <span>Premier</span>
                        </Link>

                        <p className="footer-description">
                            A better way for photography studios to share
                            memories, collect selections, and manage their
                            workflow — all in one place.
                        </p>

                        <div className="footer-socials">
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                            >
                                {/* <Instagram size={17} /> */}
                            </a>

                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                            >
                                {/* <Facebook size={17} /> */}
                            </a>
                        </div>
                    </div>

                    {/* Product links */}
                    <div className="footer-column">
                        <h3>Product</h3>
                        <a href="/#features">Features</a>
                        <a href="/#workflow">How it works</a>
                        <a href="/#pricing">Pricing</a>
                        <Link to="/login">Get started</Link>
                    </div>

                    {/* Studio links */}
                    <div className="footer-column">
                        <h3>For Studios</h3>
                        <a href="/#studio-experience">Studio workflow</a>
                        <a href="/#client-experience">Client experience</a>
                        <a href="/#about">About Premier</a>
                    </div>

                    {/* Account links */}
                    <div className="footer-column">
                        <h3>Account</h3>
                        <Link to="/login">Sign in</Link>
                        <Link to="/login">Create an account</Link>
                        <Link to="/settings">Settings</Link>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="footer-bottom">
                    <p>
                        © {currentYear} Premier. All rights reserved.
                    </p>

                    <p className="footer-made">
                        Made for people who capture
                        <Heart size={13} fill="currentColor" />
                        memories.
                    </p>

                    <a href="#" className="footer-back-top">
                        Back to top
                        <ArrowUpRight size={15} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
