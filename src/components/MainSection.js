import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Link } from 'react-router-dom'


const MainSection = ({todosCount,completedCount,actions,filter}) =>(
    <section className='main'>
        {
            !!todosCount &&
            <span>
                <input 
                className='toggle-all'
                type='checkbox'
                checked={completedCount === todosCount} />
                <label onClick={actions.completeAllTodos} />
            </span>
        }
         
        <Link to='/weixinr' >weixinr</Link>|
        <Link to='/shiguduofa' >shiguduofa</Link>|
        <Link to='/todo/show_all' >{filter}_show_all|</Link>
        
        <Link to='/todo2/duofa' >shiguduofa</Link>|
        
         
        <VisibleTodoList filter={filter || 'SHOW_ALL'} />
        {
            !!todosCount && 
            <Footer 
            completedCount = {completedCount}
            activeCount = {todosCount - completedCount}
            onClearCompleted = {actions.clearCompleted}
            />
        }
        
        
    </section>
)

MainSection.propTypes = {
    todosCount: PropTypes.number.isRequired,
    completedCount: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
}


export default MainSection