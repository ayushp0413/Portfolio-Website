import portfolioImg01 from "../images/portfolio-01.jpeg";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/portfolio-06.jpg";
import portfolioImg07 from "../images/portfolio-07.jpg";
import portfolioImg08 from "../images/portfolio-08.jpg";
import portfolioImg09 from "../images/portfolio-09.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "Study Notion ",
    description:
      "StudyNotion aims to provide a seamless and interactive learning experience for students, making education more accessible and engaging. Additionally, the platform serves as a platform for instructors to showcase their expertise and connect with learners across the globe.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://study-notion-frontend-rho-pearl.vercel.app",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Java",
    title: "HR Management",
    description:
      "It’s a three layered architecture based project on Java programming using the concept of Data Layer,Business Layer and Presentation Layer with all the CRUD operations. The objective of this project is to maintain the record of Employees and their Designations.",
    technologies: ["Java", "Swing", "JDBC", "MySQL"],
    siteUrl: null,
    youtubeSite: "#"
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Web Design",
    title: "Doctor Appointment",
    description:
      "Our Doctor's Appointment Booking System, your one-stop solution for seamless and efficient healthcare management. It provide a robust, user-friendly experience for both patients and healthcare providers.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://doctor-appointment-booking-silk.vercel.app",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "Java",
    title: "File Transfer in Java",
    description:
      "An interesting client-server networking and multithreading based mini project having facilities to request a server for file uploading. The GUI of this project is developed using swing classes of Java",
    technologies: ["Java", "Networking", "Swing"],
    siteUrl: null,
    youtubeSite: "https://youtu.be/NmHfBHFNjh8?si=3DYkqC5Wmc9ZRTuz"
  },
  {
    id: "05",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Weather App",
    description:
      "This project is a user-friendly weather app built with JavaScript that retrieves real-time weather data from the Weather API. It provides a quick and informative way to check the current conditions in your location or a specified city.",
    technologies: ["HTML", "CSS", "JavaScript", "APIs"],
    siteUrl: null,
    youtubeSite: null,
    githubSite: "https://github.com/ayushp0413/Weather-App-JS"
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Web Design",
    title: "Github Dev Detective",
    description:
      "This is a simple API based project that fetches the profile of the person by its github username.The project uses HTML,CSS and JS for development.As the project desgin is very simple just an API call to fetch the data from the server. But I used a beautiful CSS for UI and added NIGHT mode option in it!",
    technologies: ["HTML", "CSS", "JS", "APIs"],
    siteUrl: null,
    youtubeSite: null,
    githubSite: "https://github.com/ayushp0413/Github-Detective-"
  },
  {
    id: "07",
    imgUrl: portfolioImg07,
    category: "Java",
    title: "Setter Getter Generator",
    description:
      "This is a setter/getter generator tool that will generate set and get method of class. This is builded through Reflection API. It generates your setter and getter methods in tmp.tmp file.",
    technologies: ["Java"],
    siteUrl: null,
    youtubeSite: null,
    githubSite: "https://github.com/ayushp0413/SetterGetterGeneratorTool"
  },
  {
    id: "08",
    imgUrl: portfolioImg01,
    category: "C++",
    title: "Replica of cout and cin",
    description:
      "In this program the replica of cout and cin object is created.We use mout and kin in place of cout and cin for printing and scaning.!",
    technologies: ["C++"],
    siteUrl: null,
    youtubeSite: null,
    githubSite: "https://github.com/ayushp0413/Replica-of-cout-and-cin"
  },
  {
    id: "09",
    imgUrl: portfolioImg09,
    category: "Web Design",
    title: "Razorpay Clone Static",
    description:
      "This is the clone of the best Ui RazorPay website using TailwindCSS!",
    technologies: ["HTML", "Tailwind CSS"],
    siteUrl: null,
    youtubeSite: null,
    githubSite: "https://github.com/ayushp0413/RazorPay-Clone-Tailwind"
  },
];

export default portfolios;
