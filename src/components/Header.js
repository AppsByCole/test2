import {useNavigate} from 'react-router-dom'
import {HiMenu} from 'react-icons/hi'
import {MdPerson} from 'react-icons/md'

export default function Header() {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <div className='header'>
      <div className='header-icon group'>
        <HiMenu size='28' />
        <span  className='header-tooltip left-12 group-hover:scale-100'>
          Navigation Menu
        </span>
      </div>
      
      <a 
      className='select-none text-4xl text-center link'
      onClick={handleGoHome}
      >
        Apps By Cole
      </a>

      <div className='header-icon group'>
        <MdPerson size='28' />
        <span  className='header-tooltip right-12 group-hover:scale-100'>
          User Options
        </span>
      </div>
    </div>
  )
}
