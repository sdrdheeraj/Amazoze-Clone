
import './App.css';
import Header from './Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from  './Login'
import Home from './Home'
import Checkout from './Checkout'
import Footer from './Footer'
import Navlinks from './Navlinks'
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';

function App() {
  const [{loggedinuser}, dispatch]= useStateValue()
  useEffect(()=>{
    const unsubsribe = auth.onAuthStateChanged((userauth)=>{
      if(userauth){
        dispatch({
          type: 'SET_LOGIN',
          user: userauth
        })
      }else{
        dispatch({
          type: 'SET_LOGIN',
          user: null
        })

      }
    })
    return () =>{
      unsubsribe();

    }
  },[])
  return (
    <Router>
    <div className="App">
      
      <Routes>
        <Route path="/checkout" element={<><Header/><Checkout/></>}/>
       
      
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<> <Header/> <Navlinks/><Home/><Footer/> </>}/>
        
      
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
