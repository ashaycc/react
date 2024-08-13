import React, { useState } from 'react';
import'../ExpenseTracker/expense.css'

const ExpenseTracker = () => {
    const [expenses,setExpenses] = useState([]);
    const [description, setDescription] =useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] =useState('');

    const handleAddExpense = () => {
        const newExpense = {
          id: Date.now(),
          description,
          amount: parseFloat(amount),
          date: new Date(date)
        };
        setExpenses([...expenses, newExpense]);
        setDescription('');
        setAmount('');
        setDate('');
      };
    
      const handleDeleteExpense = (id) => {
        const updatedExpenses = expenses.filter(expense => expense.id !== id);
        setExpenses(updatedExpenses);
      };

    return (
    <div class="container">
        <h1>Expense Tracker</h1>
        <p>Update:</p>
        <div className="add-expense-form">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleAddExpense}>Add Expense</button>
        </div>
        <div className="expense-list">
        {expenses.map((expense) => (
          <div key={expense.id} className="expense-item">
            <h2>{expense.description}</h2>
            <p>Rs.{expense.amount.toFixed(2)}</p>
            <p>{expense.date.toDateString()}</p>
            <button onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExpenseTracker