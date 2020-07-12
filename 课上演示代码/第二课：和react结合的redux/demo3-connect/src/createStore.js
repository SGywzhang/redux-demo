var createStore = function (reducer) {
    var state = null
    var listeners = []

    var dispatch = function (action) {
        state = reducer(state,action)
        listeners.forEach(listener => listener())
    }

    var subscribe = function (listener) {
        listeners.push(listener)
    }
    var getState = function () {
        return state
    }
    
    // 利用reducer特性，初始化state
    dispatch({})

    return {
        subscribe,
        dispatch,
        getState
    }
}

export{createStore}