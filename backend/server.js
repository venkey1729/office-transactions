const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://patamsettivenkat1729:venkat1729@appcluster.1dzieq6.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const transactionSchema = new mongoose.Schema({
    date: String,
    description: String,
    type: String,
    amount: Number,
    balance: Number
});

const Transaction = mongoose.model('Transaction', transactionSchema);

app.get('/transactions', async (req, res) => {
    const transactions = await Transaction.find();
    res.json(transactions);
});

app.post('/transactions', async (req, res) => {
    const { date, description, type, amount, balance } = req.body;
    const transaction = new Transaction({ date, description, type, amount, balance });
    await transaction.save();
    res.json(transaction);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
