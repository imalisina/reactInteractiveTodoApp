import React from 'react';
import { motion } from 'framer-motion';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Tasks = ({ allTasks, setNewTask }) => {
       const completeTaskHandler = (key) => {
              allTasks.splice(key, 1);
              setNewTask([...allTasks]);
       };

       const onDragEnd = (result) => {
              if (!result.destination) {
                     return;
              }

              const { source, destination } = result;
              const updatedTasks = Array.from(allTasks);
              const [removed] = updatedTasks.splice(source.index, 1);
              updatedTasks.splice(destination.index, 0, removed);

              setNewTask(updatedTasks);
       };

       return (
              <div className="block w-2/3 mx-auto pt-14 bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
                     <div className="p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-900 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-4">
                                   <h5 className="text-3xl mx-auto font-bold leading-none text-gray-900 dark:text-white">
                                          Daily tasks
                                   </h5>
                            </div>
                            <div className="flow-root">
                                   <DragDropContext onDragEnd={onDragEnd}>
                                          <Droppable droppableId="daily_tasks">
                                                 {(provided) => (
                                                        <ul
                                                               {...provided.droppableProps}
                                                               ref={provided.innerRef}
                                                               role="list"
                                                               className="divide-y divide-gray-200 dark:divide-gray-700"
                                                        >
                                                               {allTasks.length === 0 ? (
                                                                      <h1 className="text-center text-gray-500 dark:text-gray-400">
                                                                             Add your daily tasks...
                                                                      </h1>
                                                               ) : (
                                                                      allTasks.map((task, index) => (
                                                                             <Draggable key={index} draggableId={`task-${index}`} index={index}>
                                                                                    {(provided) => (
                                                                                           <li
                                                                                                  {...provided.draggableProps}
                                                                                                  {...provided.dragHandleProps}
                                                                                                  ref={provided.innerRef}
                                                                                                  className="py-3 sm:py-4"
                                                                                           >
                                                                                                  <div
                                                                                                         initial={{ opacity: 0, y: -50 }}
                                                                                                         animate={{ opacity: 1, y: 0 }}
                                                                                                         transition={{ duration: 0.4, type: "spring" }}
                                                                                                         className="flex items-center space-x-4"
                                                                                                  >
                                                                                                         <div className="flex-1 min-w-0">
                                                                                                                <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                                                                                                                       {task}
                                                                                                                </p>
                                                                                                         </div>
                                                                                                         <button onClick={() => completeTaskHandler(index)}>
                                                                                                                <svg
                                                                                                                       className="w-6 h-6 mr-1.5 text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 flex-shrink-0"
                                                                                                                       fill="currentColor"
                                                                                                                       viewBox="0 0 20 20"
                                                                                                                       xmlns="http://www.w3.org/2000/svg"
                                                                                                                >
                                                                                                                       <path
                                                                                                                              fillRule="evenodd"
                                                                                                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                                                                              clipRule="evenodd"
                                                                                                                       />
                                                                                                                </svg>
                                                                                                         </button>
                                                                                                  </div>
                                                                                           </li>
                                                                                    )}
                                                                             </Draggable>
                                                                      ))
                                                               )}
                                                               {provided.placeholder}
                                                        </ul>
                                                 )}
                                          </Droppable>
                                   </DragDropContext>
                            </div>
                     </div>
              </div>
       );
};

export default Tasks;
