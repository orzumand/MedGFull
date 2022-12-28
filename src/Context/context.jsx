import React, { createContext, useState } from "react";

export const DMode = createContext();
const DarkMode = ({ children }) => {
  const [mode, setMode] = useState(true);
  return <DMode.Provider value={[mode, setMode]}>{children}</DMode.Provider>;
};

export default DarkMode;
