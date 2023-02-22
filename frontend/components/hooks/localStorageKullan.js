import React from "react";

const localStorageKullan = () => {
  function mode(xmode, newMode) {
    {
      localStorage.setItem(xmode, newMode);
    }
  }
  function setMode(xmode) {
    return localStorage.getItem(xmode);
  }

  return [mode, setMode];
};

export default localStorageKullan;
