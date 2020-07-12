import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


// demo4：使用Provider抽取根组件逻辑：使用context传递store
//  核心： 查看connect.js


import Content from './components/Content'


import { createStore } from './createStore'
import { reducer } from './reducer'

import PropTypes from 'prop-types'

import { Provider, connect } from './connect'

var store = createStore(reducer)

class App extends React.Component {
    constructor() {
        super()
    }
    render() {
        const { title } = this.props
        return (
            <div>
                <h3>{title}</h3>
                <Content></Content>
            </div>
        )
    }
}

App = connect((state) => {
    return {
        title: state.title
    }
}, () => {
    return {}
})(App)



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));






serviceWorker.unregister();
