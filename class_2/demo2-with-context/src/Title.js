import React , {Component} from 'react'
import {connect} from './connect'

class Title extends Component{
    render(){
        console.log(this.props)
        const {title , changeTitle} = this.props
        return(
            <h3 onClick={changeTitle}>{title} 点一下换一个title
            </h3>
        )
    }
}

// context 、 props 、 update

// connect(mapStateToProps , mapDispatchToProps)(Title)

// state,ownProps => {}
var mapStateToProps = function(state , ownProps){
    return {
        title : state.title
    }
}
var mapDispatchToProps = function(dispatch , ownProps){
    return {
        changeTitle : function(){
            dispatch({type : 'CHANGE_TITLE' , newTitle : 'from mapDispatch To props'})
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Title)