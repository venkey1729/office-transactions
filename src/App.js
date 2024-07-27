import React from 'react';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import './App.css';

const App = () => {
    return (
        <div>
            <h1>Office Transaction System</h1>
            <TransactionList />
            <AddTransaction />
        </div>
    );
}

export default App;
