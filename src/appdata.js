import Mainart from "./Main/articles/Mainart";
import Skills from "./Main/articles/Skills";
import Projects from "./Main/articles/Projects";
import Education from "./Main/articles/Education";
import Workexp from "./Main/articles/Workexp";
import ContactsArt from "./Main/articles/ContactsArt";
import AboutMe from "./Main/articles/Aboutme";

//SKILLS
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { FaReact, FaNodeJs, FaGulp, FaHtml5 } from "react-icons/fa";
import {
  SiRedux,
  SiNetlify,
  SiVisualstudiocode,
  SiWebstorm,
} from "react-icons/si";
import { GrHeroku } from "react-icons/gr";
import { DiCss3, DiSass, DiPhotoshop, DiJavascript1 } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { GiZeppelin } from "react-icons/gi";
import { ImHtmlFive2 } from "react-icons/im";

//===============================================

export const contacts = [
  { name: "user", icon: "FiHome" },
  { name: "home", icon: "FiHome" },
  { name: "phone", icon: "FiPhone" },
  { name: "email", icon: "FiMail" },
  { name: "skype", icon: "AiOutlineSkype" },
  { name: "github", icon: "FiGithub" },
];

//buttons in nav
export const nav = [
  { id: 0, name: "MAIN", artHeader: "Main", article: <Mainart />, route: "/" },
  {
    id: 1,
    name: "SKILLS",
    artHeader: "Skills",
    article: <Skills />,
    route: "/skills",
  },
  {
    id: 2,
    name: "EDUCATION",
    artHeader: "Education",
    article: <Education />,
    route: "/education",
  },
  {
    id: 3,
    name: "WORK EXPERIENCE",
    artHeader: "Work Experience",
    article: <Workexp />,
    route: "/workexp",
  },
  {
    id: 4,
    name: "PROJECTS",
    artHeader: "Projects",
    article: <Projects />,
    route: "/projects",
  },

  {
    id: 5,
    name: "ABOUT ME",
    artHeader: "About me",
    article: <AboutMe />,
    route: "/aboutMe",
  },
  {
    id: 6,
    name: "CONTACTS",
    artHeader: "Contacts",
    article: <ContactsArt />,
    route: "/contactsArt",
  },
];
//==================================

//MAIN Article

export const mainArts = [
  {
    header: "Skills",
    numberRows: 4,
    text: [
      "•	HTML, CSS (BEM), SASS (SCSS), Bootstrap,... ",
      "• JavaScript (ES6), React, Redux, RxJS, . . . ",
      "• Node JS (Express, ejs, . . .)",
      "•	Git, Gulp, Firebase, Heroku, Netlyfy,. . . ",
      "• VS Code, WebStorm, Prepros, Zeplin, . . . ",
      "•	C#, C++, Matlab, QBasic",
      "•	Photoshop, MathCad, Autocad, . . .",
    ],
  },
  {
    header: "Education",
    numberRows: 2,
    text: [
      "•	2006 - PhD in Engineering sciences, ",
      "\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 Solid Mechanics,",
      "Timoshenko Institute of Mechanics, National Academy of Sciences of Ukraine, Kyiv, Ukraine",
      "•	2002 - Master’s engineering degree",
      "\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 in Equipment of the Pharmaceutical and Microbiological Industry.",
      "National University of Food Technologies, Kyiv, Faculty of Mechanics",
    ],
  },
  {
    header: "Work experience",
    numberRows: 2,
    text: [
      "• 2021-now",
      "Freelance Web Developer",
      "Several projects have been created",
      '- Web site for "ГипсокартонПро"',
      "https://gipsokartonpro1014.netlify.app/",
      "- The application for tutors",
      "https://github.com/Pasha147/MySchool",
    ],
  },
  {
    header: "",
    numberRows: 3,
    text: [
      "• July 2000-now",
      " S.P. Timoshenko Institute of Mechanics",
      "\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 2008- now Senior Researcher",
      "\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 2006-2008 Research Scientist",
      "\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 2004-2006 Junior Research Scientist",
      "\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 2000-2004 Engineer",
      "Job description:",
      " -	Development and software implementation of numerical analytical procedures in various programming languages and mathematical packages.",
      " -	Collection, analysis, statistical processing and interpretation of experimental data.",
      " -	Development, modernization and numerical testing of mathematical models.",
      " -	Publishing scientific articles.",
      "	- Lead projects with young scientists.",
    ],
  },
  {
    header: "",
    numberRows: 2,
    text: [
      "• September 2006-2020",
      "Freelance tutor in mathematics and physics",
    ],
  },
  {
    header: "Languages",
    numberRows: 1,
    text: [
      "•	English – intermediate",
      "•	Ukrainian – native,",
      "•	Russian – fluent",
    ],
  },
];

//MAIN Animation==================
export const mainAnim = [
  <ImHtmlFive2 className="card__icon" />,
  <DiCss3 className="card__icon" />,
  <DiJavascript1 className="card__icon" />,
  <FaReact className="card__icon" />,
  <SiRedux className="card__icon" />,
  <FaNodeJs className="card__icon" />,
  // <FiGithub className="card__icon" />,
];

//==================================

//SKILLS============================

export const skills = [
  {
    id: 0,
    name: "JavaScript",
    text: "(ES6)",
    icon: <IoLogoJavascript className="card__icon" />,
    type: "language",
  },
  {
    id: 1,
    name: "React",
    text: "(classes, hooks)",
    icon: <FaReact className="card__icon" />,
    type: "library",
  },
  {
    id: 3,
    name: "Redux",
    text: "(Redux, React-redux)",
    icon: <SiRedux className="card__icon" />,
    type: "library",
  },
  {
    id: 4,
    name: "RxJS",
    text: "",
    icon: null,
    type: "library",
  },
  {
    id: 5,
    name: "HTML",
    text: null,
    icon: <FaHtml5 className="card__icon" />,
    type: "language",
  },
  {
    id: 6,
    name: "CSS",
    text: "(BEM)",
    icon: <DiCss3 className="card__icon" />,
    type: "language",
  },
  {
    id: 7,
    name: "SASS",
    text: "(SCSS)",
    icon: <DiSass className="card__icon" />,
    type: "language",
  },
  {
    id: 8,
    name: "Bootstrap",
    text: null,
    icon: <BsBootstrap className="card__icon" />,
    type: "library",
  },
  {
    id: 9,
    name: "Node",
    text: "(Express, ejs,...)",
    icon: <FaNodeJs className="card__icon" />,
    type: "language",
  },
  {
    id: 10,
    name: "Git",
    text: null,
    icon: <FiGithub className="card__icon" />,
    type: "technology",
  },
  {
    id: 11,
    name: "Gulp",
    text: null,
    icon: <FaGulp className="card__icon" />,
    type: "technology",
  },
  {
    id: 12,
    name: "Firebase",
    text: null,
    icon: <IoLogoFirebase className="card__icon" />,
    type: "netResources",
  },
  {
    id: 13,
    name: "Heroku",
    text: null,
    icon: <GrHeroku className="card__icon" />,
    type: "netResources",
  },
  {
    id: 15,
    name: "Netlyfy",
    text: null,
    icon: <SiNetlify className="card__icon" />,
    type: "netResources",
  },
  {
    id: 16,
    name: "VS Code",
    text: null,
    icon: <SiVisualstudiocode className="card__icon" />,
    type: "programs",
  },
  {
    id: 17,
    name: "WebStorm",
    text: null,
    icon: <SiWebstorm className="card__icon" />,
    type: "programs",
  },
  {
    id: 18,
    name: "Prepros",
    text: null,
    icon: null,
    type: "programs",
  },
  {
    id: 19,
    name: "Zeplin",
    text: null,
    icon: <GiZeppelin className="card__icon" />,
    type: "programs",
  },
  {
    id: 20,
    name: "C#",
    text: null,
    icon: null,
    type: "language",
  },
  {
    id: 21,
    name: "C++",
    text: null,
    icon: null,
    type: "language",
  },
  {
    id: 22,
    name: "Matlab",
    text: null,
    icon: null,
    type: "language",
  },
  {
    id: 23,
    name: "QBasic",
    text: null,
    icon: null,
    type: "language",
  },
  {
    id: 24,
    name: "Photoshop",
    text: null,
    icon: <DiPhotoshop className="card__icon" />,
    type: "programs",
  },
  {
    id: 25,
    name: "MathCad",
    text: null,
    icon: null,
    type: "programs",
  },
  {
    id: 26,
    name: "Autocad",
    text: null,
    icon: null,
    type: "programs",
  },
  {
    id: 27,
    name: "English",
    text: "intermediate",
    icon: null,
    type: "language",
  },
  {
    id: 28,
    name: "Ukrainian",
    text: "native",
    icon: null,
    type: "language",
  },
  {
    id: 29,
    name: "Russian",
    text: "fluent",
    icon: null,
    type: "language",
  },
];

//================================

//EDUCATION==========================
export const educationArts = [
  {
    header: "• 2020 - now Self-education",
    numberRows: 3,
    text: [
      "Graduated from many online courses in web development",
      "Sources:",
      "- Youtube chanel: freeCodeCamp,",
      "- Youtube chanel: Vladilen Minin,",
      "- Youtube chanel: webDev,",
      "- Youtube chanel: ITVDN",
      ". . .",
      "- learn.javascript.ru,",
      "- JavaScript for Kids. By Nick Morgan,",
      ". . .",
    ],
  },
  {
    header: "• 2006 - Ph.D. in Engineering sciences (Solid Mechanics)",
    numberRows: 2,
    text: [
      "",
      "S.P. Timoshenko Institute of Mechanics, National Academy of Sciences of Ukraine,",
      "Kyiv, Ukraine",
      "Thesis Topic: “Nonlinear creep of viscoelastic one-directional fibrous composites and their components under tension.” ",
    ],
  },
  {
    header: "•	2002 - Master’s engineering degree",
    numberRows: 2,
    text: [
      "National University of Food Technologies, ",
      "Faculty of Mechanics",
      "Kyiv, Ukraine",
      "Specialization: Equipment of the Pharmaceutical and Microbiological Industry.",
    ],
  },
];
//=======================================

//WORK EXPERIENCE==========================
export const workExpArts = [
  {
    header: "• 2021-now Freelance Web Developer",
    numberRows: 3,
    text: [
      "Job description:",
      "Several projects have been created",
      '- Web site for "ГипсокартонПро"',
      "https://gipsokartonpro1014.netlify.app/",
      "- The application for tutors",
      "https://github.com/Pasha147/MySchool",
    ],
  },
  {
    header: "• July 2000-now S.P.Timoshenko Institute of Mechanics",
    numberRows: 2,
    text: [
      "",
      "\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 2008- now Senior Researcher",
      "\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 2006-2008 Research Scientist",
      "\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 2004-2006 Junior Research Scientist",
      "\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 2000-2004 Engineer",
      "Job description:",
      "•	Development and software implementation of numerical analytical procedures in various programming languages and mathematical packages.",
      "•	Collection, analysis, statistical processing and interpretation of experimental data.",
      "•	Development, modernization and numerical testing of mathematical models.",
      "•	Publishing scientific articles.",
      "•	Lead projects with young scientists.",
    ],
    img: "",
  },

  {
    header: "• September 2006-2020 Freelance tutor in mathematics and physics",
    numberRows: 1,
    text: [""],
  },
];

// - July 2000-now S.P. Timoshenko Institute of Mechanics, Kyiv, Ukraine, Department of Mechanics of Creep
// 2008- now Senior Researcher
// 2006-2008 Research Scientist
// 2004-2006 Junior Research Scientist
// 2000-2004 Engineer
// Job description:
// •	Development and software implementation of numerical analytical procedures in various programming languages and mathematical packages.
// •	Collection, analysis, statistical processing and interpretation of experimental data.
// •	Development, modernization and numerical testing of mathematical models.
// •	Publishing scientific articles.
// •	Lead projects with young scientists.
// - September 2006-now Freelance tutor in mathematics and physics

//=======================================

//PROJECTS===============================
export const projInfo = [
  {
    img: "./img/projects/1.jpg",
    name: "Qbasic",
    text: "",
    position1: {
      bottom: "50%",
      left: "80%",
      transform: "rotate(0deg) ",
    },
  },
  {
    //Regr
    img: "./img/projects/2.jpg",
    name: "C++",
    text: "",
    position1: {
      bottom: "35%",
      left: "80%",
      transform: "rotate(0deg) ",
    },
  },
  {
    //Volcano
    img: "./img/projects/3.jpg",
    name: "C#",
    text: "",
    position1: {
      bottom: "20%",
      left: "65%",
      transform: "rotate(-3deg) ",
    },
  },
  {
    //C#
    img: "./img/projects/4.jpg",
    name: "C#",
    text: "",
    position1: {
      bottom: "7%",
      left: "65%",
      transform: "rotate(3deg) ",
    },
  },
  {
    //Arduino
    img: "./img/projects/5.jpg",
    name: "Arduino",
    text: "",
    position1: {
      bottom: "7%",
      left: "45%",
      transform: "rotate(-1deg) ",
    },
  },
  {
    //Matlab
    img: "./img/projects/6.jpg",
    name: "Matlab",
    text: "",
    position1: {
      bottom: "50%",
      left: "45%",
      transform: "rotate(5deg) ",
    },
  },
  {
    //timer
    img: "./img/projects/11.jpg",
    name: "RxJS",
    text: "",
    position1: {
      bottom: "25%",
      left: "30%",
      transform: "rotate(1deg) ",
    },
  },
  {
    //Bee
    img: "./img/projects/10.jpg",
    name: "Vanilla JS",
    text: "",
    position1: {
      bottom: "52%",
      left: "18%",
      transform: "rotate(1deg) ",
    },
  },
  {
    //MySchool
    img: "./img/projects/7.jpg",
    name: "JS React",
    text: "",
    position1: {
      bottom: "8%",
      left: "20%",
      transform: "rotate(4deg) ",
    },
  },

  {
    //CV1
    img: "./img/projects/8.jpg",
    name: "HTML SCSS",
    text: "",
    position1: {
      bottom: "5%",
      left: "1%",
      transform: "rotate(-4deg) ",
    },
  },
  {
    //Gips
    img: "./img/projects/9.jpg",
    name: "JS React",
    text: "",
    position1: {
      bottom: "48%",
      left: "2%",
      transform: "rotate(5deg) ",
    },
  },
];
//=======================================

//SLIDER============================
export const slider = [
  {
    title: "Woodcarving",
    image: "../img/slider/1.jpg",
    text: " This is a sugar bowl",
  },
  {
    title: "Sculpture",
    image: "../img/slider/2.jpg",
    text: "It's me",
  },
  {
    title: "Aquarium",
    image: "../img/slider/3.jpg",
    text: "These are my fish",
  },
  {
    title: "Tourism",
    image: "../img/slider/5.jpg",
    text: "This is the Dnieper river",
  },
  {
    title: "Science",
    image: "../img/slider/6b.jpg",
    text: "2006, Ph.D. from the S.P. Timoshenko Institute of Mechanics",
  },
  {
    title: "Fishing",
    image: "../img/slider/7.jpg",
    text: "This is my pike",
  },
  {
    title: "Mushroom hunting",
    image: "../img/slider/8.jpg",
    text: "This is my mushroom",
  },
  {
    title: "Motor boats",
    image: "../img/slider/9.jpg",
    text: "This is my boat",
  },
];
