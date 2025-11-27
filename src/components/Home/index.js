import { Link } from "react-router-dom";

import Header from "../Header";

import './index.css';

const Home = () => (
  <div className="home-container">
    <Header />

    
    <div className="content">
      <img
        className="mobile-profile-pic"
        src="https://res.cloudinary.com/da4a06plx/image/upload/v1761035633/02_cropedcopy_nrou0s.jpg"
        alt="Profile"
      />
      <div className="text-section">
        <h1>Hi, I'm Shibili</h1>
        <h2>MERN Stack Developer</h2>
        <p className="job-desc">
          Passionate about developing efficient, user-friendly web applications
          using the MERN stack. Always eager to learn, build, and grow with
          modern technologies.
        </p>

        <div className="action-container">
          <button
            className="download-btn"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1kCmSCP54YSALhRAsZq4aLzi3l6UxBOOy/view?usp=sharing",
                "_blank"
              )
            }
          >
            Download CV
          </button>

          <div className="icons">
            <span
              className="icon linkedin"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mohammed-shibili-k/",
                  "_blank"
                )
              }
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </span>
            <span
              className="icon github"
              onClick={() =>
                window.open("https://github.com/Shibili8/", "_blank")
              }
              title="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </span>
            <span
              className="icon gmail"
              onClick={() => (window.location.href = "mailto:shibilieight@gmail.com")}
              title="Gmail"
            >
              <i className="fa-solid fa-envelope"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="profile-pic">
        <img
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1761035532/001_croped_tqw6fe.jpg"
            alt="Profile"
        />
    </div>

    </div>

    
    <section className="about-section">
      <h2>About Me</h2>
      <h3>I'm Mohammed Shibili K</h3>
      <p>
        I'm a passionate MERN Stack Developer with over 600 hours of hands-on coding experience, having successfully built and deployed 24 full-stack web applications. I specialize in developing responsive, scalable, and user-centric applications using MongoDB, Express.js, React.js, and Node.js.
I’m proficient in creating and integrating RESTful APIs, implementing secure authentication using JWT, and following Git-based workflows. I focus heavily on performance optimization, clean code practices, and delivering seamless user experiences.
      </p>
      <div className="coding-container">
        <div className="each-data-container">
            <h1 className="each-data-heading">24+</h1>
            <p className="each-data-description">Rigourous Assignments and Projects</p>
        </div>
        <div className="each-data-container">
            <h1 className="each-data-heading">600+</h1>
            <p className="each-data-description">Coding Hours</p>
        </div>
      </div>
      <div className="hire-container">
              <p className="hire-description">If you're interested in my profile and would like to hire me, please click the button below.</p>
              <Link to="/contact" className="more-item-link">
                <button type="button" className="hire-me-btn">Hire me</button>
              </Link>
      </div>
      
      <h3 className="skills-title">Technical Skills</h3>
  <div className="skills-container">
    <div className="skill-card">
      <i className="fa-brands fa-html5 skill-icon"></i>
      <span>HTML</span>
    </div>
    <div className="skill-card">
      <i className="fa-brands fa-css3-alt skill-icon"></i>
      <span>CSS</span>
    </div>
    <div className="skill-card">
      <i className="fa-brands fa-js skill-icon"></i>
      <span>JavaScript</span>
    </div>
    <div className="skill-card">
      <i className="fa-brands fa-react skill-icon"></i>
      <span>React JS</span>
    </div>
    <div className="skill-card">
      <i className="fa-brands fa-python skill-icon"></i>
      <span>Python</span>
    </div>
    <div className="skill-card">
      <i className="fa-brands fa-node skill-icon"></i>
      <span>Node JS</span>
    </div>
    <div className="skill-card">
      <i className="fa-solid fa-database skill-icon"></i>
      <span>SQLite</span>
    </div>
    <div className="skill-card">
      <i className="fa-brands fa-envira skill-icon"></i> 
      <span>MongoDB</span>
    </div>
    <div className="skill-card">
    <i className="fa-brands fa-git-alt skill-icon"></i>
    <span>Git</span>
  </div>
  </div>
    </section>

    
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">

        <div className="project-card">
          <div>
          <h3>HRMS – Human Resource Management System</h3>
          <p>A fully responsive Human Resource Management System where organisations can manage employees, teams, assignments, and activity logs with secure authentication and an intuitive dashboard.</p>
          </div>
          <div className="app-link-container">
          <a
            href="https://hrms-mohammed-shibili-k.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="app-link"
          >
            View App
          </a>
          <a
            href="https://github.com/Shibili8/HRMS-Frontend.git"
            target="_blank"
            rel="noreferrer"
            className="app-link"
          >
            View on GitHub
          </a>
          </div>
        </div>

        <div className="project-card">
          <div>
          <h3>Insta Share (Instagram Clone)</h3>
          <p>Implemented responsive Streaming Application like Instagram Clone where users can log in and see a list of
stories and posts, user can also search posts with post caption, user can be able to like and dislike the post and
also view the user specific posts.</p>
            </div>
              <div className="app-link-container">
          <a
            href="https://shibiliinstaclo.ccbp.tech"
            target="_blank"
            rel="noreferrer"
            className="app-link"
          >
            View App
          </a>
          <a
            href="https://github.com/Shibili8/Insta-Share.git"
            target="_blank"
            rel="noreferrer"
            className="app-link"
          >
            View on GitHub
          </a>
          </div>
        </div>
        <div className="project-card">
          <div>
          <h3>Nxt Trendz ( ECommerce App)</h3>
          <p>Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where
users can login and can see list of products with search, filters, sort by, etc..</p>
          </div>
          <div className="app-link-container">
          <a
            href="https://shibilinxttrdz.ccbp.tech"
            target="_blank"
            rel="noreferrer"
            className="app-link"
          >
            View App
          </a>
          <a
            href="https://github.com/Shibili8/nxttrends-online-shopping-app.git"
            target="_blank"
            rel="noreferrer"
            className="app-link"
          >
            View on GitHub
          </a>
          </div>
        </div>
        
      </div>
      <Link to="/projects" className="more-item-link">
              <button className="click-more-btn" type="button">
                Click here to explore more projects
            </button>
        </Link>
    </section>

    
    <section className="certificates-section">
      <h2>Certificates</h2>
      <div className="certificates-container">
        <div className="certificate-card">
          <h3>Industry Ready Certificate</h3>
          <p>Issued date - 08 JUN 2025 </p>
          <a
            href="https://certificates.ccbp.in/intensive/irc?id=CT1C5YY9HU"
            target="_blank"
            rel="noreferrer"
            className="app-link"
          >
            View Certificate
          </a>
        </div>
        <div className="certificate-card">
          <h3>React JS</h3>
          <p>Issued date - 09 MAY 2025  </p>
          <a
            href="https://certificates.ccbp.in/intensive/react-js?id=SSJLIXJDUN"
            target="_blank"
            rel="noreferrer"
            className="app-link"
          >
            View Certificate
          </a>
        </div>
        <div className="certificate-card">
          <h3>Node JS</h3>
          <p>Issued date - 07 MAR 2025  </p>
          <a
            href="https://certificates.ccbp.in/intensive/node-js?id=QIZMGSOMMS"
            target="_blank"
            rel="noreferrer"
            className="app-link"
          >
            View Certificate
          </a>
        </div>
        
      </div>
      <Link to="/certificates" className="more-item-link">
              <button className="click-more-btn" type="button">
                Click here to explore more certificates
            </button>
        </Link>
    </section>
  </div>
);

export default Home;
