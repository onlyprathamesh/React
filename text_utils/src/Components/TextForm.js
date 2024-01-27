import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {
    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText (newText);
        props.alertMode('Text converted to Upper Case!', 'success')
    };
    
    const handleLowCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.alertMode('Text converted to Lower Case!', 'success')
    }
    
    const handleReverse = () => {
        
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.alertMode('Text reversed!', 'success')
    }
    
    const handleCopy = () => {
        let text = document.getElementById('textarea');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.alertMode('Text copied to clipboard!', 'success')
    }
    
    const handleClear = () => {
        setText("");
        props.alertMode('Text cleared!', 'success')
    }


    // mandatory for text areas
    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    const [text, setText] = useState("");
  return (
    <>
    <div className="mb-3 my-3">
  <h1>Enter your text below :</h1>
  <textarea className="form-control my-3 " value={text} onChange={handleOnChange} id="textarea" rows="8"></textarea>
</div>

<button className="btn btn-primary " onClick={handleUpCase}> Conver To Uppercase</button>
<button className="btn btn-primary mx-3" onClick={handleLowCase}> Conver To Lowercase</button>
<button className="btn btn-primary mx-3" onClick={handleReverse}> Reverse Text</button>
<button className="btn btn-primary mx-3" onClick={handleCopy}> Copy</button>
<button className="btn btn-primary mx-3 my-3" onClick={handleClear}> Clear</button>
<div className="container">
    <p className='my-3'>Number of Words: {text.split(" ").length}</p>
    <p >Number of characters: {text.length}</p>
    <p>Time to read: {0.008 * text.length} Minutes</p>
    <h3>Preview :</h3>
    <p>{text}</p>
</div>
    </>
  )
}
