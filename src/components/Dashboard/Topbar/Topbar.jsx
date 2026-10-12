import {
    Search,
    Bell,
    Plus,
} from "lucide-react";

import "./Topbar.css";

function Topbar() {
    return (
        <header className="dashboard-topbar">

            <div className="topbar-left">

                <div className="dashboard-search">

                    <Search size={16} />

                    <input
                        type="text"
                        placeholder="Search projects, clients..."
                    />

                    <span className="search-shortcut">
                        /
                    </span>

                </div>

            </div>


            <div className="topbar-right">

                <button className="topbar-create">
                    <Plus size={15} />
                    New Project
                </button>


                <button className="topbar-icon-button">
                    <Bell size={17} />

                    <span className="notification-dot"></span>
                </button>


                <div className="topbar-user">

                    <div className="topbar-avatar">
                        SC
                    </div>

                    <div className="topbar-user-info">

                        <strong>
                            Studio
                        </strong>

                        <span>
                            Professional
                        </span>

                    </div>

                </div>

            </div>

        </header>
    );
}

export default Topbar;