import React from "react";
import styles from "./Header.module.scss";

import userImage from "./../../../images/header/user.svg";
import bergerImage from "./../../../images/header/hamburger.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <button type="button">
        <img src={userImage} alt="Auth" />
      </button>
      <button type="button">
        <img src={bergerImage} alt="Auth" />
      </button>
    </header>
  );
};

export default Header;
