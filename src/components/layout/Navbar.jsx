import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { IoMenu } from "react-icons/io5";
import { Switch } from "@/components/ui/switch"

// aca deberiamos separar responsibilidades para mejorar el codigo o hacerlo mas legible 

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-lightmode-secundary dark:bg-darkmode-primary static">
      {/* NavbarMobile MOVILE */}
      <div className="md:hidden">
        <div className="bg-lightmode-secundary dark:bg-darkmode-primary dark:text-darkText-primary" onClick={toggleMenu}>
          <IoMenu className="size-8" />
        </div>
        <div onClick={toggleMenu} className={`absolute z-10 top-0 left-0 h-screen w-1/2 bg-black opacity-70 
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        ></div>
        <div
          className={`absolute z-10 top-0 right-0 h-screen w-1/2 bg-violet-600 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-end p-4" onClick={toggleMenu}>X</div>
          <div className="flex flex-col items-center gap-2">
            <a href="#presentacion" className="dark:text-lightmode-primary font-medium">Presentacion</a>
            <a href="#experiencia" className="dark:text-lightmode-primary font-medium">Experiencia</a>
            <a href="#proyectos" className="dark:text-lightmode-primary font-medium">Proyectos</a>
            <a href="#tecnologias" className="dark:text-lightmode-primary font-medium">Tecnologías</a>
              {/* <button onClick={toggleTheme}>
                {theme === "dark" ? "☀️" : "🌙"}
              </button > */}
            <Switch onClick={toggleTheme} />
          </div>
        </div>
      </div>

      <div className="hidden md:block py-4 px-4">
        <nav className="flex justify-center items-center gap-4">
          <a href="#presentacion" className="dark:text-lightmode-primary font-medium">Presentacion</a>
          <a href="#Experience" className="dark:text-lightmode-primary font-medium">Experiencia</a>
          <a href="#proyectos" className="dark:text-lightmode-primary font-medium">Proyectos</a>
          <a href="#tecnologias" className="dark:text-lightmode-primary font-medium">Tecnologías</a>
          <button onClick={toggleTheme}>{theme === "dark" ? "☀️" : "🌙"}</button>
        </nav>
      </div>

    </div>
  );
}

export default NavbarMobile;
