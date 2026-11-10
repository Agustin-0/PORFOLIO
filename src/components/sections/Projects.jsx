import Card from '../ui/Card'
import Section from '../layout/Section'
import Container from '../layout/Container'
import ImgInglishCards from '../../assets/cabecera.png'

const projectsList = [
    {
        "id": 1,
        "img": ImgInglishCards,
        "imgAlt":"Una imagen del proyecto inglish card", 
        "title": "Inglish cards",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime velit enim laudantium, laborum quidem porro dolorem expedita amet repellendus sit aperiam dicta dolore iure, eius maiores veritatis est magnam.",
        "url": "https://inglish-cards.vercel.app/",
        "colorShadow": "#FEDA64",
    },
    {
        "id": 2,
        "img": ImgInglishCards,
        "imgAlt":"Una imagen del proyecto inglish card", 
        "title": "Inglish cards",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime velit enim laudantium, laborum quidem porro dolorem expedita amet repellendus sit aperiam dicta dolore iure, eius maiores veritatis est magnam.",
        "url": "https://inglish-cards.vercel.app/",
        "colorShadow": "#FEDA64",
    }
]

function Projects() {
  return (
    <Section id="proyectos">
      <Container>
        <div className='flex flex-col'>
          <h2 className='pb-6 text-center text-lightText-primary dark:text-darkText-primary'>
            Mis proyectos
          </h2>
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
            { projectsList.map( project => (
              <Card key={project.id} img={project.img} imgAlt={project.imgAlt} 
              title={project.title} text={project.text} url={project.url} colorShadow ={project.colorShadow} /> )) }
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Projects