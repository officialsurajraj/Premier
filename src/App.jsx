import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
// import Login from "./pages/Login/Login";

import Dashboard from "./pages/Dashboard/Dashboard";

import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./pages/Login/Login";
import Galleries from "./pages/Galleries/Galleries";
import Clients from "./pages/Clients/Clients";
import Projects from "./pages/Projects/Projects";
import Selections from "./pages/Selections/Selections";
import Team from "./pages/Team/Team";
import Billings from "./pages/Billings/Billings";
import Settings from "./pages/Settings/Settings";


import "./App.css"
function App() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route
        path="/"
        element={<Landing />}
      />


      <Route
        path="/login"
        element={<Login />}
      />


      {/* Application Routes */}

      <Route element={<DashboardLayout />}>

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/projects"
          element={<Projects />}
        />
        <Route
          path="/clients"
          element={<Clients />}
        />
        <Route
          path="/galleries"
          element={<Galleries />}
        />
        <Route
          path="/selections"
          element={<Selections />}
        />
        <Route
          path="/team"
          element={<Team />}
        />
        <Route
          path="/billing"
          element={<Billings />}
        />
        <Route
          path="/settings"
          element={<Settings />}
        />

      </Route>

    </Routes>
  );
}

export default App;