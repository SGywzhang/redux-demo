import {ADD_TODO , TOGGLE_TODO} from '../actions'
var todoReducer = function(state ,action){
    if(!state){
        return []
    }
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    todo : action.newTodo,
                    id : action.id,
                    isDone : false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo)=>{
                if(todo.id === action.id){
                    return {
                        ...todo,
                        isDone : !todo.isDone
                    }
                }
                return todo
            })
        default :
            return state
    }
}
export default todoReducer