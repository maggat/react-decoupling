import React from 'react';
import logo from './logo.svg';
import './App.css';

// import UtilityListLogic2 from './components/utility-list/utility-test';
import UtilityList from './components/utility-list/utility-list';
import AddProduct from './components/add-products/add-products';


function App() {
  return (
    <div className="App">
      <div className="container">
	      <h1>Varvet T-Shirts</h1>
      	<h3><a href="https://codepen.io/P1N2O/full/pyBNzX" target="_blank">By Jovan </a></h3>
        </div>
      <header className="App-header">
       {/* <img src={logo} className="App-logo" alt="logo" />*/}
        <p>
       
        </p>
        {/*<UtilityList/>*/}
        {/*<AddProduct/>*/}
        <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
        >
          Sign Up
        </a>
      </header>
        {/* <UtilityListLogic2/> */}
       
    </div>
  );
}

export default App;
