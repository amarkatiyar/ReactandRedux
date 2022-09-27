import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignUP from './pages/signup/SignUp';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard'
import { Routes, Route } from "react-router-dom"
import store from './redux/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <div className="">
     {/* <SignUP />
     <Login /> */}
      <Routes>
        <Route path="/" element={ <SignUP/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <SignUP/> } />
        <Route path="/dasboard" element={ <Dashboard/> } />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
