import Navbar from'./Navbar'
import Body from './Body';
import { useState } from 'react';
function Dashboard() {
  const [inputbar,setInputbar] = useState()
  const addInput = (e) =>{
    setInputbar(e);
  }
return(
  <>
  <Navbar addInput = {addInput}/>
  <Body search = {inputbar}/>
  </>
)
}
export default Dashboard;
