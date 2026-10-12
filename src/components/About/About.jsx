import "./About.css";

function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">

                {/* Heading */}
                <div className="about-heading">

                    <span className="about-label">
                        WHY PREMIER
                    </span>

                    <h2>
                        Built around the way
                        <br />
                        <span>photographers actually work.</span>
                    </h2>

                </div>


                {/* Main Story */}
                <div className="about-story">

                    {/* Left */}
                    <div className="about-intro">

                        <p className="about-lead">
                            Photography is about capturing moments.
                            The work after the shoot shouldn't get in
                            the way of that.
                        </p>

                        <p>
                            After every wedding, photographers often
                            spend hours going back and forth with clients
                            just to get their final photo selection.
                            Studio visits, WhatsApp messages and manually
                            tracking selections all take valuable time.
                        </p>

                        <p>
                            Premier was built to make that part simple.
                            Upload the photos, share a private gallery,
                            and let your clients choose their favourites
                            from wherever they are.
                        </p>

                    </div>


                    {/* Right - Problem / Solution */}
                    <div className="about-flow">

                        {/* Problem */}
                        <div className="about-flow-card">

                            <span className="about-flow-label">
                                THE OLD WAY
                            </span>

                            <div className="about-flow-item">
                                <span>01</span>
                                <p>Finish the shoot</p>
                            </div>

                            <div className="about-flow-line"></div>

                            <div className="about-flow-item">
                                <span>02</span>
                                <p>Send photos to client</p>
                            </div>

                            <div className="about-flow-line"></div>

                            <div className="about-flow-item">
                                <span>03</span>
                                <p>Wait for their response</p>
                            </div>

                            <div className="about-flow-line"></div>

                            <div className="about-flow-item">
                                <span>04</span>
                                <p>Track selections manually</p>
                            </div>

                        </div>


                        {/* Arrow */}
                        <div className="about-flow-arrow">
                            →
                        </div>


                        {/* Premier */}
                        <div className="about-flow-card premier-flow">

                            <span className="about-flow-label">
                                THE PREMIER WAY
                            </span>

                            <div className="about-flow-item">
                                <span>01</span>
                                <p>Upload your gallery</p>
                            </div>

                            <div className="about-flow-line"></div>

                            <div className="about-flow-item">
                                <span>02</span>
                                <p>Share the private link</p>
                            </div>

                            <div className="about-flow-line"></div>

                            <div className="about-flow-item">
                                <span>03</span>
                                <p>Client selects favourites</p>
                            </div>

                            <div className="about-flow-line"></div>

                            <div className="about-flow-item">
                                <span>04</span>
                                <p>Receive the final selection</p>
                            </div>

                        </div>

                    </div>

                </div>


                {/* Bottom Statement */}
                <div className="about-statement">

                    <span>OUR BELIEF</span>

                    <p>
                        The less time photographers spend managing
                        the process, the more time they can spend
                        creating something worth remembering.
                    </p>

                </div>

            </div>
        </section>
    );
}

export default About;