import "./Pricing.css";

function Pricing() {
    return (
        <section className="pricing" id="pricing">
            <div className="pricing-container">

                {/* Heading */}
                <div className="pricing-heading">

                    <span className="pricing-label">
                        SIMPLE PRICING
                    </span>

                    <h2>
                        Choose a plan that
                        <br />
                        <span>fits your studio.</span>
                    </h2>

                    <p>
                        Start simple and upgrade as your photography
                        business grows.
                    </p>

                </div>


                {/* Pricing Cards */}
                <div className="pricing-grid">

                    {/* Starter */}
                    <article className="pricing-card">

                        <div className="pricing-card-top">

                            <span className="pricing-plan">
                                STARTER
                            </span>

                            <h3>
                                For getting started
                            </h3>

                            <p>
                                Everything you need to start
                                sharing galleries with clients.
                            </p>

                            <div className="pricing-price">
                                <strong>₹499</strong>
                                <span>/ month</span>
                            </div>

                        </div>

                        <div className="pricing-divider"></div>

                        <ul className="pricing-features">

                            <li>
                                <span>✓</span>
                                Up to 5 projects
                            </li>

                            <li>
                                <span>✓</span>
                                Client galleries
                            </li>

                            <li>
                                <span>✓</span>
                                Photo selection
                            </li>

                            <li>
                                <span>✓</span>
                                Private gallery links
                            </li>

                        </ul>

                        <button className="pricing-button">
                            Get started
                        </button>

                    </article>


                    {/* Professional */}
                    <article className="pricing-card pricing-card-featured">

                        <div className="popular-badge">
                            MOST POPULAR
                        </div>

                        <div className="pricing-card-top">

                            <span className="pricing-plan">
                                PROFESSIONAL
                            </span>

                            <h3>
                                For growing studios
                            </h3>

                            <p>
                                More projects and powerful tools
                                for your growing workflow.
                            </p>

                            <div className="pricing-price">
                                <strong>₹999</strong>
                                <span>/ month</span>
                            </div>

                        </div>

                        <div className="pricing-divider"></div>

                        <ul className="pricing-features">

                            <li>
                                <span>✓</span>
                                Unlimited projects
                            </li>

                            <li>
                                <span>✓</span>
                                Client galleries
                            </li>

                            <li>
                                <span>✓</span>
                                Photo selection
                            </li>

                            <li>
                                <span>✓</span>
                                Selection limits
                            </li>

                            <li>
                                <span>✓</span>
                                Selection tracking
                            </li>

                            <li>
                                <span>✓</span>
                                Priority support
                            </li>

                        </ul>

                        <button className="pricing-button featured-button">
                            Start free trial
                        </button>

                    </article>


                    {/* Studio */}
                    <article className="pricing-card">

                        <div className="pricing-card-top">

                            <span className="pricing-plan">
                                STUDIO
                            </span>

                            <h3>
                                For professional teams
                            </h3>

                            <p>
                                Advanced workflow tools for
                                busy photography studios.
                            </p>

                            <div className="pricing-price">
                                <strong>₹1,999</strong>
                                <span>/ month</span>
                            </div>

                        </div>

                        <div className="pricing-divider"></div>

                        <ul className="pricing-features">

                            <li>
                                <span>✓</span>
                                Everything in Professional
                            </li>

                            <li>
                                <span>✓</span>
                                Multiple team members
                            </li>

                            <li>
                                <span>✓</span>
                                Advanced project management
                            </li>

                            <li>
                                <span>✓</span>
                                Priority support
                            </li>

                        </ul>

                        <button className="pricing-button">
                            Get started
                        </button>

                    </article>

                </div>


                {/* Bottom Note */}
                <p className="pricing-note">
                    Start with a free trial. No credit card required.
                </p>

            </div>
        </section>
    );
}

export default Pricing;