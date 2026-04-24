import vite from '../../assets/vite.svg'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='flex justify-between px-8 bg-neutral-100 '>
        <img src={vite} alt="una img de react" />
        <Navbar />
    </div>
  )
}

export default Header;