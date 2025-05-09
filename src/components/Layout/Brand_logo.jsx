import React from 'react'

function Brand_logo({children , className}) {
  return (
    <div className={`h-[142px] bg-white rounded-[12.5px] ${className}`}>
        {children}
    </div>
  )
}

export default Brand_logo