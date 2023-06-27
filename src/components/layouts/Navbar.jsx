import React from 'react'
import { Link, useLocation } from 'react-router-dom';

// add dark - light mode switcher
import Theme from '../Theme';

// Navbar component
const Navbar = () => {
       // get current route
       const currentRoute = useLocation();

       return (
              <>
                     <nav nav className="menu-section bg-white border-gray-200 dark:bg-gray-900" >
                            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                                   <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
                                          Todola
                                          <sup>
                                                 <span className="bg-sky-100 text-sky-800 text-xs font-medium mr-2 ml-1.5 px-1.5 py-0.5 rounded dark:bg-sky-900 dark:text-sky-300">Beta</span>
                                          </sup>
                                   </span>
                                   <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                                          <span className="sr-only">
                                                 Open main menu
                                          </span>
                                          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                   </button>
                                   {
                                          currentRoute.pathname !== "/todo"
                                                 ? (
                                                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                                                               <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                                                      <li>
                                                                             <span className="block py-2 pl-3 pr-4 text-white bg-sky-700 rounded md:bg-transparent md:text-sky-700 md:p-0 dark:text-white md:dark:text-sky-500" aria-current="page">
                                                                                    Home
                                                                             </span>
                                                                      </li>
                                                                      <li>
                                                                             <a href="" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 dark:text-white md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                                                                    Pricing
                                                                             </a>
                                                                      </li>
                                                                      <li>
                                                                             <a href="" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 dark:text-white md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                                                                    Subscribe
                                                                             </a>
                                                                      </li>
                                                                      <li>
                                                                             {/* Adding dark - light mode switcher component */}
                                                                             <Theme />
                                                                      </li>
                                                               </ul>
                                                        </div>
                                                 ) : (
                                                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                                                               <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                                                      <li>
                                                                             <Link to={"/"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 dark:text-white md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                                                                    Home
                                                                             </Link>
                                                                      </li>
                                                                      <li>
                                                                             <a href="" className="block py-2 pl-3 pr-4 text-white bg-sky-700 rounded md:bg-transparent md:text-sky-700 md:p-0 dark:text-white md:dark:text-sky-500" aria-current="page">
                                                                                    Dashboard
                                                                             </a>
                                                                      </li>
                                                                      <li>
                                                                             {/* Adding dark - light mode switcher component */}
                                                                             <Theme />
                                                                      </li>
                                                               </ul>
                                                        </div>
                                                 )
                                   }
                            </div>
                     </nav >
              </>
       )
}

export default Navbar;