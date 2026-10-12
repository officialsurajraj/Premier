import { Outlet } from "react-router-dom";

import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import Topbar from "../components/Dashboard/Topbar/Topbar";

import "./DashboardLayout.css";

function DashboardLayout() {
    return (
        <div className="dashboard-layout">

            <Sidebar />

            <div className="dashboard-main">

                <Topbar />

                <Outlet />

            </div>

        </div>
    );
}

export default DashboardLayout;