import React from 'react'

function Display({BMI,result}) {


  return (
    <div className='display'>
        <p>Your BMI is</p>
        <div className='show'>{BMI}</div>
        <p>Comment You are <span style={{color:'blue'}}>{result}</span></p>
    </div>
  )
}

export default Display
