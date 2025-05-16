import React from 'react';
import CategoryChart from './CategoryChart';

const ResultsDisplay = ({ results }) => {
  return (
    <section className="results-display">
      <h2>Inflation Impact</h2>
      {/* Replace below with dynamic data */}
      <p>Your spending has increased by 8.2% due to inflation.</p>
      <CategoryChart />
    </section>
  );
};

export default ResultsDisplay;
