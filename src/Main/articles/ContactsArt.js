import "./contactsArt.scss";
import { FiHome, FiPhone, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
// FiUser,
import { AiOutlineSkype } from "react-icons/ai";

function ContactsArt() {
  return (
    <article className="contactsArt">
      {/* <li>
            <FiUser className="contacts__item" />
          </li> */}

      <div className="itemConteiner">
        <div>
          <FiHome className="contacts__item" />
        </div>
        <p>Ukrane, Kyiv</p>
      </div>
      <div className="underline"></div>
      <div className="itemConteiner">
        <div>
          <FiPhone className="contacts__item" />
        </div>
        <p>(093) 843-79-68</p>
      </div>
      <div className="underline"></div>
      <div className="itemConteiner">
        <div>
          <FiMail className="contacts__item" />
        </div>
        <p>pasha147223@gmail.com</p>
      </div>
      <div className="underline"></div>
      <div className="itemConteiner">
        <div>
          <AiOutlineSkype className="contacts__item" />
        </div>
        <p>pasha147223</p>
      </div>
      <div className="underline"></div>
      <div className="itemConteiner">
        <div>
          <FiGithub className="contacts__item" />
        </div>
        <a href="https://github.com/Pasha147">Pasha147</a>
      </div>
      <div className="underline"></div>
      <div className="itemConteiner">
        <div>
          <FiLinkedin className="contacts__item" />
        </div>
        <a href="https://www.linkedin.com/in/pfernati/">pfernati</a>
      </div>
    </article>
  );
}

export default ContactsArt;
