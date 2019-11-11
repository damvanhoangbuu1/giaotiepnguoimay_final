import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
class App extends React.Component  {
  render(){
      return (
    
       <div>
         <Home/>
         <Login/>
         <br/>
         <br/>
       </div>
  );
}
}
export default App;
