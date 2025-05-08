import React from 'react'
import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <div className='pt-8 bg-header-bg'>
        <div className='w-[1409px] mx-auto'>
            <div className='flex justify-between items-center'>
                <div>
                    <a href="#"><img src={logo} alt="main_logo"/></a>
                </div>
                <div>
                    <ul className='flex gap-x-[50px] capitalize font-secondary text-lg font-medium text-white items-center'>
                        <li><a href="#">home</a></li>
                        <li><a href="#">features</a></li>
                        <li><a href="#">service</a></li>
                        <li><a href="#">pages</a></li>
                        <li><a href="#">blog</a></li>
                    </ul>
                </div>
                <div className='text-white font-secondary font-medium text-lg gap-9 flex items-center'>
                    <button className='leading-[200%] cursor-pointer capitalize'>login</button>
                    <button className='leading-[20px] py-5 px-12 bg-btn rounded-[6px] cursor-pointer text-black capitalize'>register</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar