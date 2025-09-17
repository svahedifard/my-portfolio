import React from "react";
import Layout from "./Layout";

export default function Contact({ isFarsi, darkMode }) {
  return (
    <Layout isFarsi={isFarsi} darkMode={darkMode}>
      <h2>{isFarsi ? "تماس با من" : "Contact Me"}</h2>
      <div className="container my-4">
  <div className="row justify-content-left">
    <div className="col-12 col-lg-6">
      <form action="https://formsubmit.co/web@saeidvahedi.ir" method="POST">
        <div className="mb-3">
          <label className="form-label">{isFarsi ? "نام" : "Name"}</label>
          <input type="text" name="name" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">{isFarsi ? "ایمیل" : "Email"}</label>
          <input type="email" name="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">{isFarsi ? "پیام" : "Message"}</label>
          <textarea name="message" className="form-control" rows="4" required></textarea>
        </div>
        <button
          type="submit"
          className={`btn ${darkMode ? "border-light text-white" : "border-dark"}`}
        >
          {isFarsi ? "ارسال" : "Send"}
        </button>
      </form>
    </div>
  </div>
  <div className="mb-3 pt-5 " >
   <h6>{isFarsi ? "  شبکه‌های اجتماعی" : "Follow Me"}</h6> 
   <div className="d-flex  mt-3 px-6 ">
      <a href="https://wa.me/989128658110" target="_blank" rel="noreferrer" className= { darkMode ? "text-white" : "text-dark"}>
        <i className="bi bi-whatsapp fs-5 p-2"></i>
      </a>
      <a href="https://linkedin.com/in/saeed-vahedifard" target="_blank" rel="noreferrer" className={darkMode ? "text-white" : "text-dark"}>
        <i className="bi bi-linkedin fs-5 p-2"></i>
      </a>
      <a href="https://t.me/svahedifarding" target="_blank" rel="noreferrer" className={darkMode ? "text-white" : "text-dark"}>
        <i className="bi bi-telegram fs-5 p-2"></i>
      </a>
    </div> </div>
</div>

    </Layout>
  );
}
