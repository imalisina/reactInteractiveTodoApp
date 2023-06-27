import React, { useEffect, useState } from 'react';

// add framer motion
import { motion } from 'framer-motion';

// add components
import AddTask from '../components/AddTask';

const Todo = () => {
       // define the tasks state
       const [tasks, setTasks] = useState([]);

       

       return (
              <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.4, type: 'tween' }}
                     className="h-96 bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]"
              >
                     {/* Add new task component */}
                     <AddTask setTasks={setTasks}/>
                     <button onClick={() => console.log(tasks)}>click to check</button>
              </motion.div>
       )
}

export default Todo;