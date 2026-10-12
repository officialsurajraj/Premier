import {
    FolderKanban,
    Clock3,
    Images,
    CheckCircle2,
} from "lucide-react";

import StatCard from "../../components/Dashboard/StatCard/StatCard";
import RecentProjects from "../../components/Dashboard/RecentProjects/RecentProjects";

import "./Dashboard.css";

function Dashboard() {
    return (
        <main className="dashboard-content">

            {/* Page Heading */}

            <div className="dashboard-heading">

                <div>

                    <span className="dashboard-welcome">
                        OVERVIEW
                    </span>

                    <h1>
                        Good morning, Studio.
                    </h1>

                    <p>
                        Here's what's happening with your
                        photography workflow.
                    </p>

                </div>


                <button className="dashboard-new-project">
                    + Create Project
                </button>

            </div>


            {/* Stats */}

            <div className="dashboard-stats">

                <StatCard
                    label="ACTIVE PROJECTS"
                    value="12"
                    description="3 projects updated this week"
                    icon={FolderKanban}
                />

                <StatCard
                    label="AWAITING SELECTION"
                    value="04"
                    description="Clients need to make selections"
                    icon={Clock3}
                />

                <StatCard
                    label="PHOTOS UPLOADED"
                    value="8,426"
                    description="Across all active projects"
                    icon={Images}
                />

                <StatCard
                    label="SELECTIONS RECEIVED"
                    value="18"
                    description="Ready for your next workflow"
                    icon={CheckCircle2}
                />

            </div>


            {/* Main Grid */}

            <div className="dashboard-main-grid">

                <RecentProjects />


                {/* Activity */}

                <section className="dashboard-activity">

                    <div className="activity-header">

                        <span className="dashboard-section-label">
                            ACTIVITY
                        </span>

                        <h2>
                            Latest updates
                        </h2>

                    </div>


                    <div className="activity-list">

                        <div className="activity-item">

                            <span className="activity-dot"></span>

                            <div>

                                <strong>
                                    Selection received
                                </strong>

                                <p>
                                    Arjun & Priya submitted
                                    100 photos.
                                </p>

                                <small>
                                    12 minutes ago
                                </small>

                            </div>

                        </div>


                        <div className="activity-item">

                            <span className="activity-dot"></span>

                            <div>

                                <strong>
                                    Gallery viewed
                                </strong>

                                <p>
                                    Rahul & Neha opened
                                    their gallery.
                                </p>

                                <small>
                                    2 hours ago
                                </small>

                            </div>

                        </div>


                        <div className="activity-item">

                            <span className="activity-dot"></span>

                            <div>

                                <strong>
                                    New project created
                                </strong>

                                <p>
                                    Karan & Simran was added
                                    to your workspace.
                                </p>

                                <small>
                                    Yesterday
                                </small>

                            </div>

                        </div>

                    </div>

                </section>

            </div>

        </main>
    );
}

export default Dashboard;