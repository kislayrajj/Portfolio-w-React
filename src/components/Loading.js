import React from 'react'
import { useSelector } from 'react-redux'
const Loading = () => {
  const themeColor = useSelector((state)=>state.theme.themeColor)
  return (
    <div className={`h-screen center  ${themeColor === "dark" ? "background" : "background-light"}`}>
     
     <div className='text-xl md:text-4xl theme-font text-green-400'>Loading..</div>
      
    </div>
  )
}

export default Loading
