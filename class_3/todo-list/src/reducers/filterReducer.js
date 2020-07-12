import {SWITCH_LIST} from '../actions'

var filterReducer = function(state,action){
    if(!state){
        return {
            filter : 'all'
        }
    }
    switch(action.type){
        case SWITCH_LIST:
            return {
                filter : action.newFilter
            }
        default:
            return state
    }
}

export default filterReducer