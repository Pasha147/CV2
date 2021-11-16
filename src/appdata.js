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
import { DiCss3, DiSass, DiPhotoshop } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { GiZeppelin } from "react-icons/gi";
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
];
//================================

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
