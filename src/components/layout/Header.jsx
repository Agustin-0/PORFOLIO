import Navbar from './Navbar'

function Header() {
  return (
    <div className='fixed top-0 right-0 left-0 flex justify-end md:justify-center items-center py-4 px-4
     bg-lightmode-secundary dark:bg-darkmode-primary border-b  border-lightText-secundary'>
        <Navbar />
    </div>
  )
}

export default Header;