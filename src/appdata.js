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

//=======================================

//PROJECTS===============================
export const projInfo = [
  {
    //Matlab
    img: "./img/projects/6.jpg",
    name: "Matlab",

    position1: {
      bottom: "50%",
      left: "50%",
      transform: "rotate(5deg) ",
    },

    header: "Finite Element Method",
    text: (
      <>
        <p>Language: Matlab </p>
        <p>2020</p>
        <p>
          Application for calculating the stress-strain state in a plane stress
          state. Application based on finite element method.
        </p>
      </>
    ),
  },

  {
    //Qbasic
    img: "./img/projects/1.jpg",
    name: "Qbasic",

    position1: {
      bottom: "50%",
      left: "80%",
      transform: "rotate(0deg) ",
    },

    header: "Plotter control software",
    text: (
      <>
        <p>Language: Qbasic </p>
        <p>2000</p>
        <p>Plotter control software.</p>
        <p>Functions:</p>
        <p> - decryption of Autocad files</p>
        <p> - vector and bitmap output</p>
        <p> - handwriting output</p>
      </>
    ),
  },
  {
    //Regr
    img: "./img/projects/2.jpg",
    name: "C++",

    position1: {
      bottom: "35%",
      left: "75%",
      transform: "rotate(0deg) ",
    },
    header: "Statistical data processing",
    text: (
      <>
        <p>Language: C++ </p>
        <p>2007</p>
        <p>
          This program was part of a numerical-analytical software package that
          was developed in the department of creep mechanics.
        </p>
        <p>Performs the following functions:</p>
        <p>- loading experimental data from a file;</p>
        <p>- displaying data on the screen in the form of tables and graphs;</p>
        <p>- approximation and statistical data processing.</p>

        <p>
          The program was developed as part of a grant project INTAS N
          03-51-6046 Development and experimental justification of long-term
          fracture criteria, two-stage fracture models and service life-time
          prediction methods under the complex stress state.
        </p>
      </>
    ),
  },
  {
    //Volcano
    img: "./img/projects/3.jpg",
    name: "C#",
    position1: {
      bottom: "20%",
      left: "65%",
      transform: "rotate(-3deg) ",
    },

    header: "Volcano",
    text: (
      <>
        <p>Language: C# </p>
        <p>2009</p>
        <p>This is a mini game.</p>
        <p>
          This is an educational application that is part of the curriculum of
          courses. These courses for learning the basics of programming with the
          application of knowledge of mathematics and physics for children of
          school age.
        </p>
      </>
    ),
  },
  {
    //C#
    img: "./img/projects/4.jpg",
    name: "C#",
    position1: {
      bottom: "7%",
      left: "65%",
      transform: "rotate(3deg) ",
    },

    header: "Vectorizator",
    text: (
      <>
        <p>Language: C# </p>
        <p>2016</p>
        <p>
          The program is designed for the collection and processing of
          experimental data presented in the form of graphs on paper.
        </p>
      </>
    ),
  },
  {
    //Arduino
    img: "./img/projects/5.jpg",
    name: "Arduino",
    position1: {
      bottom: "7%",
      left: "45%",
      transform: "rotate(-1deg) ",
    },
    header: "Auto Aquarium",
    text: (
      <>
        <p>Language: C++ type </p>
        <p>2019</p>
        <p>
          It is a device for automatic maintenance of the aquarium. This device
          is based on a microcontroller ARDUINO
        </p>
      </>
    ),
  },

  {
    //timer
    img: "./img/projects/11.jpg",
    name: "RxJS",
    position1: {
      bottom: "25%",
      left: "30%",
      transform: "rotate(1deg) ",
    },
    header: "Timer",
    text: (
      <>
        <p>Language: ReactJS (hooks), RxJS </p>
        <p>2021</p>
        <p>This is a test task.</p>
        <p>
          Test task on React. Тестовое для начала ) Реализовать секундомер,
          который подсчитывает время в формате «HH: MM: SS».
        </p>
        <p>
          Секундомер должен иметь следующие кнопки: «Start / Stop» - запуск /
          остановка отсчета времени, останавливает и обнуляет значение таймера.
        </p>
        <p>
          «Wait» - работает на двойной клик (время между нажатиями не более 300
          мс!) таймер должен прекратить отсчет времени; если после него нажать
          старт, то возобновляется отсчет.
        </p>
        <p>
          «Reset» - сброс секундомера на 0. Обнуляет секундомер и снова начинает
          отсчет.
        </p>
        <p>
          Требования: используйте Observables в коде RxJS подход, функциональный
          подход, нам важнее всего увидеть Ваше умение писать код 300 млс – это
          не DoubleClick
        </p>
        <a href="https://github.com/Pasha147/timer">Timer</a>
      </>
    ),
  },
  {
    //Bee
    img: "./img/projects/10.jpg",
    name: "Vanilla JS",
    position1: {
      bottom: "52%",
      left: "25%",
      transform: "rotate(-4deg) ",
    },
    header: "These are Bees",
    text: (
      <>
        <p>Language: JS </p>
        <p>2021</p>
        <p>This is a mini game.</p>
        <p>Desktop only.</p>
        <p>
          This app was created after reading the book "Java script for kids" by
          Nick Morgan.
        </p>
        <p>
          It also includes a server part: login on FIREBASE. And the ability to
          save the state of the application to the local storage is implemented.
        </p>
        <a href="https://first-61653.web.app/">These are Bees</a>
      </>
    ),
  },
  {
    //MySchool
    img: "./img/projects/7.jpg",
    name: "JS React",
    position1: {
      bottom: "8%",
      left: "20%",
      transform: "rotate(4deg) ",
    },
    header: "My School",
    text: (
      <>
        <p>Language: ReactJS (clasess)</p>
        <p>2021</p>
        <p>This is an app for a tutoring company.</p>
        <p>
          This application implements services for students, teachers and the
          director of the school.
        </p>
        <p>It also includes a server part: login and a database on FIREBASE</p>
        <a href="https://github.com/Pasha147/MySchool">My School</a>
      </>
    ),
  },

  {
    //CV1
    img: "./img/projects/8.jpg",
    name: "HTML SCSS",
    position1: {
      bottom: "5%",
      left: "1%",
      transform: "rotate(-4deg) ",
    },
    header: "My CV",
    text: (
      <>
        <p>Language: HTML, SCSS</p>
        <p>2021</p>
        <p>
          This page was created to test the Gulp build, it also used the BEM
          methodology
        </p>
        <a href="https://curriculum-vitae-faf0f.web.app/">My CV</a>
      </>
    ),
  },
  {
    //Gips
    img: "./img/projects/9.jpg",
    name: "ReactJS ",

    position1: {
      bottom: "48%",
      left: "2%",
      transform: "rotate(5deg) ",
    },
    header: "Гипсокартон Про",
    text: (
      <>
        <p>Language: ReactJS (hooks)</p>
        <p>Responsive web design</p>
        <p>2021</p>
        <p>The website for the "Гипсокартон Про" company.</p>
        <a href="https://gipsokartonpro1014.netlify.app/">GipsokartonPro</a>
      </>
    ),
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
