import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter]=useState(0);
  //counter -state -To hold values
function incrementCounter(){
  setCounter(counter+1);
}
function decrementCounter(){
  if(counter>0){
  setCounter(counter-1);
  }
}
function resetCounter(){
  setCounter(0);
}

  return (
    <div 
    style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'
    }}
    className="App">
      <header className="App-header">
        <h3>Counter Application</h3>
        <h2>{counter}</h2>
        <button 
        style={{
          backgroundColor:'green',
          color:'white',
          padding:'10px'
        }
        }
        onClick={incrementCounter}>Increment</button>
        <button 
        style={{
          backgroundColor:'red',
          color:'black',
          padding:'10px'
        }
        }
        onClick={decrementCounter}>Decrement</button>
        <button 
        style={{
          color:'red',
          padding:'10px'
        }
        }
        onClick={resetCounter}>Reset</button>
      </header>
    </div>
  );
}

export default App;
