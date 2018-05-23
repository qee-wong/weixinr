import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TodoTextInput extends React.Component{
    static propTypes = {
        onSave: PropTypes.func.isRequired,
        text: PropTypes.string,
        placeholder: PropTypes.string,
        editing: PropTypes.bool,
        newTodo: PropTypes.bool
    }

    static = {
        text: this.props.text || ''
    }

    handleSubmit = e => {
        const text = e.target.value.trim()
        if(e.which === 13){
            this.props.onSave(text)
            if(this.props.newTodo){
                this.setState({text: ''})
            }
        }
    }

    handleChange = e => {
        this.setState({text: e.target.value})
    }

    handleBlur = e => {
        if(!this.props.newTodo){
            this.props.onSave(e.target.value)
        }
    }

    render(){
        return(
            <input type='text'
            className ={
                classnames({
                    edit: this.props.editing,
                    'new-todo': this.props.newTodo
                })
            }
            placeholder={this.porps.placeholder}
            autoFocus='true'
            value={this.state.text}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit} />
        )
    }
}
