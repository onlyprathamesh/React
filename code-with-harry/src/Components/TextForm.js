import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.alertMode('Your text has been converted to UPPERCASE.', 'success');
  };
  const handleLoClick = () => {
    // console.log("Lowercase was clicked: " + text);
    let newText = text.toLowerCase();
    props.alertMode('Your text has been converted to lowercase.', 'success');
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.alertMode('Cleared the textbox.', 'success');
  };
  const handleCopyClick = () => {
    var text = document.getElementById("textarea");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.alertMode('Text copied to clipboard.', 'success');
  }
  const reverseText=()=>{
    let newText= text.split("").reverse().join("");
    setText(newText)
    props.alertMode('Your text has been reversed.', 'success');
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.alertMode('Text to voice enabled.', 'success');
  }
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{backgroundColor:props.mode == 'light' ? 'white' : '#2a292a' , color:props.mode == 'light' ? 'black' : 'white'}} >
        <h1>{props.name}</h1>

        <textarea 
          className="form-control"
          style={{backgroundColor:props.mode == 'light' ? 'white' : '#2a292a' , color:props.mode == 'light' ? 'black' : 'white'}}
          id="textarea"
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={speak}>Speak</button>
        <button className="btn btn-primary my-2 mx-2" onClick={reverseText}>Reverse</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopyClick}>Copy </button>
      </div>
      <div className="container my-3" style={{backgroundColor:props.mode == 'light' ? 'white' : '#2a292a' , color:props.mode == 'light' ? 'black' : 'white'}}>
        <h2>Your text summary:</h2>
        <p>It contains {text.split(" ").length} words & {text.length} characters</p>
        <p>It will take {0.008 * text.split(" ").length} Minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text: 'Write something in the above box to preview it here.'}</p>
      </div>
      
    </>
  );
}
