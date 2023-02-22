import React from "react";

const Navbar = (props) => {
  /*   const toggleMode = (e) => {
    e.preventDefault();
    props.setGeceModu(!props.geceModu);
  }; */

  return (
    <nav className="navbar">
      <h1>Kripto İzleyici</h1>
      {/*   <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.geceModu ? 'toggle toggled' : 'toggle'}
        />
      </div> */}
      <div onClick={props.setGeceModuAc} />
      <div className="dark-mode__toggle">
        <div
          className={props.geceModuAc === "on" ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
