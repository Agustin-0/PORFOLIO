function Footer() {
  return (
    <footer className='bg-lightmode-primary dark:bg-darkmode-secundary flex flex-col items-center gap-4 py-12'>
        <p className="text-lightText-primary dark:text-darkText-primary">© 2026 Agustin Gutierrez</p>
        <a className='border p-2 rounded-4xl text-lightText-primary dark:text-darkText-primary border-lightText-primary 
          hover:border-darkText-primary dark:border-darkText-primary hover:bg-darkmode-secundary sm:cursor-pointer 
            transition duration-300  hover:text-lightmode-primary dark:hover:bg-lightmode-primary dark:hover:text-lightText-primary' href="">
          Contacto
        </a>
    </footer>
  )
}

export default Footer