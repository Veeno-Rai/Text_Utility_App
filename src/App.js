import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React ,{useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode,SetMode]=useState('light')
  const [text ,setText]=useState('Enable')
  const [alert,setAlert]=useState(null)
  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      SetMode('dark') 
      setText('Disable')
      showAlert("Dark Mode Enable","success")
     document.body.style.backgroundColor='#042743'
    }
    else{
      SetMode('light')
      setText('Enable')
      showAlert("Light Mode Enable","success")
      document.body.style.backgroundColor='white'
    }
  }
  return (
  <>
<Router>
 <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} text={text}/>
 <Alert alert={alert}/>
 <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />}/>
          <Route exact path="/" element={<TextForm heading="Enter Text-Word Count | Char Count |LowerCase to UpperCase" mode={mode} />}/>
        </Routes>
 </div>
</Router>
  </>
  );
}

export default App;
