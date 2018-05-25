import * as types from '../constants/ActionTypes'
import 'whatwg-fetch'

export const addTodo = text => ({type:types.ADD_TODO,text})
export const deleteTodo = id => ({type:types.DELETE_TODO,id})
export const editTodo = (id,text) => ({type:types.EDIT_TODO,id,text})
export const completeTodo = id => ({type:types.COMPLETE_TODO,id})
export const completeAllTodos = ()=> ({type:types.COMPLETE_ALL_TODOS})
export const clearCompleted = () => ({type:types.CLEAR_COMPLETED})
export const setVisibilityFilter = filter => ({type:types.SET_VISIBILITY_FILTER,filter})


const API_ROOT = 'https://api.github.com/'

function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response => response.json()) // parses response to JSON
}


export const donetworkrequest = url => {

    //fetch 参考地址：https://github.com/github/fetch

    return function(dispatch){
 
        fetch(API_ROOT+'users/qee-wong').then(response =>
            response.json().then(json => {
                console.log(json)
                console.log(json.login)
                dispatch ({type:types.ADD_TODO,text: json.login})
            })
            )

        //dispatch({type:types.SET_VISIBILITY_FILTER,filter: url})
        

        
    }

    
}