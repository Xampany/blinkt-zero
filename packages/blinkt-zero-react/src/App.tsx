import React from 'react';
import './App.css';
import Led from './Led/Led';

const App: React.FC = () => {
  return (
    <div className="App">
      <Led index={0} color="yellow" onSelect={(index) => console.log(`I was clicked: ${index}`)} />
    </div>
  );
}

export default App;
