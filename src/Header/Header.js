import "./header.scss";
import { FiUser, FiHome, FiPhone, FiMail, FiGithub } from "react-icons/fi";
import { AiOutlineSkype } from "react-icons/ai";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="./img/header/Ya3.jpg" alt="Ya" />
      </div>
      <div className="header__info">
        <h1 className="header__title">Fernati Pavlo</h1>

        <h2 className="header__subtitle">Front-end developer</h2>
        <div className="underline"></div>

        <ul className="header__contacts contacts">
          <li>
            <FiUser className="contacts__item" />
          </li>
          <li>
            <FiHome className="contacts__item" />
          </li>
          <li>
            <FiPhone className="contacts__item" />
          </li>
          <li>
            <FiMail className="contacts__item" />
          </li>
          <li>
            <AiOutlineSkype className="contacts__item" />
          </li>
          <li>
            <FiGithub className="contacts__item" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
