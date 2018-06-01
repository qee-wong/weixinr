import React from 'react'
import {
    BrowserRouter as Router,Route,Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import TodoApp from '../components/TodoApp'
import WeixinApp from '../components/WeixinApp'


const Root = ({store}) => (
    <Provider store={store}>
        <WeixinApp />
        {/* <Router>
            <div>
            <Route exact path='/' component={WeixinApp} />
            <Route exact path='/todo' component={TodoApp} />
            <Route exact path='/shiguduofa' component={Shiguduofa} />
            </div>
        </Router> */}
    </Provider>
)

Root.propsTypes = {
    store: PropTypes.object.isRequired
}

export default Root