import React from 'react'

function Hero() {
  return (
    <div>
      <section className='dark:bg-gray-800 dark:text-gray-100'>
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src="https://mambaui.com/assets/svg/Business_SVG.svg" alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"/>
            </div>
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl">About
                <span className='text-red-800 text-5xl font-bold leading-none sm:text-6xl'>Us</span>
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">
                Tech Evolve is a cutting-edge technology company that is dedicated to helping businesses and individuals thrive in the digital age. With our focus on innovation and quality, we offer a wide range of products and services that are designed to meet the unique needs of our clients. Whether you're looking for software development, web design, or IT consulting, our team of experienced professionals is here to help.
                </p>
                <div className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start'>
                <button class="rounded-full bg-rose-700 font-bold text-white p-3 ...">Read... More</button>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Hero