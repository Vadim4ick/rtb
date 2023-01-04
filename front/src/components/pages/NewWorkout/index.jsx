import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";

import Layout from "../../common/Layout";
import bgImage from "./../../../images/create-workout.jpg";
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
      <div className="wrapper-inner-page">
        <form onSubmit={handelSubmit}>
          <Field
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Link to="/new-exercise" className="darkLink">
            Add new exercise
          </Link>
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
