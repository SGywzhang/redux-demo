import React , {Component} from 'react'
import PropTypes from 'prop-types'

import {connect} from '../connect'

class Content extends Component{
    render(){
        const {content , tryDispatch} = this.props
        console.log(this.props)
        return (
            <div>
                <p>{content}</p>
                <button onClick={()=>{
                    tryDispatch()
                }}>点击修改dispatch</button>
            </div>
        )
    }
}

var mapStateToProps = function(state , ownProps){
    return {
        content : state.content
    }
}

var mapDispatchToProps = function(dispatch , ownProps){
    return {
        tryDispatch : function(){
            dispatch({type : 'CHANGE_CONTENT' , newContent : 'a ?'})
        }
    }
}

Content = connect(mapStateToProps,mapDispatchToProps)(Content)

export default Content