import './Style.css'
import NavBar from './Component/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import ContactUs from './Component/ContactUs';
import SignUp from './Component/SignUp';
import Login from './Component/Login';
import Index from './Component/Index';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>       
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
