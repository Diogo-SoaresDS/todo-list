import { createSlice, nanoid } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        create: (state, actions) => {
            const newTodo = {
                id: nanoid(),
                title: actions.payload.title,
                content: actions.payload.content,
                completed: false
            }
            state.unshift(newTodo)
        },
        
        update: (state, actions) => {
            const { id, title, content, completed } = actions.payload
            const existingTodo = state.find(todo => todo.id === id)
            if (existingTodo) {
                existingTodo.title = title
                existingTodo.content = content
                existingTodo.completed = completed
            }
        },

        remove: (state, actions) => {
            const idToRemove = actions.payload.id
            return state.filter(todo => todo.id !== idToRemove)
        }
    }
})

export const { create, update, remove } = todoSlice.actions
export const todoReducer = todoSlice.reducer