import React, { createContext, useState } from "react";

export const DMode = createContext();
const DarkMode = ({ children }) => {
  const darkmode = JSON.parse(localStorage.getItem("mode"));

  const [mode, setMode] = useState(darkmode !== null ? !darkmode : true);
  return <DMode.Provider value={[mode, setMode]}>{children}</DMode.Provider>;
};

export default DarkMode;
