import './App.css';
import Navbar from'./Components/Navbar'
import Body from './Components/Body';
import { useState } from 'react';
function App() {
  const [inputbar,setInputbar] = useState([])
  const addInput = (e) =>{
    setInputbar(e);
  }
return(
  <>
  <Navbar addInput = {addInput}/>
  <Body search = {inputbar}/>
  </>
);
}

export default App;
