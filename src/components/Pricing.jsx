import React from 'react';

// get pricing plan data
import pricingPlans from '../data/pricingPlans';

const Pricing = () => {
       return (
              <div className='pricing-section'>
                     <div className="flex flex-wrap justify-around bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
                            {
                                   pricingPlans.map((plan, key) => (
                                          <div key={key} class="w-full max-w-sm p-4 my-2 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-900 dark:border-gray-700">
                                                 <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{plan.name}</h5>
                                                 <div class="flex items-baseline text-gray-900 dark:text-white">
                                                        <span class="text-3xl font-semibold">$</span>
                                                        <span class="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                                                        <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                                                 </div>
                                                 <ul role="list" class="space-y-5 my-7">
                                                        {
                                                               plan.features.map((feature, key) => (
                                                                      <li key={key} class="flex space-x-3">
                                                                             <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-sky-600 dark:text-sky-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                                                             <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{feature}</span>
                                                                      </li>
                                                               ))
                                                        }
                                                 </ul>
                                                 <button type="button" class="text-white bg-gradient-to-br from-emerald-600 to-sky-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-sky-200 dark:focus:ring-sky-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
                                          </div>

                                   ))
                            }
                     </div>
                     {/* additional space for smooth scroll */}
                     <div className="h-40 bg-white dark:bg-gray-900  bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]"></div>
              </div>
       )
}

export default Pricing;