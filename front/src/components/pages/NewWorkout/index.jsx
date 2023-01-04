import React, { useState } from "react";
import ReactSelect from "react-select";

import Layout from "../../common/Layout";
import styles from "./style.module.scss";
import bgImage from "./../../../images/new-workout.jpg";
import Field from "../../ui/Field";
import Button from "../../ui/Button";
import { optionColor } from "./optionColor";

function NewWorkout() {
  const [name, setName] = useState("");
  const [statusVision, setStatusVision] = useState("");

  const handelSubmit = () => {};

  return (
    <>
      <Layout bgImage={bgImage} heading="Create new workout" />
      <div className={styles.wrapper}>
        <form onSubmit={handelSubmit}>
          <Field
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <ReactSelect
            className="select2-selection"
            classNamePrefix="select2-selection"
            placeholder="Exercises..."
            title="Exercises..."
            options={[
              { value: "123213", label: "Push-ups" },
              { value: "werwer", label: "Pull-ups" },
            ]}
            value={statusVision}
            onChange={setStatusVision}
            theme={(theme) => optionColor(theme)}
            isMulti
          />
          <Button text="Create" callback={() => {}} />
        </form>
      </div>
    </>
  );
}

export default NewWorkout;
