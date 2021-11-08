import React from "react";
import "./contacts.scss";
import { FiUser, FiHome, FiPhone, FiMail, FiGithub } from "react-icons/fi";
import { AiOutlineSkype } from "react-icons/ai";

function Contacts() {
  return (
    <ul className="contacts">
      {/* <li>
            <FiUser className="contacts__item" />
          </li> */}
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
  );
}

export default Contacts;
