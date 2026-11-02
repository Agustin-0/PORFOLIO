import React from 'react'
import Card from '../ui/Card'
import Section from '../layout/Section'
import Container from '../layout/Container'

function Projects() {
  return (
    <Section id="proyectos">
      <Container>
        <div className='flex flex-col'>
          <h2 className='pb-6 text-center text-lightText-primary dark:text-darkText-primary'>
            Mis proyectos
          </h2>
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
            <Card />
            <Card />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Projects