import { useEffect } from "react";
import Header from "../Header";
import "./index.css";

const projects = [
  {
    title: "Clothing E-Commerce Application",
    description:
      "Developed a fully responsive E-Commerce web application where users can browse products, apply filters, manage cart items, add to cart as guest or logged-in user, place orders, and reset passwords via email. Implemented secure authentication using JWT with HTTP-Only cookies and full cart synchronization.",
    
    concepts: [
      "Implemented protected routes and authentication flow using JWT tokens, HTTP-Only cookies, and React Router to ensure secure access to checkout and order success pages.",
      "Developed complete product filtering — search, category, size, and price range — using optimized MongoDB query operations.",
      "Integrated SendGrid email service to implement Forgot Password and Reset Password features with secure token-based verification.",
      "Built a dual cart system: guest cart using localStorage and logged-in cart synced with MongoDB, ensuring real-time cart count updates.",
      "Designed responsive UI using Tailwind CSS and reusable components for Home, Products, Cart, Checkout, and Order Success pages.",
      "Implemented backend REST APIs for authentication, products, cart management, and order processing using Node.js, Express, and MongoDB.",
      "Created a data seeding script to populate demo products into MongoDB for testing and development."
    ],

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "SendGrid",
      "JWT",
      "Git",
    ],

    link: "https://clothing-ecommerce-app-mohammed-shi.vercel.app"
  }
,
  {
    title: "HRMS – Human Resource Management System",
    description:
      "A fully responsive Human Resource Management System where organisations can manage employees, teams, assignments, and activity logs with secure authentication and an intuitive dashboard.",
    concepts: [
      "Implemented multiple routes for features like Login, Dashboard, Employees, Teams, and Logs using React Router.",
      "Built employee and team CRUD operations with validation, error handling, and mobile-responsive modals.",
      "Designed team assignment flow with the ability to add, update, and remove assigned employees.",
      "Integrated protected routes ensuring that only authenticated users can access internal pages.",
      "Used Axios to consume backend REST APIs for authentication, employees, teams, and logs.",
      "Implemented activity logging to track key user actions like employee creation, team updates, and assignments.",
      "Developed robust backend APIs using Express and Sequelize ORM with JWT-based authentication."
    ],
    technologies: [
      "React JS",
      "Tailwind CSS",
      "JavaScript",
      "Axios",
      "Node.js",
      "Express.js",
      "Sequelize ORM",
      "JWT",
      "Bcrypt",
      "PostgreSQL"
    ],
    link: "https://hrms-mohammed-shibili-k.vercel.app/"
  },
  {
    title: "Insta Share (Instagram Clone)",
    description:
      "Implemented responsive Streaming Application like Instagram Clone where users can log in and see a list of stories and posts, user can also search posts with post caption, user can be able to like and dislike the post and also view the user specific posts.",
    concepts: [
      "Implemented different routes for features like login, home, user profile, profile by using React Router components Route, Switch, Link.",
      "Implemented horizontal scrolling (In stories section) using React Third Party library called React Slick.",
      "Used Figma mockups to implement UI-rich and pixel-perfect React components.",
      "Used fetch to call REST APIs for authentication, list of posts, user profile, and posts search APIs.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React JS", "Bootstrap", "React Slick", "Figma", "Client Storage"],
    link: "https://shibiliinstaclo.ccbp.tech",
  },
  {
    title: "Nxt Trendz ( ECommerce App )",
    description:
      "Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc.. ",
    concepts: [
      "Authenticating and authorizing users by taking username, password and doing login POST HTTP API Call and implementing filters by sending them as query parameters to product api calls. ",
      "Persisted user login state by keeping jwt token in local storage, Sending it in headers of further api calls to authorize the user.",
      "Implemented Different pages and routes for Login, Products, Product details using React Router components Route, Switch, Link, props, state, lists, event handlers, form inputs.",
      "Custom responsive design",
    ],
    technologies: ["React JS", "JS", "CSS", "Bootstrap", "Routing", "REST API Calls", "Local Storage", "JWT Token", 
"Authorization", "Authentication"],
    link: "https://shibilinxttrdz.ccbp.tech",
  },
  {
    title: "Jobby App ",
    description:
      "Implemented Jobby App where users can log in and can see a list of jobs with search by Job title, filters based on Salary range and Employment type, etc",
    concepts: [
      "Desktop Application",
      "Authenticating by taking username, password and doing login post HTTP API Call. ",
      "Persisted user login state by keeping jwt token in client storage, Sending it in headers of further API calls to authorize the user.",
      "Implemented different routes for Login, Home, Jobs, Job item details pages by using React Router components Route, Switch, Link.",
      "Implemented filters and search text by sending them as query parameters to jobs API calls. ",
    ],
    technologies: ["React JS", "JS", "CSS", "Bootstrap", "Routing", "REST API Calls", "Local Storage", "JWT Token", "Authorization", "Authentication"],
    link: "https://shibilijobbyapp.ccbp.tech",
  },
  {
    title: "UNI RESTO Cafe App",
    description:
      "A responsive React-based restaurant application designed to showcase menu items in different categories with a clean and user-friendly layout.",
    concepts: [
      "Fetched and rendered menu items dynamically from an external URL ",
      "Structured menu sections (Salad and soups, Fresh from the Sea, Biriyani, Fast food, etc.) using modular React components.",
      "Ensured responsiveness with CSS for seamless experience across devices.",
      "Applied reusable components and clean coding practices for maintainability",
    ],
    technologies: ["React JS", "JS", "CSS", "Bootstrap", "REST API Calls"],
    link: "https://shibili-uni-resto-cafe-app-1.vercel.app/",
  },
  {
    title: "Prime Video App",
    description:
      "A streaming app interface that displays Action and Comedy movie lists with interactive sliders. Users can browse through movie thumbnails using navigation buttons and watch the selected movie in a popup video player.",
    concepts: [
      "Displaying movie lists using React Slick sliders for smooth horizontal scrolling",
      "Handling next and previous navigation in sliders",
      "Popup modal to play selected movie using React Player",
      "Managing state for popup visibility and selected movie",
      "Component-based architecture for reusability and modularity"
    ],
    technologies: ["React JS", "JS", "CSS", "Bootstrap", "React Slick", "React Player"],
    link: "https://shibiliprimevdo.ccbp.tech",
  },
  {
    title: "Party Menu App",
    description:
      "A responsive React-based restaurant application designed to showcase menu items in different categories with a clean and user-friendly layout.",
    concepts: [
      "React Native (Mobile App) Project.",
      "Structured menu section(Starter, Main Course, Dessert, Side)",
      "Implemented different routes for Login, Home, Jobs, Job item details pages by using React Router components Route, Switch, Link.",
      "Add/Remove, Veg/Non-Veg toggle functionality. ",
      "Applied reusable components and clean coding practices for maintainability."
    ],
    technologies: ["React JS", "JS", "CSS", "Bootstrap"],
    link: "https://mohammed-shibili-k-party-menu-app.vercel.app/",
  },
  {
    title: "IPL Dashboard App",
    description:
      "An interactive dashboard that provides real-time information about IPL teams and their recent matches. Users can view all teams, navigate to a specific team, and check detailed match statistics and team banners. The app fetches data dynamically from APIs and ensures a smooth user experience with loaders and responsive navigation.",
    concepts: [
      "Routing with React Router for Home and Team Matches views",
      "Fetching data from APIs using HTTP GET requests",
      "Conditional rendering and loader display while fetching data",
      "Dynamic URL parameters to fetch team-specific match data (/team-matches/:id)",
      "Component-based architecture for modularity and reusability"
    ],
    technologies: ["React JS", "JS", "CSS", "Bootstrap", "React Router", "REST API Calls"],
    link: "https://shibiliipldashb.ccbp.tech",
  },
  {
    title: "Emoji Game",
    description:
      "A fun and interactive memory-based game where players click on unique emojis to earn points. The challenge is to click each emoji only once per game—clicking a repeated emoji ends the game. Players can track their top score and replay the game to improve their performance.",
    concepts: [
      "State management using Class Component.",
      "Conditional rendering for Win and Lose views",
      "Score and top score tracking",
      "Handling user interactions and game logic",
      "Props to pass emoji data dynamically (emojisList)"
    ],
    technologies: ["React JS", "JS", "CSS", "Bootstrap"],
    link: "https://https://shibiliemojiapp.ccbp.tech",
  },
];

const Projects = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card1");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible1");
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card, i) => {
      card.classList.add(i % 2 === 0 ? "fade-left1" : "fade-right1");
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="project-container1">
      <Header />
      <div className="project-content1">
        <h1 className="project-title1">Project Details</h1>

        {projects.map((project, index) => (
          <div className="project-card1" key={index}>
            <div className="project-info1">
              <h2 className="project-name1">{project.title}</h2>
              <p className="project-description1">{project.description}</p>

              <ul className="concept-list1">
                {project.concepts.map((concept, i) => (
                  <li key={i} className="concept-list-item">{concept}</li>
                ))}
              </ul>

              <div className="tech-used1">
                <h4>Technologies Used:</h4>
                <div className="tech-badges1">
                  {project.technologies.map((tech, i) => (
                    <span className="tech-badge1" key={i}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button
                className="view-btn1"
                onClick={() => window.open(project.link, "_blank")}
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
