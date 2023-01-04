import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../common/Layout";
import Button from "../../ui/Button";
import Counters from "../../ui/Counters";
import styles from "./Home.module.scss";
import bgImage from "./../../../images/home-bg.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout bgImage={bgImage}>
      <Button
        style="main"
        callback={() => navigate("/new-workout")}
        text="New"
      />
      <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
      <Counters />
    </Layout>
  );
};

export default Home;
