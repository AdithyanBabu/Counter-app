import './App.css';
import { useState } from 'react';



function App() {
  
  let [num,setNum]=useState(0)

  const increment=()=>
  {

    setNum(num+1)

  }
  const decrement=()=>
  {

    setNum(num-1)
    
  }
  
  /*JSX*/
  return (
    
    
    <div id="main_container">
      <h1 className="adSub">Make addition and subtraction more easier than you think</h1>
      <h1 id="number">{num}</h1>
      <div id="btn_cllctn">
        
        <button onClick={decrement}>SUB</button>
        <button onClick={increment}>ADD</button>
      </div>
    </div>
  );
}

export default App;
