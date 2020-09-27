// import the react and react dom libs

import React from 'react';
import ReactDOM from 'react-dom';

// create a react componenet

const App = () => (
<div>
    <label class='label' for='name'>
        Enter Name: 
    </label>
    <input id='name' type='text'/>
    <button style={{backgroundColor: 'blue', color: 'white'}}>Submit!</button>
    </div>
);
// take the react component and show it on the screen
ReactDOM.render(
    <App />, 
    document.querySelector("#root")
);