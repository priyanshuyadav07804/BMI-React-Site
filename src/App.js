import { useState } from 'react';
import './App.css';
import Inputs from './Component/Inputs';
import Display from './Component/Display';

function App() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [formula, setFormula] = useState()
  const [result, setResult] = useState();



  const text = "Height(cm)"
  const text2 = "Weight(kg)"

  function generateFormula() {

    if (height === '' && weight === '') {
      alert("Enter both value")
    } else {
      const BMI = (weight / (height * height * 0.0001)).toFixed(2)
      setFormula(BMI)
      if (BMI < 18.5) {
        setResult("Underweight")
      } else if (BMI >= 18.5 && BMI < 25) {
        setResult("Healthy")
      } else if (BMI >= 25 && BMI < 30) {
        setResult("Overweight")
      } else {
        setResult("Obuse")
      }
    }

  }



  return (
    <div className="app">
      <div className='frame'>
        <h1>BMI Calculator</h1>
        <Inputs text={text} val={height} setVal={setHeight} focus={"yes"} />
        <Inputs text={text2} val={weight} setVal={setWeight}/>
        <button onClick={generateFormula}>Calculate BMI</button>
        <Display BMI={formula} result={result} />
      </div>
      <div className='absolute'>made by Priyanshu</div>
    </div>
  );
}

export default App;
