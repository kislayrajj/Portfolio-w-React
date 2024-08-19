import React from 'react'

const NavigationButton = () => {
    const handleGoBack=()=>{
        window.history.back()
    }
  return (
    <div>
        <div onClick={handleGoBack} className="preButton fixed  size-7 lg:size-10 rounded-full center opacity-70 text-black lg:text-xl">
      <i className="fa-solid fa-angle-left"></i>

        </div>
    </div>
  )
}

export default NavigationButton
