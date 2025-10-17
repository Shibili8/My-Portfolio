import Header from "../Header";
import "./index.css";

const certificates = [
  {
    id: 1,
    title: "React JS",
    issueDate: "Issued: May 2025",
    link: "https://certificates.ccbp.in/intensive/react-js?id=SSJLIXJDUN",
  },
  {
    id: 2,
    title: "Node.js",
    issueDate: "Issued: Mar 2025",
    link: "https://certificates.ccbp.in/intensive/node-js?id=QIZMGSOMMS",
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    issueDate: "Issued: Feb 2025",
    link: "https://certificates.ccbp.in/intensive/javascript-essentials?id=NYRPPBQYKO",
  },
  {
    id: 4,
    title: "Responsive Web Design using Flexbox",
    issueDate: "Issued: Feb 2025",
    link: "https://certificates.ccbp.in/intensive/flexbox?id=XDHYRBENAM",
  },
  {
    id: 11,
    title: "Developer Foundations",
    issueDate: "Issued: Jan 2025",
    link: "https://certificates.ccbp.in/intensive/developer-foundations?id=DPFJAUUEFO",
  },
  {
    id: 5,
    title: "Build Your Own Dynamic Web Application",
    issueDate: "Issued: Dec 2024",
    link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=UBUUAIXYNH",
  },
  {
    id: 6,
    title: "Introduction to Databases",
    issueDate: "Issued: Nov 2024",
    link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=VLDZVIVGZR",
  },
  {
    id: 7,
    title: "Programming Foundations with Python",
    issueDate: "Issued: Nov 2024",
    link: "https://certificates.ccbp.in/intensive/programming-foundations?id=DTWTFPUXLU",
  },
  {
    id: 8,
    title: "XPM 4.0 Fundamentals",
    issueDate: "Issued: Oct 2024",
    link: "https://certificates.ccbp.in/intensive/xpm-4-0-fundamentals?id=HHYOGAZCRP",
  },
  {
    id: 9,
    title: "Build Your Own Responsive Website",
    issueDate: "Issued: Sep 2024",
    link: "https://certificates.ccbp.in/intensive/responsive-website?id=KRANSEVDXJ",
  },
  {
    id: 10,
    title: "Build Your Own Static Website",
    issueDate: "Issued: Sep 2025",
    link: "https://certificates.ccbp.in/intensive/static-website?id=MEYIUKVZUQ",
  },
  
];

const Certificate = () => (
  <div className="certificate-page">
    <Header />
    <div className="certificate-container">
      <h1 className="certificate-title">Certificates</h1>

      
      <div className="highlight-section">
        <h2 className="highlight-title">
          Industry Ready Certification (IRC)
        </h2>
        <img
          className="highlight-image"
          src="https://res.cloudinary.com/da4a06plx/image/upload/v1759988771/IRC_mll7tv.png"
          alt="IRC Certificate"
        />
      </div>

      
      <div className="cert-list">
        {certificates.map((cert) => (
          <div className="cert-card" key={cert.id}>
            <h3 className="cert-name">{cert.title}</h3>
            <p className="cert-date">{cert.issueDate}</p>
            <button
              className="view-cert-btn"
              onClick={() => window.open(cert.link, "_blank")}
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Certificate;
