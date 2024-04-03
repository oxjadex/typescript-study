import React from 'react';
import './App.css';

function App() {
  let name :string = 'kim';
  let names :string[]= ['kim', 'park'];
  let na :{name? : string} = {};
  let df :string | number = 'kim';
  type ds = string | number;
  function ds(x: number) : number{
    return x * 2
    
  }

  type Member = [number, boolean];
  let john:Member = [123, true];

  type Me = {
    [key :string] : string,
  }
  let arin : Me = { name: 'kim', age : '123'};

  class User {
    name :string;
    constructor(name :string) {
      this.name = name;
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
