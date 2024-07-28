import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './features/todo/todo-slice'
import { filterReducer, searchReducer } from './features/filters/filters-slice'

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        filters: filterReducer,
        search: searchReducer
    }
})