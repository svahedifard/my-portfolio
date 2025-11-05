
import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import sidebarBg from "./sidebarBackground2.png";

export default function Sidebar({ isFarsi, darkMode, isOpen, onClose }) {
  const skills = [
    { name: "JavaScript", percent: 80 },
    { name: "React", percent: 75 },
    { name: "HTML/CSS", percent: 90 },
    { name: "Node.js", percent: 70 },
    { name: "Web Design", percent: 70 },
    { name: "Bootstrap", percent: 70 },
  ];

  const [animated, setAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => (typeof window !== "undefined" ? window.innerWidth < 768 : false)
  );

  // تنظیم ارتفاع متغیر --vh برای iOS و موبایل
  useEffect(() => {
    const setVh = () => {
      if (typeof window === "undefined") return;
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  // تشخیص موبایل
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // غیرفعال کردن اسکرول هنگام باز بودن منو در موبایل
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isOpen, isMobile]);

  // انیمیشن نوار مهارت
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => setAnimated(true), 60);
      return () => clearTimeout(t);
    } else {
      setAnimated(false);
    }
  }, [isOpen]);

  // بستن با ESC
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onKey = (e) => {
      if (e.key === "Escape" && isOpen && isMobile) onClose && onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, isMobile, onClose]);

  const shouldShowSidebar = isOpen || !isMobile;

  return (
    <>
      {/* Overlay موبایل */}
      {isMobile && shouldShowSidebar && isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          onClick={onClose}
          style={{
            zIndex: 1040,
            background: "rgba(0,0,0,0.45)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
  className={`position-fixed top-0 p-3 shadow text-white`}
  style={{
    width: "250px",
    height: "calc(var(--vh, 1vh) * 100)",
    zIndex: 1041,
    backgroundColor: "rgb(40,60,60)",
    backgroundImage: `url(${sidebarBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    right: isFarsi ? 0 : "auto",
    left: isFarsi ? "auto" : 0,
    transform: shouldShowSidebar
      ? "translateX(0)"
      : isFarsi
      ? "translateX(100%)"
      : "translateX(-100%)",
    transition: "transform 0.3s ease-in-out",
    overflowY: isMobile ? "auto" : "hidden",   // ✅ فقط موبایل اسکرول دارد
    WebkitOverflowScrolling: "touch",
  }}


        aria-hidden={!shouldShowSidebar}
        aria-expanded={shouldShowSidebar}
        role="complementary"
      >
        <div className="text-center">
          <img
            src="/aboutMe.jpg"
            alt="My Profile"
            className="img-thumbnail mb-3"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
            }}
          />
          <h5 className="mb-1 pt-2">
            {isFarsi ? " سعید واحدی فرد" : "Saeid Vahedi Fard"}
          </h5>
          <p className="small pt-2">web@saeidvahedi.ir</p>
          <p className="small">{isFarsi ? "۰۹۱۲۸۶۵۸۱۱۰" : "+989128658110"}</p>

          {/* Social Icons */}
          <div className="d-flex justify-content-around mt-3 px-4">
            <a
              href="https://t.me/svahedifarding"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <i className="bi bi-telegram  fs-5"></i>
            </a>
            <a
              href="https://linkedin.com/in/saeed-vahedifard"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <i className="bi bi-linkedin fs-5"></i>
            </a>
            <a
              href="https://wa.me/989128658110"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <i className="bi bi-whatsapp fs-5"></i>
            </a>
          </div>

          {/* Skills */}
          <div className="container my-3">
            <h6 className="mb-3 fw-bold ">
              {isFarsi ? "مهارت‌ها" : "Skills"}
            </h6>
            <div className="row">
              {skills.map((skill, index) => (
                <div key={index} className="mb-3 w-100">
                  <div className="d-flex justify-content-between">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div
                    className="progress"
                    style={{
                      height: "10px",
                      backgroundColor: "rgba(255,255,255,0.09)",
                    }}
                  >
                    <div
                      className="progress-bar text-center fw-bold"
                      role="progressbar"
                      style={{
                        fontSize:"10px",
                        width: animated ? `${skill.percent}%` : "0%",
                        backgroundColor: "rgba(255,255,255,0.3",
                        transition: "width 1.5s ease-in-out",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
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
