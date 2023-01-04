import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

import userImage from "./../../../images/header/user.svg";
import arrowImage from "./../../../images/header/arrow.svg";
import Hamburger from "./Hamburger";

const Header = () => {
  const auth = true;

  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      {window.location.pathname !== "/" ? (
        <button type="button" onClick={() => navigate(-1)}>
          <img src={arrowImage} alt="Auth" />
        </button>
      ) : (
        <button type="button">
          <img src={userImage} alt="Auth" />
        </button>
      )}

      <Hamburger />
    </header>
  );
};

export default Header;
