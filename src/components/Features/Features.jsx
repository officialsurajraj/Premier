import "./Features.css";


function Features() {
    return (
        <section className="features" id="features">

            <div className="features-container">

                {/* Section Heading */}

                <div className="features-heading">

                    <span className="features-label">
                        EVERYTHING YOU NEED
                    </span>

                    <h2>
                        Your studio workflow,
                        <br />
                        <span>made beautifully simple.</span>
                    </h2>

                    <p>
                        Everything you need to share galleries,
                        collect selections and keep your clients
                        moving forward.
                    </p>

                </div>


                {/* Features Grid */}

                <div className="features-grid">

                    {/* Feature 01 */}

                    <article className="feature-card feature-large">

                        <div className="feature-top">

                            <span className="feature-number">
                                01
                            </span>

                            <span className="feature-icon">
                                ↗
                            </span>

                        </div>

                        <div className="feature-content">

                            <h3>
                                Beautiful Client Galleries
                            </h3>

                            <p>
                                Give every client a private,
                                elegant gallery designed to make
                                their memories feel special.
                            </p>

                        </div>

                    </article>


                    {/* Feature 02 */}

                    <article className="feature-card">

                        <div className="feature-top">

                            <span className="feature-number">
                                02
                            </span>

                            <span className="feature-icon">
                                ♡
                            </span>

                        </div>

                        <div className="feature-content">

                            <h3>
                                Easy Photo Selection
                            </h3>

                            <p>
                                Clients can select their favourite
                                photos directly from their phone.
                            </p>

                        </div>

                    </article>


                    {/* Feature 03 */}

                    <article className="feature-card">

                        <div className="feature-top">

                            <span className="feature-number">
                                03
                            </span>

                            <span className="feature-icon">
                                ✓
                            </span>

                        </div>

                        <div className="feature-content">

                            <h3>
                                Selection Tracking
                            </h3>

                            <p>
                                Always know how many photos your
                                client has selected and what is left.
                            </p>

                        </div>

                    </article>


                    {/* Feature 04 */}

                    <article className="feature-card">

                        <div className="feature-top">

                            <span className="feature-number">
                                04
                            </span>

                            <span className="feature-icon">
                                #
                            </span>

                        </div>

                        <div className="feature-content">

                            <h3>
                                Selection Limits
                            </h3>

                            <p>
                                Set the exact number of photos your
                                client needs to select for their album.
                            </p>

                        </div>

                    </article>


                    {/* Feature 05 */}

                    <article className="feature-card">

                        <div className="feature-top">

                            <span className="feature-number">
                                05
                            </span>

                            <span className="feature-icon">
                                ◌
                            </span>

                        </div>

                        <div className="feature-content">

                            <h3>
                                Private & Secure
                            </h3>

                            <p>
                                Keep every gallery private and give
                                clients access through a secure link.
                            </p>

                        </div>

                    </article>


                    {/* Feature 06 */}

                    <article className="feature-card feature-dark">

                        <div className="feature-top">

                            <span className="feature-number">
                                06
                            </span>

                            <span className="feature-icon">
                                ↓
                            </span>

                        </div>

                        <div className="feature-content">

                            <h3>
                                Final Selection
                            </h3>

                            <p>
                                Get the final approved selection
                                ready for editing or album creation.
                            </p>

                        </div>

                    </article>

                </div>

            </div>

        </section>
    );
}


export default Features;