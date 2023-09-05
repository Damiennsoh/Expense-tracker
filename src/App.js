import React from 'react';
import Header from "./components/Header";
import Balance from './components/Balance';
import './App.css';
import MyNavbar from './components/MyNavbar';


function App() {
  return (
    <div>
      <MyNavbar />
      <Header />
      <div className='container'>
        <Balance />
      </div>
    </div>
  );
}

export default App;