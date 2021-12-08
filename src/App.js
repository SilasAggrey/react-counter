import logo from './logo.svg';
import './App.css';
import React from 'react';



//  class App extends React.Component {
//    constructor() {
//      super();

//      this.state = {
//        number: 2,
//      };
//        }

//    handleIncrease = () => {
//      this.setState({ number: this.state.number + 1,  });
//     };
//     handleDecrease = () => {
//       this.setState({ number: this.state.number -1, 

//       })
//     };


//    render() {
//      return (
//        <div className="App">
//          <h1>{this.state.number}</h1>
//          <h3>{this.state.isHungry}</h3>
//          <button onClick={this.handleIncrease}>Add 1</button>
//          <button onClick={this.handleDecrease}>Remove 1</button>
//        </div>
//      );
//    }
//  }

 function App() {
      const [number, setNumber] = React.useState(10);

   const addOne = () => {
     setNumber(number + 1);
    
   };
   const removeOne = () => {
      setNumber(number - 1);
   };

   return (
     <div className="App">
       <h1>{number}</h1>
       <button onClick={addOne}>Add one</button>
       <button onClick={removeOne}>Remove one</button>
     </div>
   );
 }




export default App;
