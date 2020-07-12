import React , {Component} from 'react'
import {connect} from 'react-redux'
import {switch_list} from '../actions'

class Link extends Component{
    render(){
        const {filter , switchList} = this.props
        return (
            <a href=""
                onClick={(e)=>{
                    e.preventDefault()
                    switchList(filter)
                }}
            >{filter}</a>
        )
    }
}

Link = connect(function(){return {}} , 
    function(dispatch){
        return {
            switchList : function(newFilter){
                dispatch(switch_list(newFilter))
            }
        }
    }
)(Link)

class FilterLink extends Component{
    render(){
        return (
            <div>
                <Link filter="all"></Link>
                {'  '}
                <Link filter="doing"></Link>
                {'  '}
                <Link filter="done"></Link>
            </div>
        )
    }
}

export default FilterLink