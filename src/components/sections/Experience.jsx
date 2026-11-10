import { MdOutlineWorkOutline } from "react-icons/md";
import Section from "../layout/Section";
import Container from "../layout/Container";

function Experience() {
    return (
        <>
            <Section id="Experience">
                <Container>
                    <div>
                        <header className="flex items-center gap-4 mb-8">
                            <MdOutlineWorkOutline className="size-8 dark:text-darkText-primary" />
                            <h2 className="text-2xl font-medium dark:text-darkText-primary">Experiencia laboral</h2>
                        </header>
                        <div className="flex items-center gap-4">
                            <span className="relative flex size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-amber-400"></span>
                            </span>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl text-amber-300 font-medium">Pasantía FronEnd</h3>
                                <p className="font-medium dark:text-darkText-primary">Enero 2026 - Actualmente</p>
                                <p className="dark:text-darkText-primary">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Vero quis vel aliquid, delectus deserunt rerum. Dolores cupiditate
                                    dolorum quia at, possimus quisquam animi excepturi optio. Nostrum temporibus
                                    pariatur id eveniet!
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    )
}

export default Experience
