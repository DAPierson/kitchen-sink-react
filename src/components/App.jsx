import React, {Component} from 'react'

//Functional Component

// const App = (props) =>{
// return(
//     <h1> Hello World!<h1>
// )
// }


//Class Component
class App extends Component{
    constructor(props){
        super(props)
    
    this.state= ""
    }


    render(){
    return(

<h1> {this.props.text}</h1>

    )

    }










}
export default App