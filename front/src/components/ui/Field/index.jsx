import React from "react";
import style from "./style.module.scss";

function Field({ placeholder, type = "text", value, onChange }) {
  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      className={style.input}
    />
  );
}

export default Field;
