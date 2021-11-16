import { MdOutlineSmokingRooms } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import { FaCannabis, FaSyringe } from "react-icons/fa";
import { FiSlash } from "react-icons/fi";
import Slider from "./Slider";
import { slider } from "../../appdata";

import "./aboutme.scss";

function AboutMe() {
  return (
    <article className="aboutMe">
      <div className="underline"></div>
      <h2>About me</h2>
      <div className="iconsCont">
        <div className="family">
          <div className="family__icons">
            <img className="icon-p icon_pm" src="./img/male1.svg" alt="dd" />
            <img className=" icon-p icon-pw" src="./img/woman3.svg" alt="dd" />
            <img className="iconChild icon-ch1" src="./img/boy1.svg" alt="dd" />
            <img className="iconChild icon-ch2" src="./img/boy1.svg" alt="dd" />
            <img className="iconChild icon-ch2" src="./img/boy1.svg" alt="dd" />

            <span className="age1">43</span>
            <span className="age2">18</span>
            <span className="age3">15</span>
            <span className="age4">15</span>
            <span className="age5">XX</span>
          </div>
          <p>My family (Me, my wife, my boys)</p>
        </div>

        <div className="badHabits">
          <div className="cards">
            <div className="card__icons">
              <MdOutlineSmokingRooms className="icon" />
              <FiSlash className="slashIcon" />
            </div>
            <div className="card__icons">
              <BiDrink className="icon" />
              <FiSlash className="slashIcon" />
            </div>
            <div className="card__icons">
              <FaCannabis className="icon" />
              <FiSlash className="slashIcon" />
            </div>
            <div className="iconc">
              <FaSyringe className="icon " />
              <span>covid</span>
            </div>
          </div>
          <p>Bad habits</p>
        </div>
      </div>
      <div className="underline"></div>
      <h2>These are my hobbies</h2>
      <div className="sliderAboutMe">
        <Slider slider={slider} />
      </div>
    </article>
  );
}

export default AboutMe;

/*
BiFemale;
BiMale;
MdOutlineSmokingRooms
BiDrink
FaSyringe, FaCannabis
*/
