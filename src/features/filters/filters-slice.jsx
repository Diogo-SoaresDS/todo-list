import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filter',
    initialState: 'all',
    reducers: {
        setFilter: (state, action) => {
            return action.payload
        }
    }
})

export const searchSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        setSearch: (state, action) => {
            return action.payload
        }
    }
})

export const selectFilteredTasks = (state) => {
    const { todos, filters, search } = state
    let filteredTasks = todos

    if (filters === 'uncompleted') {
        filteredTasks = filteredTasks.filter(task => !task.completed)
    } else if (filters === 'completed') {
        filteredTasks = filteredTasks.filter(task => task.completed)
    }

    if (search) {
        filteredTasks = filteredTasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()))
    }

    return filteredTasks
}

export const { setSearch } = searchSlice.actions
export const { setFilter } = filterSlice.actions
export const searchReducer = searchSlice.reducer
export const filterReducer = filterSlice.reducer
