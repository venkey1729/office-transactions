import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const AddTransaction = () => {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    const [balance, setBalance] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTransaction = { date, description, type, amount, balance };
        await axios.post('http://localhost:5000/transactions', newTransaction);
        setDate('');
        setDescription('');
        setType('');
        setAmount('');
        setBalance('');
    }

    return (
        <div className="container">
            <h2>Add New Transaction</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Date:</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div>
                    <label>Type:</label>
                    <select value={type} onChange={(e) => setType(e.target.value)} required>
                        <option value="">Select</option>
                        <option value="Credit">Credit</option>
                        <option value="Debit">Debit</option>
                    </select>
                </div>
                <div>
                    <label>Amount:</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                </div>
                <div>
                    <label>Balance:</label>
                    <input type="number" value={balance} onChange={(e) => setBalance(e.target.value)} required />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AddTransaction;
