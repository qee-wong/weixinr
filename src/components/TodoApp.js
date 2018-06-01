import React from 'react'
import Header from '../containers/Header'
import MainSection from '../containers/MainSection'

const TodoApp = ({match:{ params }}) => {
    console.log(params)
    return(
        <div>
            <Header />
            <MainSection filter={params.filter} />
        </div>
    )
}

export default TodoApp