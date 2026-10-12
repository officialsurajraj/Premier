import { ArrowUpRight } from "lucide-react";

import "./RecentProjects.css";

const projects = [
    {
        client: "Arjun & Priya",
        type: "Wedding",
        photos: "842 photos",
        status: "Selection in progress",
        statusType: "selection",
        updated: "12 min ago",
    },
    {
        client: "Rahul & Neha",
        type: "Wedding",
        photos: "624 photos",
        status: "Editing",
        statusType: "editing",
        updated: "2 hours ago",
    },
    {
        client: "Aman & Riya",
        type: "Engagement",
        photos: "318 photos",
        status: "Selection received",
        statusType: "complete",
        updated: "Yesterday",
    },
    {
        client: "Karan & Simran",
        type: "Wedding",
        photos: "916 photos",
        status: "Awaiting selection",
        statusType: "waiting",
        updated: "Yesterday",
    },
];

function RecentProjects() {
    return (
        <section className="recent-projects">

            <div className="recent-projects-header">

                <div>
                    <span className="dashboard-section-label">
                        YOUR WORK
                    </span>

                    <h2>
                        Recent Projects
                    </h2>
                </div>

                <button className="view-all-button">
                    View all
                    <ArrowUpRight size={14} />
                </button>

            </div>


            <div className="projects-table">

                <div className="projects-table-head">
                    <span>PROJECT</span>
                    <span>PHOTOS</span>
                    <span>STATUS</span>
                    <span>UPDATED</span>
                </div>


                {projects.map((project) => (
                    <div
                        className="project-row"
                        key={project.client}
                    >

                        <div className="project-info">

                            <div className="project-avatar">
                                {project.client
                                    .split(" ")
                                    .map((word) => word[0])
                                    .join("")
                                    .slice(0, 2)}
                            </div>

                            <div>
                                <strong>
                                    {project.client}
                                </strong>

                                <span>
                                    {project.type}
                                </span>
                            </div>

                        </div>


                        <span className="project-photos">
                            {project.photos}
                        </span>


                        <span
                            className={`project-status ${project.statusType}`}
                        >
                            {project.status}
                        </span>


                        <span className="project-updated">
                            {project.updated}
                        </span>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default RecentProjects;