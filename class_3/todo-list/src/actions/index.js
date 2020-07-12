// 添加一个待办事项
export const ADD_TODO = 'ADD_TODO'
export const add_todo = function(id,newTodo){
    return {
        type : ADD_TODO,
        id,
        newTodo
    }
}

// 切换待办事项状态
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const toggle_todo = function(id){
    return {
        type : TOGGLE_TODO,
        id
    }
}

// 切换列表的显示状态
export const SWITCH_LIST = 'SWITCH_LIST'
export const switch_list = function(newFilter){
    return {
        type : SWITCH_LIST,
        newFilter
    }
}