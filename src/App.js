
import './App.css';
import About from './components/About';
import FormText from './components/FormText';
import Navber from './components/Navber';
import React,{useState} from 'react'
import MessageAlert from './components/MessageAlert';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


function App() {

  const [alert, setAlert] = useState(null)
  const showAlert =(msg,type) =>{
    setAlert(
      {msg: msg,
      type: type}
    )
    setTimeout(()=>{
      setAlert(null)
    },1000);
  }

  const [mode, setMode] = useState('light')


  const changebodyColor = ()=>{
    if (mode === 'light'){
      setMode('dark')

      showAlert("This is dark color","success")
      
    }
    else{
      setMode('light')
      showAlert("This is light color","warning")
      
    }
  }

  return (
    <>
      <Router>
        <div>
        <Navber title= 'Blog' mode={mode} changebodyColor={changebodyColor} />
        <MessageAlert alert={alert} />
        <Routes>

            <Route path="/about" element={<About />} />
            <Route path="/" element={<FormText showAlert={showAlert} title='Textarea' />} />

              


        </Routes>
          </div>
      </Router>
      </>
  );
}

export default App;
