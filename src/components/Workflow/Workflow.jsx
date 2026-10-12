import "./Workflow.css";


function Workflow() {
    return (
        <section className="workflow" id="workflow">

            <div className="workflow-container">

                {/* Section Heading */}

                <div className="workflow-heading">

                    <span className="workflow-label">
                        SIMPLE WORKFLOW
                    </span>

                    <h2>
                        From shoot to selection,
                        <br />
                        <span>without the back and forth.</span>
                    </h2>

                    <p>
                        Give your clients a beautiful way to select
                        their favourite memories from anywhere.
                    </p>

                </div>


                {/* Workflow Steps */}

                <div className="workflow-grid">

                    {/* Step 01 */}

                    <article className="workflow-card">

                        <span className="workflow-number">
                            01
                        </span>

                        <div className="workflow-card-content">

                            <h3>
                                Upload
                            </h3>

                            <p>
                                Upload your wedding photos and
                                organize them into a beautiful gallery.
                            </p>

                        </div>

                    </article>


                    {/* Step 02 */}

                    <article className="workflow-card">

                        <span className="workflow-number">
                            02
                        </span>

                        <div className="workflow-card-content">

                            <h3>
                                Share
                            </h3>

                            <p>
                                Send your client a private gallery link.
                                No app installation required.
                            </p>

                        </div>

                    </article>


                    {/* Step 03 */}

                    <article className="workflow-card">

                        <span className="workflow-number">
                            03
                        </span>

                        <div className="workflow-card-content">

                            <h3>
                                Let them select
                            </h3>

                            <p>
                                Clients select their favourite photos
                                directly from their phone.
                            </p>

                        </div>

                    </article>


                    {/* Step 04 */}

                    <article className="workflow-card">

                        <span className="workflow-number">
                            04
                        </span>

                        <div className="workflow-card-content">

                            <h3>
                                Get the final selection
                            </h3>

                            <p>
                                Receive the final selection instantly
                                and continue your editing or album workflow.
                            </p>

                        </div>

                    </article>

                </div>

            </div>

        </section>
    );
}


export default Workflow;