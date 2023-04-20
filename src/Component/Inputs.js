import React, { useEffect, useRef } from 'react'

function Inputs({ text, val, setVal, focus }) {

    const inputRef = useRef(null);

    useEffect(() => {
        if(focus == "yes"){
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className='item'>
            <label>{text}</label>
            <input
                ref={inputRef}
                className='inp'
                value={val} type='number'
                onChange={(event) => setVal(event.target.value)} />
        </div>
    )
}

export default Inputs
