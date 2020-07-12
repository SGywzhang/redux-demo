import React, { Component } from 'react'

import PropTypes from 'prop-types'

var connect = function (mapStateToProps,mapDispatchToProps) {
    return function (WrappedComponent) {
        return (
            class Connect extends Component {
                static contextTypes = {
                    store: PropTypes.object
                }

                constructor() {
                    super()
                    this.state = {
                        allProps: {}
                    }
                }

                componentWillMount(){
                    const {store} = this.context
                    this._updateProps()
                    store.subscribe(()=>this._updateProps())
                }

                _updateProps(){
                    const {store} = this.context
                    let stateProps = mapStateToProps ? 
                        mapStateToProps(store.getState() , this.props) : {}
                    let dispatchProps = mapDispatchToProps ? 
                        mapDispatchToProps(store.dispatch , this.props) : {}
                    this.setState({
                        allProps : {
                            ...stateProps,
                            ...this.props,
                            ...dispatchProps
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
export { connect }