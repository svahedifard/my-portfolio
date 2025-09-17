import React from "react";
import Layout from "./Layout";

// 📌 لیست پروژه‌ها (فارسی + انگلیسی)
const projects = [
  {
    title: { fa: "سایت شرکتی", en: "CO Website" },
    description: {
      fa: "طراحی و توسعه با Bootstrap و Scss",
      en: "Developed with Bootstrap and Scss"
    },
    image: "/project1.png",
    link: "http://ramzinegostar.ir"
  },
  {
    title: { fa: "سایت شخصی", en: "Personal Website" },
    description: {
      fa: "طراحی با Html & Javascript",
      en: "Built with HTML & Javascript"
    },
    image: "/project2.png",
    link: "https://saeidvahedi.ir/#about"
  }
];

export default function Hero({ isFarsi, darkMode }) {
  return (
    <Layout isFarsi={isFarsi} darkMode={darkMode}>
      {/* Hero Section */}
      <h3>
        {isFarsi
          ? "سلام! من یک توسعه‌دهنده وب هستم"
          : "Hello! I'm a web developer"}
      </h3>
      <p className="lead">
        {isFarsi
          ? "به وب‌سایت شخصی من خوش آمدید. در اینجا می‌توانید پروژه‌ها، مهارت‌ها و راه‌های ارتباطی من را ببینید. من به شما کمک میکنم با قیمت منطقی کسب و کار خود را در فضای اینترنت توسعه دهید. از وب سایت فروشگاهی گرفته تا خدماتی و کسب و کار، من اینجا در کنار شما هستم ."
          : "Welcome to my personal website. Here you can see my projects, skills, and contact info. I help you build a brand for your business at an affordable price."}
      </p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300" style={{ width: "100%", display: "block" }} > <path fill="#406060" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" ></path> </svg>
      {/* Projects Section with animation */}
      <section id="projects" className="container my-5">
        <h2>{isFarsi ? "پروژه‌ها" : "Projects"}</h2>
        <div className="row">
          {projects.map((p, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card h-100 shadow-sm card-animate">
                <img
                  src={p.image}
                  className="card-img-top"
                  alt={isFarsi ? p.title.fa : p.title.en}
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {isFarsi ? p.title.fa : p.title.en}
                  </h5>
                  <p className="card-text">
                    {isFarsi ? p.description.fa : p.description.en}
                  </p>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn border-dark  mx-2"
                  >
                    {isFarsi ? "مشاهده پروژه" : "View Project"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inline styles for card animations */}
      <style>{`
        .card-animate {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInUp 0.8s ease forwards;
        }

        .card-animate:nth-child(1) { animation-delay: 0.2s; }
        .card-animate:nth-child(2) { animation-delay: 0.4s; }
        .card-animate:nth-child(3) { animation-delay: 0.6s; }
        .card-animate:nth-child(4) { animation-delay: 0.8s; }
        .card-animate:nth-child(5) { animation-delay: 1s; }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .card-animate {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </Layout>
  );
}
