import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen flex flex-col md:flex-row justify-evenly bg-gradient-to-r from-slate-900 to-zinc-900'>
      {/* <h1> hi this where you can contact me</h1> */}
      <div className='center'>
        <div className=''>
<p className='text-2xl lg:text-3xl xl:text-5xl tracking-wide'>Let's talk a bit.</p>
<p className='text-2xl lg:text-3xl xl:text-5xl tracking-wide md:mt-2'>Tell me about Your</p>
<p className='text-2xl lg:text-3xl xl:text-5xl tracking-wide md:mt-2'>project.</p>
<p className='text-lg lg:text-xl xl:text-2xl mt-5'>Lets turn you idea into <span className='theme-font bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent font-bold'>Reality</span> </p>
<div className='mt-3 lg:flex lg:items-center lg:gap-2'>
  <div className='center h-full'>
<div className=' bg-blue-400 hover:bg-green-500 px-2 rounded animate'>
<i className="fa-solid fa-envelope hidden lg:block text-6xl hover:scale-105 "></i>
</div>
  </div>
<div>
<p className='text-sm md:text-base'>You can connect <i class="fa-brands fa-twitter ml-3 text-green-500"></i> </p>
<p className='text-sm md:text-base'>with me using social media handles or</p>
<p className=' text-sm md:text-base'>Just mail me at <a href="mailto:wrkislayraj89@gmail.com" className='underline text-green-500'>Click</a></p>
</div>
</div>
      </div>
      </div>
      <div className='center'>
        <div>
Send me a text <i className="fa-solid fa-paper-plane fa-bounce"></i>
<form action=""></form>
      </div>
      </div>
     
    </div>
  )
}

export default Contact
