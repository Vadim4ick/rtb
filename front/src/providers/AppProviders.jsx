import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import App from "./../App";

const AppProviders = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <App />
    </AuthContext.Provider>
  );
};

export default AppProviders;
