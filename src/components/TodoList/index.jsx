import React from 'react'
import Header from '../Header'
import Filters from '../Filters'
import Tasks from '../Tasks'

const TodoList = () => {
    return ( 
        <>
            <Header />
            <Filters />
            <Tasks />
        </>
    )
}
 
export default TodoList