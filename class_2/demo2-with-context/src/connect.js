import React, { Component } from 'react'
import PropTypes from 'prop-types'

var connect = function (mapStateToProps, mapDispatchToProps) {
    return function (WrappedComponent) {
        return (
            class Connect extends Component {
                // 提取context
                static contextTypes = {
                    store: PropTypes.object
                }
                constructor(){
                    super()
                    this.state = {
                        allProps :{}
                    }
                }
                componentWillMount(){
                    const {store} = this.context
                    this.updateProps()
                    // 订阅更新组件
                    store.subscribe(()=>this.updateProps())
                }
                updateProps(){
                    var {store} = this.context
                    // 筛选
                    // 选择哪些state和dispatch要通过props传递下去

                    var needState = mapStateToProps ? 
                        mapStateToProps(store.getState() , this.props) : {}

                    var needDispatch = mapDispatchToProps ?
                        mapDispatchToProps(store.dispatch , this.props) : {}
                    
                    this.setState({
                        allProps : {
                            ...needState,
                            ...needDispatch,
                            ...this.props
                        }
                    })
                }
                render() {
                    return (
                        <WrappedComponent {...this.state.allProps}></WrappedComponent>
                    )
                }
            }
        )
    }
}

class Provider extends Component{
    static propTypes = {
        store : PropTypes.object,
        children : PropTypes.any
    }
    static childContextTypes = {
        store : PropTypes.object
    }
    getChildContext(){
        return {
            store : this.props.store
        }
    }
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export {Provider , connect}