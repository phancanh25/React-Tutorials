import React, { Component } from 'react';
import reactDom from 'react-dom';
class App extends Component{
   render() {
       var i = 1;
       var mystyle = {
           fontSize: 20,
           color: 'red'
       }
       return(
           <div>
               <h1>Header</h1>
               <h2>Content</h2>
               <p>This is the Content!!!</p>
               <p>{1+1}</p>
                {/* This is expression adtribute */}
                <h1>{i === 1 ? 'true' : 'false'}</h1>
                {/* Condition Expression */}
                <h5 style={mystyle}>Style CSS</h5>
                <hr/>
           </div>
       )
   }
}
export default App;