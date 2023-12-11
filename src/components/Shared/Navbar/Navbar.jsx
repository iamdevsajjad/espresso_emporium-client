import React from "react";

const Navbar = () => {
  return (
    <header className=" flex items-center justify-center bg-black sticky top-0" >
      <div className="innerContainer flex md:py-3">
        <div className="img">
          <img className="w-11" src="https://i.ibb.co/3zQNTC6/logo1.png" alt="" />
        </div>
        <div className="text text-white text-xl md:text-3xl font-semibold my-auto">
          <h4>Espresso Emporium</h4>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
