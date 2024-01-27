import './App.css';
import Alerts from './Components/Alerts';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Dark Mode");
  const [alertMode, setAlertMode] = useState(null);

  const showAlertMode = (message, type) => {
    setAlertMode ({
      message : message,
      type : type
    })

    setTimeout(() => {
      setAlertMode(null);
    }, 1500 );
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      setModeText("Light Mode");

      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      
      document.getElementById('textarea').style.backgroundColor = '#2d2d2d';
      document.getElementById('textarea').style.color = 'white';

      showAlertMode("Dark Mode has been enabled!", "success");
      
    }
    else {
      setMode('light');
      setModeText("Dark Mode");
      
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black  ';
      
      document.getElementById('textarea').style.backgroundColor = 'white';
      document.getElementById('textarea').style.color = 'black';
      
      showAlertMode("Light Mode has been enabled!", "success");
    }
  }
  return (
    <>
    <Navbar mode = {mode} toggleMode = {toggleMode} text = {modeText} />
    <Alerts mode = {alertMode} />
    <div className="container" >
    <TextForm alertMode = {showAlertMode} />
    <About/>
    </div>
    </>
  );
}

export default App;
