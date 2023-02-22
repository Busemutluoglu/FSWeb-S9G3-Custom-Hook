import React, { useEffect, useState } from "react";
import localStorageKullan from "./localStorageKullan";

const geceModuAc = () => {
  const [geceModuAc, setGeceModuAc] = useState("false");
  const [mode, setMode] = localStorageKullan();

  useEffect(() => {
    if (setMode("geceModu")) {
      setGeceModuAc(setMode("geceModu"));
    }
  }, []);

  const toggleMode = () => {
    const buse = geceModuAc === "on" ? "off" : "on";
    mode("geceModu", buse);
    setGeceModuAc(setMode("geceModu"));
  };
  return [geceModuAc, toggleMode];
};

export default geceModuAc;
