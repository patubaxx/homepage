import React from 'react';
import './App.css';
import HomepageImage from './components/HomepageImage'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <p>
          My name is Patrik Kuosmanen...
        </p>
        <HomepageImage />
        <p>
          ... and this is my very first React website!
        </p>
      </header>
    </div>
  );
}

export default App;
