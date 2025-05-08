import React from 'react'
import Container from '../Layout/container'

function Banner({children}) {
  return (
    <div className="bg-[url('/src/assets/bg_shape.png')] bg-no-repeat bg-cover bg-center relative w-full pt-[92px]">
      {children}
      <Container>
      <div className='text-center'>
        <h1 className='font-secondary font-bold text-[56px] w-[786px] mx-auto text-white mt-[98px] mb-[20px] leading-[64px]'>Get your work done with Management Tool</h1>
        <p className='font-secondary font-normal text-lg tracking-[-0.0025em] text-white leading-8 w-[467px] mx-auto mb-8'>The world's first project management platform that connects everything</p>
        <input type="text" className='h-[66px] w-[480px] rounded-[6px] bg-white'/>
      </div>
    </Container>
    </div>
  )
}

export default Banner