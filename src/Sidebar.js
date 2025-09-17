import React, { useState, useEffect } from "react";
import './Sidebar.css';
import sidebarBg from "./sidebarBackground2.png";

export default function Sidebar({ isFarsi, darkMode, isOpen, onClose }) {
  const skills = [
    { name: "JavaScript", percent: 80, color: "bg-info" },
    { name: "React", percent: 75, color: "bg-info" },
    { name: "HTML/CSS", percent: 90, color: "bg-info" },
    { name: "Node.js", percent: 70, color: "bg-info" },
    { name: "Web Design", percent: 70, color: "bg-info" },
    { name: "Bootstrap", percent: 70, color: "bg-info" }
  ];

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // وقتی کامپوننت mount شد، انیمیشن رو فعال کن
    setAnimated(true);
  }, []);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && window.innerWidth < 768 && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          onClick={onClose}
          style={{ zIndex: 1040 }}
        />
      )}

      {/* Sidebar */}
      <div
        className={`position-fixed top-0 ${darkMode ? "bg-dark text-white" : "bg-primary text-white"} p-3 shadow`}
        style={{
          width: "250px",
          height: "100vh",
          zIndex: 1041,
          backgroundImage: `url(${sidebarBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          right: isFarsi ? 0 : "auto",
          left: isFarsi ? "auto" : 0,
          transform:
            isOpen || window.innerWidth >= 768
              ? "translateX(0)"
              : isFarsi
              ? "translateX(100%)"
              : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="text-center">
          <img
            src="/aboutMe.jpg"
            alt="My Profile"
            className="img-thumbnail  mb-3"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
            }}
          />
          <h5 className="mb-1 pt-2">{isFarsi ? "سعید واحدی" : "Saeid Vahedi"}</h5>
          <p className="small pt-2">web@saeidvahedi.ir</p>
          <p className="small">{isFarsi ? "۰۹۱۲۸۶۵۸۱۱۰" : "+989128658110"}</p>

          {/* Social icons */}
          <div className="d-flex justify-content-around mt-3 px-4">
            <a href="https://wa.me/989128658110" target="_blank" rel="noreferrer" className="text-white">
              <i className="bi bi-whatsapp fs-5"></i>
            </a>
            <a href="https://linkedin.com/in/saeed-vahedifard" target="_blank" rel="noreferrer" className="text-white">
              <i className="bi bi-linkedin fs-5"></i>
            </a>
            <a href="https://t.me/svahedifarding" target="_blank" rel="noreferrer" className="text-white">
              <i className="bi bi-telegram fs-5"></i>
            </a>
          </div>

          {/* Skills */}
          <div className={`container my-5 ${darkMode ? "bg-dark text-white" : ""}`}>
            <h4 className="mb-4 text-bold">{isFarsi ? "مهارت‌ها" : "Skills"}</h4>
            <div className="row">
              {skills.map((skill, index) => (
                <div key={index} className="mb-2">
                  <div className="d-flex justify-content-between ">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="progress">
                    <div
                      className={`progress-bar justify-content-between ${skill.color}`}
                      role="progressbar"
                      style={{
                        width: animated ? `${skill.percent}%` : "0%",
                        transition: "width 1.5s ease-in-out"
                      }}
                    >
                      {skill.percent}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
