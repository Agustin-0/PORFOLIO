import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-neutral-300 dark:bg-gray-800 static">
      <div onClick={toggleMenu}>☰</div>
      <div
        className={`absolute z-10 top-0 left-0 h-screen w-1/2 bg-black opacity-70 ${isOpen ? "visible" : "hidden"}`}
      ></div>
      <div
        className={`absolute z-10 top-0 right-0 h-screen w-1/2 bg-violet-300 transform
        ${isOpen ? "visible" : "hidden"}`}
      >
        <div onClick={toggleMenu}>X</div>
        <ul className="flex flex-col aling-center items-center">
          <li>home</li>
          <li>s</li>
          <li>lorea</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
