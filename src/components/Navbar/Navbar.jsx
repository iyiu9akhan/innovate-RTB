import React from 'react'
import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <div>
        <div className='w-[1409px] mx-auto'>
            <div className='flex justify-between'>
                <div>
                    <a href="#"><img src={logo} alt="main_logo"/></a>
                </div>
                <div>
                    <ul className='flex gap-x-[50px] capitalize font-secondary text-lg font-medium text-white'>
                        <li><a href="#">home</a></li>
                        <li><a href="#">features</a></li>
                        <li><a href="#">service</a></li>
                        <li><a href="#">pages</a></li>
                        <li><a href="#">blog</a></li>
                    </ul>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar