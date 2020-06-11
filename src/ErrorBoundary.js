import React, { Component } from 'react'
import Error from './error.jpeg'

class ErrorBoundary extends Component{
    constructor(props){
        super(props)

        this.state = { 
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo){
        console.log('error: ' + error)
        console.log('error info: ' + errorInfo)

        this.setState({
            hasError: true
        })
    }

    render(){
       
        // se houver algum error, retorne a imagem
        if(this.state.hasError) {
            return <img src={Error} alt="imagem que demonstra o error" />
        }

        // em qualquer caso retorne os componentes
        return this.props.children
    }

}

export default ErrorBoundary;