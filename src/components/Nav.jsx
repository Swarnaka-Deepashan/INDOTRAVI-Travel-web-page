import { navLinks } from "../constants"
import {hamburger} from '../assets/icons';

const Nav = () => {
    return (
      <header className='absolute mt-5 z-10 w-full py-8 padding-x'>
          <nav className='relative flex items-center justify-between max-container'>
              <p className="font-palanquin text-xl text-white font-semibold">
                INDOTRAVI
              </p>
              <ul className='absolute shadow-md left-1/2 transform -translate-x-1/2 flex items-center justify-center py-3 px-6 gap-16 max-lg:hidden backdrop-blur-md bg-white/30 rounded-full'>
                  {navLinks.map((item) => (
                      <li key={item.label}>
                          <a href={item.href} className='text-lg leading-normal font-normal text-slate-gray'>
                              {item.label}
                          </a>
                      </li>
                  ))}
              </ul>
              <div className='hidden max-lg:block'>
                  <img src={hamburger} alt="Hamburger" width={25} height={25} />
              </div>
          </nav>
      </header>
    )
  }
  
  export default Nav