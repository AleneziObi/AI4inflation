import React from 'react';
import Header from './components/Header';
import SpendingForm from './components/SpendingForm';
import ResultsDisplay from './components/ResultsDisplay';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App-container">
      <Header/>
      <main>
        <SpendingForm></SpendingForm>
        <ResultsDisplay></ResultsDisplay>
      </main>

      <Footer/>
    </div>
  );
}


export default App;
