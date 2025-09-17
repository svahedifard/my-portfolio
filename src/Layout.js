import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar"; // adjust path if Sidebar is in a different folder


export default function Layout({ children, isFarsi, darkMode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) setSidebarOpen(true);
        else setSidebarOpen(false);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return (
      <>
        {/* Hamburger button */}
        <button
          className={`btn d-md-none position-fixed top-0 ${
            isFarsi ? "end-0 me-3" : "start-0 ms-3"
          } m-3 z-3`}
          onClick={() => setSidebarOpen(true)}
        >
          <i className={`bi bi-list fs-3 ${darkMode ? "text-white" : "text-dark"}`}></i>

        </button>
  
        {/* Sidebar */}
        <Sidebar
          isFarsi={isFarsi}
          darkMode={darkMode}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
  
        {/* Main content with responsive padding */}
        <div
          className={`ccontainer-fluid px-5 px-md-4`}
          style={{
            paddingTop: "60px",
            paddingLeft: !isFarsi && window.innerWidth >= 768 ? "260px" : "0",
            paddingRight: isFarsi && window.innerWidth >= 768 ? "260px" : "0",
            transition: "padding 0.3s ease",
          }}
        >
          {children}
        </div>
      </>
    );
  }
  


