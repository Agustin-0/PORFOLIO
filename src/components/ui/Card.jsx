import { FaArrowRight } from "react-icons/fa";

function Card({img, imgAlt, title, text, url, colorShadow }) {

  return (
    <>
    <a href={url} target="_blank" rel="noopener noreferrer" className={`bg-lightmode-secundary dark:bg-darkmode-primary flex flex-col gap-6 rounded-3xl 
        md:rounded-md shadow-md shadow-[${colorShadow}] max-w-3xs overflow-hidden `}>
        <header className=' grow-3'>
            <img className='w-full' src={img} alt={imgAlt} />
        </header>
        <div className='p-2.5 grow-5'>
            <h3 className='text-lg font-semibold text-amber-50'>{title}</h3>
            <p className='text-lightText-primary dark:text-darkText-primary'>{text}</p>
        </div>
        <footer className='p-2.5 grow-2'>
            <div className='flex justify-end items-center gap-1 text-[#FEDA64]'>
                <p>Continuar leyendo</p>
                <FaArrowRight />
            </div>
        </footer>
    </a>
    </>
  )
}

export default Card
