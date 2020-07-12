import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggle_todo } from '../actions'

var filterList = function(list , filter){
    if(filter === 'all'){
        return list
    }
    if(filter === 'done'){
        return list.filter(function(todo){
            return todo.isDone
        })
    }
    if(filter === 'doing'){
        return list.filter(function(todo){
            return !todo.isDone
        })
    }
}

class TodoList extends Component {
    render() {
        const { list, toggleTodo ,filter } = this.props
        
        var renderList = filterList(list , filter)
        return (
            <div>
                <ul>
                    {
                        renderList.map((v, k) => {
                            console.log(v)
                            return <li
                                style={{textDecoration : v.isDone ? 'line-through' : 'none'}}
                                onClick={() => { toggleTodo(v.id) }}
                                key={v.id}>
                                {v.todo}
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

var mapStateToProps = function (state, ownProps) {
    return {
        list: state.todoReducer,
        filter : state.filterReducer.filter
    }
}

var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        toggleTodo: function (id) {
            dispatch(toggle_todo(id))
        }
    }
}

TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoList