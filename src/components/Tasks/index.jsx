import React from 'react'
import Task from '../Task'
import { useSelector } from 'react-redux'
import { selectFilteredTasks } from '../../features/filters/filters-slice'
import './Tasks.css'

const Tasks = () => {
    const tasks = useSelector(selectFilteredTasks)

    return ( 
        <div className='task-container'>
            {tasks.map(task => (
                <Task key={task.id} id={task.id} title={task.title} content={task.content} completed={task.completed} />
            ))}
        </div>
    )
}
 
export default Tasks