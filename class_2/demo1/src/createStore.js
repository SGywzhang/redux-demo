var createStore = function (reducer) {
    var state = null
    var listeners = []
    var dispatch = function (action) {
        // 
        state = reducer(state,action) //stateChanger返回新的state
        listeners.forEach(listener => listener())
    }
    dispatch({})
    var getState = function () {
        return state
    }
    var subscribe = function (listener) {
        listeners.push(listener)
    }
    return {
        subscribe,
        dispatch,
        getState
    }
}

export default createStore