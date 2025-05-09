import React from 'react'
import Container from '../Layout/container'
import Button from '../Layout/Button'

function Integration() {
  return (
    <div className='bg-sectionBG-color pt-[124px]'>
        <Container>
            <div className='flex justify-between'>
                <div className='pt-[49px] pb-[23px]'>
                    <p className='font-secondary font-medium text-[20px] text-[#FF7364] capitalize mb-1'>integrations</p>
                    <h4 className='font-primary font-bold text-[46px] leading-[58px] tracking-[-1px] w-[587px] text-blue-color mb-[20px]'>Easily integrate with your favorite apps</h4>
                    <p className='font-secondary text-lg leading-8 text-info-color w-[533px] tracking-[-0.045px]'>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>
                    <Button className= 'mt-[40px] '>get started</Button>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Integration