
import './App.css';
import Navbar from './Navbar';
import TextForm from './Textform';
import React, { useState } from 'react';
import Alert from './Alert';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

 
function App() {
  const [mode, setMode] = useState('light');
  
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null);
  }, 1500);
    
}

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "Success");
    
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "Success");
    
    }
  }
  return (
    <>
   <Router>
   <Navbar title="WordWizard"  mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} mode={mode}/>

    <div className="container my-3">
    <Routes>

    <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode}/>} />
    <Route path="/about" element={<About/>}/>
    </Routes> 

    </div>
   </Router>
   
    </> 
  );
}


export default App;