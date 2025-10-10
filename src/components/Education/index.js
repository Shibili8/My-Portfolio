import { useEffect } from "react";
import Header from "../Header";
import "./index.css";

const Education = () => {
  useEffect(() => {
  const cards = document.querySelectorAll(".education-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card, i) => {
    card.classList.add(i % 2 === 0 ? "fade-left" : "fade-right");
    observer.observe(card);
  });

  return () => observer.disconnect();
}, []);

  return (
    <div className="edu-container">
      <Header />
      <div className="education-container">
        <h1 className="edu-title fade-slide">Education Details</h1>

        <div className="education-card fade-slide glow-hover">
          <div className="education-details">
            <h2 className="institute-name">Nxtwave Disruptive Technologies</h2>
            <p className="education-course">
              Industry Ready Certification in Full Stack Development
            </p>
            <p className="education-duration">Aug 2024 - Ongoing</p>
          </div>
          <img
            className="institute-img"
            alt="Nxtwave"
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1759835668/nxtwave_gkavcp.jpg"
          />
        </div>

        <div className="education-card fade-slide glow-hover">
          <div className="education-details">
            <h2 className="institute-name">Central University of Kerala</h2>
            <p className="education-course">Master of Arts in Economics (7.03 CGPA)</p>
            <p className="education-duration">2021 - 2023</p>
          </div>
          <img
            className="institute-img"
            alt="Central University of Kerala"
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1759835868/cuk_gz1gdh.webp"
          />
        </div>

        <div className="education-card fade-slide glow-hover">
          <div className="education-details">
            <h2 className="institute-name">
              EMEA College of Arts and Science Kondotty, Malappuram
            </h2>
            <p className="education-course">Bachelor of Arts in Economics (69.3%)</p>
            <p className="education-duration">2018 - 2021</p>
          </div>
          <img
            className="institute-img"
            alt="EMEA College"
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1759835668/emea_ookeiw.jpg"
          />
        </div>

        <div className="education-card fade-slide glow-hover">
          <div className="education-details">
            <h2 className="institute-name">GHSS Pookkottur, Malappuram</h2>
            <p className="education-course">Intermediate_MEC (89.25%)</p>
            <p className="education-duration">2016 - 2018</p>
          </div>
          <img
            className="institute-img"
            alt="GHSS Pookkottur"
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1759835670/ghsspktr_iqtemv.png"
          />
        </div>

        <div className="education-card fade-slide glow-hover">
          <div className="education-details">
            <h2 className="institute-name">VHMHSS Morayur, Malappuram</h2>
            <p className="education-course">Secondary School Of Certificate (96.0%)</p>
            <p className="education-duration">2015 - 2016</p>
          </div>
          <img
            className="institute-img"
            alt="VHMHSS Morayur"
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1759835668/vhmhss-morayur-school_xdmqo0.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
