//Created in error  not needed for lab




// import React, { Component } from 'react'



// class Input extends Component {
//     constructor(props) {
//         super(props)


//         this.state = {
//             placeholder: 'Text goes here',
//             hasloaded: false
//         }

//     }

//     toggle() {

//         if (this.state.hasloaded === false) {
//             let newState = { hasloaded: true }
//             this.setState(newState);
//         }
//         else{
//             let newState = { hasloaded: false }
//         this.setState(newState)
//         }


//     }



//     handleInputChange(value) {
//         let newState = { userinput: value }
//         this.setState(newState);


//     }
//     handleClick(event) {
//        this.toggle();
//         console.log(this.state);
//     }











//     render() {

//         return (





//             <React.Fragment>
//                 <div className="input-group input-group-sm mb-3">
//                     <div className="input-group-prepend">
//                         <span className="input-group-text" id="inputGroup-sizing-sm">Input for Dummies</span>
//                     </div>
//                     <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
//                         placeholder={this.state.placeholder}
//                         onChange={(event) => { this.handleInputChange(event.target.value) }} />

//                 </div>
//                 <button type="button" className="btn btn-primary btn-lg btn-block"
//                     onClick={(event) => { this.handleClick(event) }}>Click Me</button>
//             </React.Fragment>

//         )
//     }

// }
// export default Input