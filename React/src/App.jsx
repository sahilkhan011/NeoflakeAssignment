import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Component/Sidebar/Sidebar";
import { useState } from "react";
import Header from "./Component/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import Report from "./pages/Reports/Report";
import style from "./App.module.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <div className={`${style.main} d-flex`}>
                <Sidebar isSidebarOpen={isSidebarOpen} />
                <div className={`${style.dashboard} flex-grow-1`}>
                  <Header toggleSidebar={toggleSidebar} />

                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/report" element={<Report />} />
                  </Routes>
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
