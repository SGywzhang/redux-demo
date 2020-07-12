var reducer = function (state,action) {
    if(!state){
        return {
            title : '在reducer中初始化的state',
            content : '初始化的reducer'
        }
    }
    switch (action.type) {
        case 'CHANGE_TITLE':
            return {
                ...state,
                title: action.newTitle
            }
            break
        case 'CHANGE_CONTENT':
            return {
                ...state,
                content: action.newContent
            }
        default:
            return state
    }
}

export {reducer}