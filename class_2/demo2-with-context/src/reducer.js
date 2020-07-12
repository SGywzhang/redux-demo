var reducer = function(state,action){
    if(!state){
        return {
            title :"这是reducer初始化的标题",
            content : "这是reducer初始化的内容"
        }
    }
    switch(action.type){
        case 'CHANGE_TITLE':
            return {
                ...state,
                title : action.newTitle
            }
        case 'CHANGE_CONTENT':
            return {
                ...state,
                content : action.newContent
            }
        default:
            return state
    }
}

export default reducer