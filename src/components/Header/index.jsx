import React, { useState } from 'react'
import Button from '../Button'
import AddTask from '../AddTask'
import './Header.css'

const Header = () => {
    const [openAddTask, setOpenAddTask] = useState(false)

    return ( 
        <header className='header'>
            <h1>To-Do List</h1>
            <Button name='Criar Tarefa' onClick={() => setOpenAddTask(true)} />
            {openAddTask && <AddTask closeAddTask={setOpenAddTask} />}
        </header>
    )
}
 
export default Header