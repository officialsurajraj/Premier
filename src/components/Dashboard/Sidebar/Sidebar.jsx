import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    FolderKanban,
    Users,
    Images,
    CheckCircle2,
    UsersRound,
    CreditCard,
    Settings,
    ChevronRight,
} from "lucide-react";

import "./Sidebar.css";

const navigation = [
    {
        label: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "Projects",
        path: "/projects",
        icon: FolderKanban,
    },
    {
        label: "Clients",
        path: "/clients",
        icon: Users,
    },
    {
        label: "Galleries",
        path: "/galleries",
        icon: Images,
    },
    {
        label: "Selections",
        path: "/selections",
        icon: CheckCircle2,
    },
    {
        label: "Team",
        path: "/team",
        icon: UsersRound,
    },
    {
        label: "Billing",
        path: "/billing",
        icon: CreditCard,
    },
    {
        label: "Settings",
        path: "/settings",
        icon: Settings,
    },
];

function Sidebar() {
    return (
        <aside className="dashboard-sidebar">

            {/* Brand */}

            <div className="dashboard-sidebar-brand">

                <NavLink to="/dashboard" className="dashboard-logo">

                    <span className="dashboard-logo-mark">
                        ✦
                    </span>

                    <span className="dashboard-logo-text">
                        Premier
                    </span>

                </NavLink>

            </div>


            {/* Navigation */}

            <nav className="dashboard-nav">

                <span className="dashboard-nav-label">
                    WORKSPACE
                </span>

                {navigation.map((item) => {

                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `dashboard-nav-item ${isActive ? "active" : ""
                                }`
                            }
                        >

                            <Icon size={17} strokeWidth={1.8} />

                            <span>
                                {item.label}
                            </span>

                            {item.label === "Dashboard" && (
                                <ChevronRight
                                    className="dashboard-nav-arrow"
                                    size={14}
                                />
                            )}

                        </NavLink>
                    );
                })}

            </nav>


            {/* Bottom */}

            <div className="dashboard-sidebar-bottom">

                <div className="studio-mini-card">

                    <div className="studio-mini-icon">
                        SC
                    </div>

                    <div className="studio-mini-info">

                        <strong>
                            Your Studio
                        </strong>

                        <span>
                            Professional
                        </span>

                    </div>

                </div>

            </div>

        </aside>
    );
}

export default Sidebar;