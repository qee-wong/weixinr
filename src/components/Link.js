import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { NavLink } from 'react-router-dom'

const Link = ({active ,children,setFilter,donetworkrequest,filter}) =>
(
    <div>
    <a className={classnames({selected: active})}
    style = {{cursor: 'pointer'}}
    onClick={()=> setFilter()}
    >
    {children}
    </a>
    <a onClick={()=> donetworkrequest()}>donetworkrequest</a>
    </div>
    // <NavLink 
    //     to = {filter === 'SHOW_ALL' ? '/' : `/${ filter }`}
    //     activeStyle={{
    //         textDecoration: 'none',
    //         color: 'black'
    //     }}
    // >{children}</NavLink>
)

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    setFilter: PropTypes.func.isRequired
}

export default Link