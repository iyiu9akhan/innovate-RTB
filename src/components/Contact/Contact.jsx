import React from 'react'
import Container from '../Layout/container'
import Button from "../Layout/Button";


const Contact = () => {
  return (
    <div>
        <Container>
            <div className='mt-[160px] bg-blueBtn-color rounded-[20px] px-[102px] py-[100px] flex justify-between items-center'>
              <h1 className='font-primary font-bold text-[46px] leading-[58px] text-white w-[577px]'>Don’t find the answer? contact us for any query.</h1>
              <Button className="bg-btn !text-black border-btn !border-2 hover:!border-btn hover:!text-white">contact us</Button>
            </div>
        </Container>
    </div>
  )
}

export default Contact