import {BsPlus, BsFillLightningFill} from 'react-icons/bs'
import {FaFire, FaPoo} from 'react-icons/fa'
import {HiMenu} from 'react-icons/hi'
import {MdPerson} from 'react-icons/md'

export default function Header() {
  return (
    <div className='header'>
      <div className='sidebar-icon group'>
        <HiMenu size='28' />
        <span  className='sidebar-tooltip left-12 group-hover:scale-100'>
          Navigation Menu
        </span>
      </div>
      
      <p className='text-4xl flex-1 text-center'>Apps By Cole</p>

      <div className='sidebar-icon group'>
        <MdPerson size='28' />
        <span  className='sidebar-tooltip right-12 group-hover:scale-100'>
          User Options
        </span>
      </div>
    </div>
  )
}
