// var load_data = function(dispatch , getState){

// }

// action.js
var load_data = (keywords) => {
    return dispatch => {
        dispatch({ type: 'LOAD_DATA' })
        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'http://redpoint.live:3000/search?keywords='+keywords)
        xhr.send()
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = xhr.response
                dispatch({ type: 'DONE_LOAD', data: JSON.parse(data).result.songs })
            }
        }
    }
}

export { load_data }