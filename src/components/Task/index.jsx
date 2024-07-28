import React, { useEffect, useState } from 'react'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'
import AddTask from '../AddTask'
import { useDispatch } from 'react-redux'
import { remove, update } from '../../features/todo/todo-slice'
import './Task.css'

const Task = ({ id, title, content, completed }) => {
    const dispatch = useDispatch()
    const [isChecked, setIsChecked] = useState(false)
    const [openAddTask, setOpenAddTask] = useState(false)
    const [editTask, setEditTask] = useState({ id, title, content, completed })

    useEffect(() => {
        setIsChecked(completed)
    }, [completed])
    
    const handleChecked = (checked) => {
        setIsChecked(checked)
        dispatch(update({ id, title, content, completed: checked }))
    }

    const handleRemove = () => {
        dispatch(remove({ id }))
    }

    const handleEditClick = () => {
        setEditTask({ id, title, content, completed })
        setOpenAddTask(true)
    }

    return (
        <div className={isChecked ? 'task completed' : 'task'}>
            <div className='task-content'>
                <h2>{title}</h2>
                {content && <p>{content}</p>}
            </div>
            <div className='task-actions'>
                <input type='checkbox' checked={isChecked} onChange={(e) => handleChecked(e.target.checked)} />
                <FaEdit onClick={handleEditClick} />
                <FaTrashAlt onClick={handleRemove} />
                {openAddTask && <AddTask closeAddTask={setOpenAddTask} isEdit={true} task={editTask} />}
            </div>
        </div>
    )
}
 
export default Task