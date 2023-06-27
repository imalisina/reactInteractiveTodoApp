import React from 'react';
import { Link } from 'react-router-dom';
// add smooth scroll feature
import { handleSmoothScroll } from './functions/smoothScroll';

// add framer motion
import { motion } from 'framer-motion';

const Hero = () => {
       return (
              <>
                     <div class="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
                            {/* additional space */}
                            <div className='h-14'></div>
                            <motion.div
                                   initial={{ opacity: 0, y: 10 }}
                                   animate={{ opacity: 1, y: 20 }}
                                   transition={{ duration: 0.4, type: 'tween' }} class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                                   <Link to={"/todo"} class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-sky-700 bg-sky-100 rounded-full dark:bg-sky-900 dark:text-sky-300 hover:bg-sky-200 dark:hover:bg-sky-800">
                                          <span class="text-xs bg-sky-600 rounded-full text-white px-4 py-1.5 mr-3">New</span>
                                          <span class="text-sm font-medium">Demo is available! Explore Now.</span>
                                          <svg aria-hidden="true" class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                   </Link>
                                   <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                                          Master  <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>Your Productivity</span> with Ease
                                   </h1>
                                   <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                                          Effortlessly manage your tasks and conquer your goals with Todola's intuitive and powerful task management platform.
                                   </p>
                                   {/* Navigate to Todo feature */}
                                   <Link to={"/todo"} className="mr-5 text-white bg-gradient-to-br from-emerald-600 to-sky-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-8 py-2.5 text-center mb-2">
                                          Getting started
                                   </Link>
                                   {/* Scroll to other features */}
                                   <a onClick={() => handleSmoothScroll(".pricing-section")} class="ml-5 font-small text-md text-sky-600 dark:text-sky-500 hover:underline cursor-pointer">
                                          Learn more
                                   </a>
                            </motion.div>
                            {/* additional space for smooth scroll */}
                            <div className='h-60'></div>
                     </div>
              </>
       )
}

export default Hero;