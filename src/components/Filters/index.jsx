import React from 'react'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter, setSearch } from '../../features/filters/filters-slice'
import './Filters.css'

const Filters = () => {
    const dispatch = useDispatch()
    const currentFilter = useSelector(state => state.filters)
    const searchQuery = useSelector(state => state.search)

    const handleFilterClick = (filter) => {
        dispatch(setFilter(filter))
    }

    const handleSearchChange = (event) => {
        dispatch(setSearch(event.target.value))
    }

    return ( 
        <div className="filters">
            <input value={searchQuery} onChange={handleSearchChange} type="search" placeholder='Pesquisar Tarefa' />
            <div className="filters-button">
                <Button className={currentFilter === 'all' ? 'active' : ''} 
                    name='Todas as Tarefas' 
                    onClick={() => handleFilterClick('all')} />
                <Button className={currentFilter === 'uncompleted' ? 'active' : ''} 
                    name='Tarefas a Fazer' 
                    onClick={() => handleFilterClick('uncompleted')} />
                <Button className={currentFilter === 'completed' ? 'active' : ''} 
                    name='Tarefas Concluidas' 
                    onClick={() => handleFilterClick('completed')} />
            </div>
        </div>
    )
}

export default Filters