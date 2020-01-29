import React from 'react';
import './App.css';
import Led from './Led/Led';

const App: React.FC = () => {
  return (
    <div className="App">
      <Led index={0} color="yellow" />
    </div>
  );
}

export default App;
