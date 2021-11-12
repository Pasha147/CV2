import Mainart from "./Main/articles/Mainart";
import Skills from "./Main/articles/Skills";
import Projects from "./Main/articles/Projects";
import Education from "./Main/articles/Education";
import Workexp from "./Main/articles/Workexp";
import ContactsArt from "./Main/articles/ContactsArt";

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
  { id: 0, name: "MAIN", artHeader: "Main", article: <Mainart /> },
  { id: 1, name: "SKILLS", artHeader: "Skills", article: <Skills /> },
  { id: 2, name: "PROJECTS", artHeader: "Projects", article: <Projects /> },
  { id: 3, name: "EDUCATION", artHeader: "Education", article: <Education /> },
  {
    id: 4,
    name: "WORK EXPERIENCE",
    artHeader: "Work Experience",
    article: <Workexp />,
  },
  { id: 5, name: "CONTACTS", artHeader: "Contacts", article: <ContactsArt /> },
];

//SKILLS============================

export const skills = [
  {
    id: 0,
    name: "JavaScript",
    text: "(ES6)",
    icon: <IoLogoJavascript />,
    type: "language",
  },
  {
    id: 1,
    name: "React",
    text: "(classes, hooks)",
    icon: <FaReact />,
    type: "library",
  },
  {
    id: 3,
    name: "Redux",
    text: "(Redux, React-redux)",
    icon: <SiRedux />,
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
    icon: <FaHtml5 />,
    type: "language",
  },
  {
    id: 6,
    name: "CSS",
    text: "(BEM)",
    icon: <DiCss3 />,
    type: "language",
  },
  {
    id: 7,
    name: "SASS",
    text: "(SCSS)",
    icon: <DiSass />,
    type: "language",
  },
  {
    id: 8,
    name: "Bootstrap",
    text: null,
    icon: <BsBootstrap />,
    type: "library",
  },
  {
    id: 9,
    name: "Node",
    text: "(Express, ejs,...)",
    icon: <FaNodeJs />,
    type: "language",
  },
  {
    id: 10,
    name: "Git",
    text: null,
    icon: <FiGithub />,
    type: "technology",
  },
  {
    id: 11,
    name: "Gulp",
    text: null,
    icon: <FaGulp />,
    type: "technology",
  },
  {
    id: 12,
    name: "Firebase",
    text: null,
    icon: <IoLogoFirebase />,
    type: "netResources",
  },
  {
    id: 13,
    name: "Heroku",
    text: null,
    icon: <GrHeroku />,
    type: "netResources",
  },
  {
    id: 15,
    name: "Netlyfy",
    text: null,
    icon: <SiNetlify />,
    type: "netResources",
  },
  {
    id: 16,
    name: "VS Code",
    text: null,
    icon: <SiVisualstudiocode />,
    type: "programs",
  },
  {
    id: 17,
    name: "WebStorm",
    text: null,
    icon: <SiWebstorm />,
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
    icon: <GiZeppelin />,
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
    icon: <DiPhotoshop />,
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
    name: "kkkkkk",
    text: null,
    icon: null,
    type: "plagin",
  },
];
//================================
