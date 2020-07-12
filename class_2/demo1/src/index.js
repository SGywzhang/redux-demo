import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import createStore from './createStore'

import Title from './Title'

import reducer from './reducer'

// store是局部变量，其他文件怎么办？ => props
var store = createStore(reducer)


class App extends Component{
    constructor(){
        super()
        // 订阅App的setState正确地更新App这个组件
        store.subscribe(()=>{
            this.setState(store.getState())
        })
    }
    changeTitle = (newTitle)=>{
        store.dispatch({type : 'CHANGE_TITLE',newTitle : newTitle})
    }
    render(){
        const {title , content} = store.getState()
        return(
            <div>
                <Title store={store}></Title>   
                <p>{content}</p>
                <button onClick={()=>this.changeTitle('新的标题')}>修改标题</button>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
