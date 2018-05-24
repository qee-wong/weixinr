import React from 'react';
import ReactDOM from 'react-dom';
import {MessageQuery} from './view/MessageQuery';
import {BusinessProcessing} from './view/BusinessProcessing';
import {InteractionPolicePeople} from './view/InteractionPolicePeople';

import {createStore} from 'redux'
import { Provider } from 'react-redux'
import TodoApp from './components/TodoApp'
import reducer from './reducers'
import 'todomvc-app-css/index.css'
const store = createStore(reducer)

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {weixinId:openid,tabn:tab};
    }

    render(){
        if(this.state.tabn==='1')
            return <MessageQuery weixinId={this.state.weixinId} /> ;
        if(this.state.tabn==='2')
            return <BusinessProcessing weixinId={this.state.weixinId} /> ;
        if(this.state.tabn==='3')
            return <InteractionPolicePeople weixinId={this.state.weixinId} /> ;
    }
}


// ReactDOM.render(
//      <App />,
//   document.getElementById('root')
// );


ReactDOM.render(
     <Provider store={store}>
         <TodoApp />
     </Provider>,
  document.getElementById('root')
);

