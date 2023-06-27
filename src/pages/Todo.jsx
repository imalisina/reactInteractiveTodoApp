import React, { useState } from 'react';

// add framer motion
import { motion } from 'framer-motion';

// add components
import AddTask from '../components/AddTask';
import Tasks from '../components/Tasks';

const Todo = () => {
       // define the tasks state
       const [tasks, setNewTask] = useState([]);

       return (
              <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.4, type: 'tween' }}
                     className="w-full h-screen bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]"
              >
                     {/* create new task component */}
                     <AddTask setNewTask={setNewTask} />
                     {/* All added tasks */}
                     <Tasks allTasks={tasks} setNewTask={setNewTask}/>
              </motion.div>
       )
}

export default Todo;