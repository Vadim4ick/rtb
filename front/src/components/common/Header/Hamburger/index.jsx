import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menu } from "./menuBase";

import burgerImage from "./../../../../images/header/hamburger.svg";
import burgerCloseImage from "./../../../../images/header/close.svg";

import styles from "./style.module.scss";

const Hamburger = () => {
  const [show, setShow] = useState(false);

  const handleLogout = () => {};

  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={() => setShow(!show)}>
        <img src={show ? burgerCloseImage : burgerImage} alt="Auth" />
      </button>

      <nav className={`${styles.menu} ${show ? styles.show : ""}`}>
        <ul>
          {menu.map((item, index) => (
            <li key={`_menu_${index}`}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}

          <li>
            <a onClick={handleLogout}>Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Hamburger;
