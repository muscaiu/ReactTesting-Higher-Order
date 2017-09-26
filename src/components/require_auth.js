import React, { Component } from 'react'

export default function (ComposedComponent) {
  class Authentication extends Comment {
    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return Authentication
}

//TO BE DELETED

// not in ths file we want to use this HOC
import Authentication //this is my HOC
import Resources //this is the component i want to wrap

const ComposedComponent = Authentication(Resources)

  //In some render method
  < ComposedComponent />
