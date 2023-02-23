//import React, { useEffect, useState } from "react";
import localStorageKullan from "./localStorageKullan";

export const geceModu = (initialValue) => {
  const [localModeDegeri, setLocalModeHandler] = localStorageKullan(
    "buse",
    initialValue
  );

  //const [mode, setMode] = useState(true);
  //console.log("Gece moduuu", mode);

  return [localModeDegeri, setLocalModeHandler];
};
