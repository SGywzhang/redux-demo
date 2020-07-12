import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk' //1. 使dispatch可以接受函数类型的action

import {load_data} from './action'

var reducer = function (state, action) {
    if (!state) {
        return {
            data: [],
            loading: false
        }
    }

    switch (action.type) {
        case 'LOAD_DATA':

            return {
                ...state,
                loading: true
            }
        case 'DONE_LOAD':
            return {
                ...state,
                loading : false ,
                data : action.data
            }
        default:
            return state
    }
}

var store = createStore(reducer , applyMiddleware(thunk)) // 2. 把thunk作为redux的中间件


class App extends React.Component {
    render() {
        const { loading, data , loadData} = this.props
        console.log(data)
        return (
            <div>
                <button onClick={()=>{
                    loadData()
                    }}>load data</button>
                <hr></hr>
                <div>{loading ? 'loading' : 'all data showing'}</div>
                {
                    loading ? '' : (
                        <ul>
                            {data.map((v, k) => (
                                <li key={v.id}>{v.name}</li>
                            ))}
                        </ul>
                    )
                }
            </div>
        )
    }
}

var mapStateToProps = function (state, ownProps) {
    return {
        loading: state.loading,
        data: state.data
    }
}

var mapDispatchToProps = function(dispatch , ownProps){
    return {
        loadData : function(){
            dispatch(load_data('你好吗？')) //3. 使用dispatch传入函数类型action
        }
    }
}

App = connect(mapStateToProps,mapDispatchToProps)(App)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
