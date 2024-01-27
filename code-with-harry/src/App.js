import "./App.css";
import About from "./Components/About";
import Alerts from "./Components/Alerts";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, {useState} from 'react'

function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);
const [color, setColor] = useState('black');

const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = '#2a292a';
    alertMode('Dark Mode has been enabled!', 'success')
  }
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    alertMode('Light Mode has been enabled!', 'success')
  }
}

const alertMode = (message, type) => {
  setAlert({
    message : message,
    type : type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}


const setTheme = (color) => {
  setColor({
    color : color
  })
}
  return (
    <>
      
      <Navbar text="TextUtils" about="About" mode = {mode} toggleMode = {toggleMode}  setTheme = {setTheme} color = {color}/>
      {/* <Navbar/>  */}
      <Alerts alert = {alert}/>
      <div className="container">
      <TextForm name="Enter text to analyze" mode = {mode} alertMode = {alertMode} />
      <About />
      </div>
    </>
  );
}

export default App;
