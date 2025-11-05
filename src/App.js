
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { RiEnglishInput } from "react-icons/ri";

import Sidebar from "./Sidebar";
import Home from "./Home";
import Projects from "./AboutMe";
import Contact from "./Contact";
import useWindowWidth from "./hooks/useWindowWidth";
import "./Sidebar.css";
import "./index.css";
import "./App.css";
import sidebarBg from "./mainBg.png";

const basename = process.env.REACT_APP_BASENAME || process.env.PUBLIC_URL || "/";

export default function App() {
  const [lang, setLang] = useState("en");
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const width = useWindowWidth();
  const isDesktop = width >= 768;
  const isFarsi = lang === "fa";

  const toggleTheme = () => setDarkMode((s) => !s);

  useEffect(() => {
    setSidebarOpen(isDesktop);
    if (isDesktop) setMobileNavOpen(false);
  }, [isDesktop]);

  useEffect(() => {
    if (mobileNavOpen) setSidebarOpen(false);
  }, [mobileNavOpen]);

  useEffect(() => {
    if (sidebarOpen) setMobileNavOpen(false);
  }, [sidebarOpen]);

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden"; // ✅ فقط وقتی منو موبایل بازه
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileNavOpen]);
  

  const sidebarDirectionClass = isFarsi ? "right" : "left";
  const sidebarClassName = `${sidebarDirectionClass} ${sidebarOpen ? "open" : ""}`;

  return (
    <div
      className={`${
        darkMode ? "bg-dark text-white" : "bg-transparent text-dark"
      } min-vh-100`}
    >
      <Router basename={basename}>
        <div className="d-flex">
          {/* Sidebar */}
          <Sidebar
            isFarsi={isFarsi}
            darkMode={darkMode}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            className={sidebarClassName}
          />

          {/* Main Content */}
          <div
            className="flex-grow-1"
            style={{
              marginRight: isDesktop && isFarsi ? "250px" : "0",
              marginLeft: isDesktop && !isFarsi ? "250px" : "0",
              backgroundImage: `url(${sidebarBg})`,
              backgroundSize: "cover",
              backgroundPosition: "1% 1%",
              width: "100%",
              minHeight: "100vh",
              height: "auto",
              overflow:"auto",
              position: "relative",
              transition: "margin 0.5s ease-in-out",
            }}
          >
            <div
              className={`container-fluid px-5 px-md-5 ${
                isFarsi ? "text-end" : "text-start"
              }`}
              dir={isFarsi ? "rtl" : "ltr"}
            >
              {/* Header */}
              <div className="d-flex justify-content-between align-items-center pt-3 position-relative header-row">
                {/* Mobile hamburger */}
                {!isDesktop && (
                  <button
                    className="btn border-0 position-fixed"
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    style={{
                      top: "0.8rem",
                      [isFarsi ? "left" : "right"]: "1rem",
                      zIndex: 2000,
                    }}
                  >
                    <i
                      className={`bi bi-list fs-3 ${
                        darkMode ? "text-white" : "text-dark"
                      }`}
                    ></i>
                  </button>
                )}

                {/* Desktop nav */}
                <nav className="desktop-nav  d-flex gap-3 flex-wrap align-items-center  mx-auto ">
                  <Link
                    className={`nav-link   px-3 ${
                      darkMode ? "text-white" : "text-dark"
                    }`}
                    to="/"
                  >
                    {isFarsi ? "خانه" : "Home"}
                  </Link>
                  <Link
                    className={`nav-link px-2 ${
                      darkMode ? "text-white" : "text-dark"
                    }`}
                    to="/projects"
                  >
                    {isFarsi ? "درمورد من" : "About Me"}
                  </Link>
                  <Link
                    className={`nav-link px-2  ${
                      darkMode ? "text-white" : "text-dark"
                    }`}
                    to="/contact"
                  >
                    {isFarsi ? "تماس" : "Contact"}
                  </Link>
                </nav>

                {/* Header controls (فقط دسکتاپ) */}
                {isDesktop && (
                  <div className="d-flex align-items-center header-controls">
                    <button
                      className="btn  btn-sm me-2"
                      onClick={toggleTheme}
                      aria-label={isFarsi ? "تغییر تم" : "Toggle theme"}
                    >
                      <i
                        className={`bi  ${
                          darkMode ? "bi-sun-fill" : "bi-moon-fill"
                        } fs-5 ${darkMode ? "text-white" : "text-dark"}`}
                      ></i>
                    </button>

                    <RiEnglishInput
                      className="bii me-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => setLang("en")}
                      title="English"
                    />

                    <button
                      className={`btn bii ${
                        darkMode ? "text-white" : "text-dark"
                      } border-0`}
                      onClick={() => setLang("fa")}
                      style={{ background: "transparent" }}
                      title="فارسی"
                    >
                      فا
                    </button>
                  </div>
                )}
              </div>
               {/* Mobile Navbar + Overlay */}
{!isDesktop && (
  <>
    {/* ✅ Mobile Sidebar */}
    <div
      className={`mobile-navbar position-fixed top-0 ${
        isFarsi ? "start-0" : "end-0"
      } vh-100 shadow-lg`}
      style={{
        width: mobileNavOpen ? "250px" : "0",
        backgroundColor: darkMode ? "#222" : "#f8f9fa",
        overflow: "hidden",
        zIndex: 1050,
        transition: "width 0.4s ease-in-out",
      }}
    >
      <div className="p-4">
      

        <nav className="d-flex flex-column gap-3">
          <Link
            className={`nav-link ${darkMode ? "text-white" : "text-dark"}`}
            to="/"
            onClick={() => setMobileNavOpen(false)}
          >
            {isFarsi ? "خانه" : "Home"}
          </Link>
          <Link
            className={`nav-link ${darkMode ? "text-white" : "text-dark"}`}
            to="/projects"
            onClick={() => setMobileNavOpen(false)}
          >
            {isFarsi ? "درمورد من" : "About Me"}
          </Link>
          <Link
            className={`nav-link ${darkMode ? "text-white" : "text-dark"}`}
            to="/contact"
            onClick={() => setMobileNavOpen(false)}
          >
            {isFarsi ? "تماس" : "Contact"}
          </Link>
        </nav>

        {/* کنترل‌های زبان و تم */}
        <div className="d-flex justify-content-center align-items-center gap-3 mt-4 border-top pt-3">
          <button
            className="btn btn-sm"
            onClick={toggleTheme}
            aria-label={isFarsi ? "تغییر تم" : "Toggle theme"}
          >
            <i
              className={`bi ${
                darkMode ? "bi-sun-fill" : "bi-moon-fill"
              } fs-5 ${darkMode ? "text-white" : "text-dark"}`}
            ></i>
          </button>

          <RiEnglishInput
            className={`bii ${darkMode ? "text-white" : "text-dark"}`}
            style={{ cursor: "pointer" }}
            onClick={() => setLang("en")}
            title="English"
          />

          <button
            className={`btn bii ${darkMode ? "text-white" : "text-dark"} border-0`}
            onClick={() => setLang("fa")}
            style={{ background: "transparent" }}
            title="فارسی"
          >
            فا
          </button>
        </div>
      </div>
    </div>

    {/* ✅ Overlay برای بستن منو با لمس بیرون */}
    {mobileNavOpen && (
      <div
        className="mobile-overlay"
        onClick={() => setMobileNavOpen(false)}
      ></div>
    )}
  </>
)}

              
              {/* Routes */}
              <Routes>
                <Route
                  path="/"
                  element={<Home isFarsi={isFarsi} darkMode={darkMode} />}
                />
                <Route
                  path="/projects"
                  element={<Projects isFarsi={isFarsi} darkMode={darkMode} />}
                />
                <Route
                  path="/contact"
                  element={<Contact isFarsi={isFarsi} darkMode={darkMode} />}
                />
              </Routes>

              {/* Footer */}
              <footer className="pt-4 border-top mt-5 px-4">
                <p>
                  {isFarsi
                    ? "© ۲۰۲۵ همه حقوق محفوظ است."
                    : "© 2025 All rights reserved."}
                </p>
              </footer>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}
