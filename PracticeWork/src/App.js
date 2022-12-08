
// import { Route, Routes} from 'react-router-dom';
// import SignUp from './Components/SignUp';
// import Home from './Components/Home';
// import Login from './Components/Login';
// import Nav from './Components/Nav';
// import { Contact } from './Components/Contact';
// import './Components/Assign.css';
// import {ViewRegStud} from './Components/VRS';
// import ViewRegWarden from './Components/VRH';
// import './Components/Assign.css';
// import View from './Components/View';
import { Route, Routes } from "react-router";
import Home from "./Mid_Lab/Components/Home";
import Result from "./Mid_Lab/Components/ResultCompo";


function App() {

  return (
    
    //parent division
      <div>
      

     
      {/* <Nav/>
       <Routes>
       
       <Route path="/login" element={<Login/>}/>
       <Route path="/SignUp" element ={<SignUp/>} />
       <Route path="/" element ={<Home/>} />
       <Route path='/contact' element = {<Contact/>}/>
       <Route path='/VRS' element={<ViewRegStud title ="Student"/> }/>
       <Route path='/VRH' element={<ViewRegWarden title="Hosteller's"/>}/>
       <Route path="/view" element ={<View/>} />

       </Routes> */}
      
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/result" element={<Result/>}/>
       </Routes>

      </div>
  );
}

export default App;
