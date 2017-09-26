import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function (ComposedComponent) {

  //because of declaring contextTypes as static, 
  //we can access Authentication.contextTypes
  class Authentication extends Component {
    static contextTypes ={
      router: React.PropTypes.object
    }

    render() {
      console.log(this.context)
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated }
  }

  return connect(mapStateToProps)(Authentication)
}

// //TO BE DELETED

// // not in ths file we want to use this HOC
// import Authentication //this is my HOC
// import Resources //this is the component i want to wrap

// const ComposedComponent = Authentication(Resources)

//   //In some render method
//   < ComposedComponent />
