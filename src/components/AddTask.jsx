import React from 'react';

const AddTask = ({ setNewTask }) => {
       // add new task handler
       const newTaskHandler = () => {
              // select the input element
              const input = document.querySelector('input[name="new_task"]');
              // extract entered new task
              const newTask = input.value;
              // add the task into state
              setNewTask((prevTasks) => [...prevTasks, newTask]);
              // reset the input value
              input.value = "";
       }

       return (
              <div className="pt-32 bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
                     <div class="relative flex justify-center">
                            <input
                                   name='new_task'
                                   type="text"
                                   class="block w-2/4 p-4 pl-9 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none bg-gray-50 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                                   placeholder="What task needs to be done?"
                                   required />
                            <button
                                   onClick={() => newTaskHandler()}
                                   class="text-white absolute right-96 mr-3 bottom-2.5 bg-gradient-to-br from-emerald-600 to-sky-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-sky-600 dark:hover:bg-sky-700">
                                   Add task
                            </button>
                     </div>
              </div>
       )
}

export default AddTask;