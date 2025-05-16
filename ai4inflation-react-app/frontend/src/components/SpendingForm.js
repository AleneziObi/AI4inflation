import React, { useState } from 'react';

const categories = ['Food', 'Housing', 'Transportation'];

const SpendingForm = () => {
  const [spending, setSpending] = useState({
    Food: '',
    Housing: '',
    Transportation: ''
  });

  const handleChange = (e) => {
    setSpending({ ...spending, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User spending:', spending);
    // Call API/calculate inflation impact
  };

  return (
    <form onSubmit={handleSubmit} className="spending-form">
      {categories.map((cat) => (
        <div key={cat} className="form-group">
          <label>{cat}</label>
          <input
            type="number"
            name={cat}
            value={spending[cat]}
            onChange={handleChange}
            placeholder={`Monthly ${cat} spending`}
            required
          />
        </div>
      ))}
      <button type="submit">Analyze Inflation Impact</button>
    </form>
  );
};

export default SpendingForm;
