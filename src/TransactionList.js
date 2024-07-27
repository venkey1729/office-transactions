import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/transactions')
            .then(response => {
                setTransactions(response.data);
            });
    }, []);

    return (
        <div className="container">
            <h2>Office Transactions</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction._id}>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.type}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.balance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionList;
