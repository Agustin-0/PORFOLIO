import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import ImgMorty from "../../assets/morty.jpg"
import Section from "../layout/Section";
import Container from "../layout/Container";

function Presentation() {
    const emailSubject = encodeURIComponent("Contacto desde tu pagina web")
    const emailBody = encodeURIComponent("Hola Agustin te contacto de ...")
    return (
        <>
            <Section id="presentacion">
                <Container>
                    <div className="dark:bg-darkmode-secundary mt-10 md:mt-0 md:py-12 sm:pt-24">
                        <header className="flex flex-col-reverse gap-8 justify-center mb-16">
                            <div>
                                <h1 className="text-9xl dark:text-darkText-primary">
                                    Desarrollador <span className="text-amber-300 font-medium">FrontEnd</span>
                                </h1>
                                <h2 className="dark:text-darkText-primary">Agustin Gutierrez</h2>
                            </div>
                            <img src={ImgMorty} alt="Una imagen de ejemplo de Morty" className=" rounded-full w-24 h-24" />
                        </header>
                        <p className="dark:text-darkText-primary">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quae facere repellat hic voluptatum asperiores minus reiciendis dolores recusandae, cumque optio? Explicabo
                        </p>
                        <nav className="pt-4">
                            <ul className="flex justify-items-start items-center flex-wrap gap-2">

                                <a target="_blank" href="https://github.com/Agustin-0"
                                    className="group flex items-center gap-1 border p-2 rounded-4xl text-lightText-primary border-lightText-primary hover:bg-darkmode-secundary
                                     dark:text-darkText-primary dark:border-darkText-primary dark:hover:bg-lightmode-primary 
                                    transition duration-300 sm:cursor-pointer">
                                    <FaGithub className="text-lightText-primary group-hover:text-lightmode-primary size-8
                                                 dark:text-darkText-primary dark:group-hover:text-lightText-primary" />
                                    <span className="text-lightText-primary group-hover:text-lightmode-primary dark:text-darkText-primary dark:group-hover:text-lightText-primary">
                                        GitHub
                                    </span>
                                </a>
                                
                                <a target="_blank" href="https://www.linkedin.com/in/agustin-undefined-532809421/"
                                    className="group flex items-center gap-1 border p-2 rounded-4xl text-lightText-primary border-lightText-primary hover:bg-darkmode-secundary
                                     dark:text-darkText-primary dark:border-darkText-primary dark:hover:bg-lightmode-primary 
                                    transition duration-300 sm:cursor-pointer">
                                    <FaLinkedin className="text-lightText-primary group-hover:text-lightmode-primary size-8
                                                 dark:text-darkText-primary dark:group-hover:text-lightText-primary" />
                                    <span className="text-lightText-primary group-hover:text-lightmode-primary dark:text-darkText-primary dark:group-hover:text-lightText-primary">
                                        Linkedin
                                    </span>
                                </a>
                                
                                <a target="_blank" href={`mailto:tucorreo@gmail.com?subject=${emailSubject}&body=${emailBody}`}
                                    className="group flex items-center gap-1 border p-2 rounded-4xl text-lightText-primary border-lightText-primary hover:bg-darkmode-secundary
                                     dark:text-darkText-primary dark:border-darkText-primary dark:hover:bg-lightmode-primary 
                                    transition duration-300 sm:cursor-pointer">
                                    <AiOutlineMail className="text-lightText-primary group-hover:text-lightmode-primary size-8
                                                 dark:text-darkText-primary dark:group-hover:text-lightText-primary" />
                                    <span className="text-lightText-primary group-hover:text-lightmode-primary dark:text-darkText-primary dark:group-hover:text-lightText-primary">
                                        contacto
                                    </span>
                                </a>

                            </ul>
                        </nav>
                    </div>
                </Container>
            </Section>
        </>
    )
};

export default Presentation;