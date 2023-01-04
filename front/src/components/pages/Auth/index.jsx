import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

import Layout from "../../common/Layout";
import styles from "./style.module.scss";
import bgImage from "./../../../images/new-workout.jpg";
import Field from "../../ui/Field";
import Button from "../../ui/Button";
import Alert from "../../ui/Alert";
import { $api } from "../../../api/api";
import Loader from "../../ui/Loader";
import { useAuth } from "../../../hooks/useAuth";

const Auth = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("auth"); // auth/reg

  const { setIsAuth } = useAuth();

  const {
    mutate: register,
    isLoading,
    error,
    data,
  } = useMutation(
    "Registration",
    () =>
      $api({
        url: "/users",
        type: "POST",
        body: { email, password },
        auth: false,
      }),
    {
      onSuccess(data) {
        localStorage.setItem("token", data.token);
        setIsAuth(true);
        setPassword("");
        setEmail("");
        navigate("/");
      },
    }
  );

  const handelSubmit = (e) => {
    e.preventDefault();

    if (type === "auth") {
      console.log("auth");
    } else {
      register();
    }
  };

  return (
    <>
      <Layout bgImage={bgImage} heading="Auth || Reg" />
      <div className="wrapper-inner-page">
        {error && <Alert type="error" text={error} />}
        {isLoading && <Loader />}
        <form onSubmit={handelSubmit}>
          <Field
            type="Email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Field
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className={styles.wrapperButton}>
            <Button text="Sign in" callback={() => setType("auth")} />
            <Button text="Sign up" callback={() => setType("reg")} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Auth;
