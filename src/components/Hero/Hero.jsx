import "./Hero.css"
import heroImage from "../../assets/img/heroImage.jpg"

function Hero() {
    return (
        <section className="hero">
            <div className="container hero-content">

                {/* Left Content */}
                <div className="hero-text">

                    <div className="eyebrow">
                        <span></span>
                        Built for modern photography studios
                    </div>

                    <h1>
                        Turn moments into
                        <span> lasting memories.</span>
                    </h1>

                    <p className="hero-description">
                        Upload, share and let your clients select their
                        favourite photos from anywhere. Premier makes
                        your photography workflow faster and simpler.
                    </p>

                    <div className="hero-actions">

                        <button className="primary-btn hero-btn">
                            Get Started Free
                            <span>→</span>
                        </button>

                        <button className="secondary-btn">
                            <span className="play-icon">▶</span>
                            Watch how it works
                        </button>

                    </div>

                    {/* Trust */}
                    <div className="trust">

                        <div className="trust-item">
                            <strong>500+</strong>
                            <span>Studios</span>
                        </div>

                        <div className="trust-divider"></div>

                        <div className="trust-item">
                            <strong>50K+</strong>
                            <span>Happy Clients</span>
                        </div>

                        <div className="trust-divider"></div>

                        <div className="trust-item">
                            <strong>2M+</strong>
                            <span>Photos Delivered</span>
                        </div>

                    </div>

                </div>


                {/* Right Visual */}
                <div className="hero-visual">

                    <div className="photo-card">
                        <div className="photo-overlay">
                            <img src={heroImage} content="cover" classNasme="imageContainer" />
                        </div>

                        <div className="photo-content">

                            <span className="photo-label">
                                YOUR MEMORIES
                            </span>

                            <h3>
                                Beautiful moments,
                                <br />
                                beautifully organized.
                            </h3>

                            <div className="photo-bottom">
                                <span>Rahul & Priya</span>
                                <span>Wedding · 2026</span>
                            </div>

                        </div>

                    </div>


                    {/* Floating Selection Card */}
                    <div className="selection-card">

                        <div className="selection-icon">
                            ✓
                        </div>

                        <div>
                            <strong>Selection Complete</strong>
                            <span>100 photos selected</span>
                        </div>

                    </div>


                    {/* Floating Stats */}
                    <div className="floating-stat">

                        <div className="stat-icon">
                            ♥
                        </div>

                        <div>
                            <strong>72 / 100</strong>
                            <span>Photos selected</span>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;