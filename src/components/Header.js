import {BsPlus, BsFillLightningFill} from 'react-icons/bs'
import {FaFire, FaPoo} from 'react-icons/fa'

export default function Header() {
  return (
    <div className='header'>
      <HeaderIcon icon={<FaFire size='28' />} text='Fire' />
      <HeaderIcon icon={<BsPlus size='32' />} text='Plus' />
      <HeaderIcon icon={<BsFillLightningFill size='20' />} text='Lightning' />
      <HeaderIcon icon={<FaPoo size='20' />} text='Poop' />
    </div>
  )
}

const HeaderIcon = ({icon, text})=> (
  <div className='sidebar-icon group'>
    {icon}
    <span  className='sidebar-tooltip group-hover:scale-100'>
      {text}
    </span>
  </div>
)
