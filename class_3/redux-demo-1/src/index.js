import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


// reducer 状态处理函数
import { createStore, applyMiddleware } from 'redux' //redux和react-redux组件的区别
import { connect, Provider } from 'react-redux'

// 引入reducer
import reducer from './reducers' //默认引入 index.js

// 引入action
import { add_one } from './action'

// var logger = function(store){
//     return function(next){
//         return function(action){
//             console.group('logger')
//             console.log(action)
//             next(action)
//             console.log(store.getState())
//             console.groupEnd('logger')
//         }
//     }
// }

// {type : 'ADD_ONE'} function?
var logger = store => next => action => {
    console.group('logger')
    console.log(action)
    next(action)
    console.log(store.getState())
    console.groupEnd('logger')
}

var store = createStore(reducer,
    applyMiddleware(logger)
) //创建store

// 记数器
class App extends Component {
    render() {
        console.log(this.props)
        const { count, add_one } = this.props
        return (
            <div>
                {count}
                <button onClick={add_one}>点一下+1</button>
            </div>
        )
    }
}

var mapStateToProps = function (state, ownProps) {
    return {
        count: state.reducer.count
    }
}
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        add_one: function () {
            dispatch(
                add_one() //返回一个action
            )
        }
    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
    // 根组件 store传递给包裹了全部组件的Provider
    // Provider作为一个根组件
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
