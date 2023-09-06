import React from 'react';
import Header from "./components/Header";
import Balance from './components/Balance';
import './App.css';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import IncomeExpenses from './components/IncomeExpenses.js';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';


function App() {
  return (
    <div className="app">
      <MyNavbar />
      <div className="content">
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList/>
        <AddTransaction/>
      </div>
      <Footer />
    </div>
  );
}

export default App;