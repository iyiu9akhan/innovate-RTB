import React from 'react'
import Container from '../Layout/container'
// import texture from '../facts/texture.png'
import illustration from '../../assets/facts/illustration.png'

function Facts() {
    const facts_data = [
        {
            digit: "720+",
            info: "Over 500 business powered with us"
        },
        {
            digit: "4.9",
            info: "Rating on google play and app store"
        },
        {
            digit: "200+",
            info: "Easily integrate with your favorite apps"
        },
        
    ]

  return (
    <div>
        <Container>
            <div className="rounded-[40px] bg-blueBtn-color bg-[url('/assets/facts/texture.png')] bg-no-repeat flex justify-between ">
                <div>
                    <img src={illustration} alt="#illustration" />
                </div>
                <div>
                    <h4>Trusted by 35,000+ happy customers.</h4>
                    <div className='flex justify-between'>
                        <div>
                            <h2>720+</h2>
                            <p>Over 500 business powered with us</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Facts