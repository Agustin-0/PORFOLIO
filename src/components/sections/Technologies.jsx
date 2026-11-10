import Container from "../layout/Container";
import Section from "../layout/Section";

export default function Technologies() {
    return (
        <>
            <Section id="tecnologias">
                <Container>
                    <div className="flex flex-col items-center gap-8 text-center">
                        <h2 className="text-4xl text-darkText-primary">Tecnologías</h2>
                        <div className="">
                            <h3 className="text-lightText-primary dark:text-darkText-primary">FrontEnd</h3>
                            <ul className="flex justify-center gap-4 flex-wrap text-center  
                            py-3 px-4 rounded-3xl inset-shadow-sm inset-shadow-zinc-950 dark:border-darkmode-primary bg-lightmode-primary dark:bg-darkmode-primary">
                                <li>
                                    <svg className="size-12">
                                        <use href="sprite.svg#html"></use>
                                    </svg>
                                    <span className="text-lightText-primary dark:text-darkText-primary">HTML</span>
                                </li>
                                <li>
                                    <svg className="size-12">
                                        <use href="sprite.svg#css"></use>
                                    </svg>
                                    <span className="text-lightText-primary dark:text-darkText-primary">CSS</span>
                                </li>
                                <li>
                                    <svg className="size-12">
                                        <use href="sprite.svg#javascript"></use>
                                    </svg>
                                    <span className="text-lightText-primary dark:text-darkText-primary">javacript</span>
                                </li>
                                <li>
                                    <svg className="size-12">
                                        <use href="sprite.svg#tailwind"></use>
                                    </svg>
                                    <span className="text-lightText-primary dark:text-darkText-primary">tailwind</span>
                                </li>
                                <li>
                                    <svg className="size-12">
                                        <use href="sprite.svg#react"></use>
                                    </svg>
                                    <span className="text-lightText-primary dark:text-darkText-primary">React</span>
                                </li>
                                <li>
                                    <svg className="size-12">
                                        <use href="sprite.svg#figma"></use>
                                    </svg>
                                    <span className="text-lightText-primary dark:text-darkText-primary">Figma</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-8">
                            <div>
                                <h3 className="text-lightText-primary dark:text-darkText-primary">Herramientas</h3>
                                <ul className="flex justify-center gap-4 flex-wrap text-center  
                            py-3 px-4 rounded-3xl inset-shadow-sm inset-shadow-zinc-950 dark:border-darkmode-primary bg-lightmode-primary dark:bg-darkmode-primary">
                                    <li>
                                        <svg className="size-12">
                                            <use href="sprite.svg#git"></use>
                                        </svg>
                                        <span className="text-lightText-primary dark:text-darkText-primary">Git</span>
                                    </li>
                                    <li>
                                        <svg className="size-12">
                                            <use href="sprite.svg#github"></use>
                                        </svg>
                                        <span className="text-lightText-primary dark:text-darkText-primary">Github</span>
                                    </li>
                                    <li>
                                        <svg className="size-12">
                                            <use href="sprite.svg#gimp"></use>
                                        </svg>
                                        <span className="text-lightText-primary dark:text-darkText-primary">Gimp</span>
                                    </li>
                                    <li>
                                        <svg className="size-12">
                                            <use href="sprite.svg#trello"></use>
                                        </svg>
                                        <span className="text-lightText-primary dark:text-darkText-primary">trello</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lightText-primary dark:text-darkText-primary">Aprendiendo</h3>
                                <ul className="flex justify-center items-center gap-4 flex-wrap
                                    py-3 px-4 rounded-3xl inset-shadow-sm inset-shadow-zinc-950 dark:border-darkmode-primary bg-lightmode-primary dark:bg-darkmode-primary">
                                    <li>
                                        <svg className="size-12">
                                            <use href="sprite.svg#nodejs"></use>
                                        </svg>
                                        <span className="text-lightText-primary dark:text-darkText-primary">Nodejs</span>
                                    </li>
                                    <li>
                                        <div className="bg-gray-900 dark:bg-gray-100 rounded-2xl p-1">
                                            <span className="font-thin text-4xl text-darkText-primary dark:text-lightText-primary">EX</span>
                                        </div>
                                        <span className="text-lightText-primary dark:text-darkText-primary">Express</span>
                                    </li>
                                    <li>
                                        <svg className="size-12">
                                            <use href="sprite.svg#mongodb"></use>
                                        </svg>
                                        <span className="text-lightText-primary dark:text-darkText-primary">MongoDB</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    )
}