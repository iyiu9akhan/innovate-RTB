import React from 'react'

function Brand_logo({children , className}) {
  return (
    <div className={`h-[120px] md:h-[142px] bg-white rounded-[12.5px] flex items-center justify-center ${className}`}>
        {children}
    </div>
  )
}

export default Brand_logo