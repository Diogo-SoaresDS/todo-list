import React, { useEffect, useState } from 'react'
import './AddTask.css'
import { useDispatch } from 'react-redux'
import { create, update } from '../../features/todo/todo-slice'

const AddTask = ({ closeAddTask, isEdit, task }) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [completed, setCompleted] = useState(false)

    useEffect(() => {
        if (isEdit && task) {
            setTitle(task.title)
            setContent(task.content)
            setCompleted(task.completed)
        }
    }, [isEdit, task])

    const handleSubmit = (e) => {
        e.preventDefault()

        if(title) {
            if (isEdit && task) {
                dispatch(update({ id: task.id, title, content, completed }))
            } else {
                dispatch(create({ title, content }))
            }

            setTitle('')
            setContent('')
            closeAddTask(false)
        }
    }

    return ( 
        <div className="modal-overlay">
        <div className="modal-add-task">
            <div className="add-task">
                {!isEdit && <h2>Nova Tarefa</h2>}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="task-title">Título</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} id="task-title" type="text" required />
                    <label htmlFor="task-description">Descrição</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} id="task-description" />
                    <div className="buttons">
                        {!isEdit ? 
                            <button type="submit">Adicionar</button> :
                            <button type='submit' className='edit'>Salvar</button>
                        }
                        <button type="button" onClick={() => closeAddTask(false)}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}
 
export default AddTask