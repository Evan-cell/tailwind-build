import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className='flex items-center'>
                    <img src='https://www.svgrepo.com/show/474372/code.svg' className='h-6 mr-3 sm:h-9 ' alt='code' />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Tech Evolve</span>
                </a>
                <div className="flex items-center md:order-2">
                    <button type='button' className='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'>
                        <span className='sr-only'>Open user menu</span>
                        <img src="https://media.istockphoto.com/id/1392783238/photo/portrait-of-a-teenage-smiling-female-looking-at-the-camera-on-a-blue-background.jpg?b=1&s=170667a&w=0&k=20&c=NZDdjsnqA-Cv1_s9ZJdfnV2ZzjAxfvLrH-2_UFfNrWo=" alt="avatar" className='w-8 h-8 rounded-full'/>
                    </button>
                    {/* dropdown */}
                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 "id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">Evan kim</span>
                            <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">malcomchege0582@gmail.com</span>
                        </div>
                        <ul className="py-2" aria-labelledby='user-menu-button'>
                            <li>
                                <a href="" className='block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Darshboard</a>
                            </li>
                            <li>
                                <a href="" className='block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Settings</a>
                            </li>
                            <li>
                                <a href="" className='block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Profile</a>
                            </li>
                            <li>
                                <a href="" className='block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Sign Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar