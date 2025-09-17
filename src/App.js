import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { RiEnglishInput } from "react-icons/ri";
import "./App.css";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Projects from "./AboutMe";
import Contact from "./Contact";
import useWindowWidth from "./hooks/useWindowWidth";
import "./Sidebar.css";
import './index.css';
import sidebarBg from "./mainBg.png";


export default function App() {
  const [lang, setLang] = useState("en");
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const width = useWindowWidth();
  const isDesktop = width >= 768;

  const isFarsi = lang === "fa";
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? "bg-dark text-white" : "bg-transparent text-dark"} min-vh-100 `}>
      <Router>
        <div className="d-flex ">
          {/* Sidebar */}
          <Sidebar
            
            isFarsi={isFarsi}
            darkMode={darkMode}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          {/* Main Content */}
          <div
            className="flex-grow-1 "
             style={{
              marginRight: isDesktop && isFarsi ? "250px" : "0",
              marginLeft: isDesktop && !isFarsi ? "250px" : "0",
              backgroundImage: `url(${sidebarBg})`,
              backgroundSize: "cover",
              backgroundPosition: "1% 1%",
              width:"100%",
              height:"100vh",
              overflow:"auto",
              position:"relative",
              transition: "margin 0.5s ease-in-out",
            }}
          >

            <div className={`container-fluid px-5 px-md-4 ${isFarsi ? "text-end" : "text-start"}`} dir={isFarsi ? "rtl" : "ltr"}>
              {/* Header/Nav */}
              <div className="d-flex justify-content-between align-items-center  pt-3">
               
                <nav className=" d-flex gap-3 flex-wrap align-items-center">
                  <Link className= {` nav-link px-4 ${darkMode ? "text-white" : "text-dark"}`} to="/">
                    {isFarsi ? "خانه" : "Home"}
                  </Link>
                  <Link className={`nav-link px-2 ${darkMode ? "text-white" : "text-dark"}`} to="/projects">
                    {isFarsi ? "درمورد من" : "About Me"}
                  </Link>
                  <Link className={`nav-link px-2 ${darkMode ? "text-white" : "text-dark"}`} to="/contact">
                    {isFarsi ? "تماس" : "Contact"}
                  </Link>
                </nav>

                <div>
                  <button className="btn btn-sm me-2" onClick={toggleTheme}>
                    <i className={`bi ${darkMode ? "bi-sun-fill" : "bi-moon-fill"} fs-5 ${darkMode ? "text-white" : "text-dark"}`}></i>
                  </button>

                  <RiEnglishInput className="me-2" style={{ cursor: "pointer" }} onClick={() => setLang("en")} />
                  <button
                    className={`btn ${darkMode ? "text-white" : "text-dark"} border-0`}
                    onClick={() => setLang("fa")}
                    style={{ background: "transparent" }}
                  >
                    فا
                  </button>
                </div>
              </div>

              {/* Routes */}
              <Routes>
                <Route path="/" element={<Home isFarsi={isFarsi} darkMode={darkMode} />} />
                <Route path="/projects" element={<Projects isFarsi={isFarsi} darkMode={darkMode} />} />
                <Route path="/contact" element={<Contact isFarsi={isFarsi} darkMode={darkMode} />} />
                <Route path="/" element={<Home isFarsi={isFarsi} darkMode={darkMode} />} />

              </Routes>

              {/* Footer */}
              <footer className="pt-4 border-top mt-5 px-4">
                <p>{isFarsi ? "© ۲۰۲۵ همه حقوق محفوظ است." : "© 2025 All rights reserved."}</p>
              </footer>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}
