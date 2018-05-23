import {combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const rootRouder = combineReducers({
    todos,
    visibilityFilter
})

export default rootRouder