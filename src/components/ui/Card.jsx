
import ImgInglishCards from '../../assets/cabecera.png'
import { FaArrowRight } from "react-icons/fa";

function Card() {

  return (
    <>
    <article className='bg-lightmode-secundary dark:bg-darkmode-primary flex flex-col gap-6 rounded-3xl 
    md:rounded-md shadow-md shadow-[#FEDA64] max-w-3xs overflow-hidden '>
        <header className=' grow-3'>
            <img className='w-full' src={ImgInglishCards} alt="Una imagen de referencia del proyecto Inglish Cards" />
        </header>
        <div className='p-2.5 grow-5'>
            <h3 className='text-lg font-semibold text-amber-50'>Inglish cards</h3>
            <p className='text-lightText-primary dark:text-darkText-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est at veritatis? Placeat magni nemo corporis odit quia a, veritatis soluta dolore itaque asperiores earum explicabo non aperiam, quis distinctio.</p>
        </div>
        <footer className='p-2.5 grow-2'>
            <div className='flex justify-end items-center gap-1 text-[#FEDA64]'>
                <p>Continuar leyendo</p>
                <FaArrowRight />
            </div>
        </footer>
    </article>
    </>
  )
}

export default Card
