import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


// demo3：使用connect优化子组件的context逻辑：将store相关操作和context相关操作全部移交到高阶组件中
//  核心： 查看connect组件
//  缺点：App组件中仍包含太多传递store的context逻辑


import Content from './components/Content'


import {createStore} from './createStore'
import {reducer} from './reducer'

import PropTypes from 'prop-types'


var store = createStore(reducer)

class App extends React.Component {
    static childContextTypes = {
        store : PropTypes.object
    }
    getChildContext(){
        return {
            store : store
        }
    }
    constructor(){
        super()
        this.state = store.getState()
        store.subscribe(()=>{
            this.setState(
                store.getState()
            )
        })
    }
    render(){
        const {title } = this.state
        console.log(this.state)
        return (
            <div>
                <h3>{title}</h3>
                <Content></Content>
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));






serviceWorker.unregister();
