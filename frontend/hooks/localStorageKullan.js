import { useState } from "react";

const localStorageKullan = (key, baslangicDegeri) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);

    const initialVal = item ? JSON.parse(item) : baslangicDegeri;
    localStorage.setItem(key, JSON.stringify(initialVal));
    return initialVal;
  });
  //const gokhan = "bada bim bada bum";
  const setValueClickHandler = (value) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  //return [storedValue, gokhan];
  return [storedValue, setValueClickHandler];
};

export default localStorageKullan;
