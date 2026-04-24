import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import ImgMorty from "../../assets/morty.jpg"
function Presentacion(){
    return(
        <>
            <section className="bg-gray-300 px-6">
                <header className="flex justify-center">
                <div>
                <h1 className="font-medium text-3xl">Desarrollador <span className="text-amber-300 font-medium">FrontEnd</span></h1>
                <h2>Agustin Gutierrez</h2>
                </div>
                <img src={ImgMorty} alt="Una imagen de ejemplo de Morty" className=" rounded-full w-24 h-24" />
                </header>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quae facere repellat hic voluptatum asperiores minus reiciendis dolores recusandae, cumque optio? Explicabo inventore eos totam ducimus expedita, maxime perferendis rerum.</p>
                <nav>
                    <ul className="flex justify-items-start items-center">
                        <li>
                            <a href=""><FaGithub  className="text-neutral-900 bg-neutral-50 roundend-full hover:text-neutral-800 hover:scale-110 trasnition-transform size-10"/></a>
                        </li>
                        <li>
                            <a href=""><FaLinkedin className="text-sky-700 size-10"/></a>
                        </li>
                        <li>
                            <a href=""><AiOutlineMail className="size-10"/></a>
                        </li>
                    </ul>
                </nav>
            <div>

            </div>
            </section>
        </>
    )
};

export default Presentacion;