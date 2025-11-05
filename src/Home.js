import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

export default function Home({ isFarsi, darkMode }) {
  return (
    <Layout isFarsi={isFarsi} darkMode={darkMode}>
      {/* Globe Header */}
    

      {/* Hero Section */}
      <section
        className="d-flex flex-column flex-md-row align-items-center justify-content-between text-center text-md-start  "
        style={{
          minHeight: "400px",
          height:"auto",
        
        }}
      >
        {/* متن معرفی */}
        <div className="flex-grow-1" style={{ maxWidth: "600px", }}>
          <h1
            className="fw-bold mb-4 "
            style={{ fontSize: "2.5rem", color: darkMode ? "#fff" : "#111" }}
          >
            {isFarsi
              ? "سلام، من سعید واحدی فرد هستم"
              : "Hi, I'm Saeed Vahedi Fard"}
          </h1>
          <p
            className="mb-4 "
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: darkMode ? "#bbb" : "#555",
            }}
          >
            {isFarsi
              ? "توسعه‌دهنده وب و علاقه‌مند به طراحی مینیمال. تجربه ساخت وب‌سایت‌های سریع، واکنش‌گرا و کاربرپسند دارم."
              : "Web developer passionate about minimal design. Experienced in building fast, responsive, and user-friendly websites."}
          </p>

          <div>
            
            <Link to="/projects" className={`btn bg-primary text-white btn-lg me-3 ms-3 btn-custom  ${darkMode ? "border-light text-white" : "border-dark"}`}>
              {isFarsi ?"دیدن پروژه‌ها" : "ٰView projects"}
            </Link>
            <Link to="/contact" className={`btn btn-lg  ${darkMode ? "border-light text-white" : "border-dark"}`}>
              {isFarsi ? "تماس با من" : "Contact Me"}
            </Link>
          </div>
        </div>

        {/* Rocket Illustration */}
        <div className="mt-5 mt-md-0">
          <img
            src="/illustration-rocket.svg"
            alt="rocket illustration"
             className="rocket-float rocket-img"
            style={{ width: "320px", maxWidth: "90%" }}
          />
        </div>
      </section>
    </Layout>
  );
}
