import React , {Component} from 'react'

export default class Title extends Component{
    render(){
        const {store} = this.props
        const {title} = store.getState()
        return(
            <h3 onClick={()=>{
                store.dispatch({type : 'CHANGE_TITLE' , newTitle : '新的title'})
            }}>{title} 点一下换一个title</h3>
        )
    }
}