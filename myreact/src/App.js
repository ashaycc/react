
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import UseReducer from './components/UseReducer/UseReducer';
import UseState from './components/UseState/UseState';
import UseEffect from './components/UseEffect/UseEffect'
import { AuthProvider } from './components/UseContext/AuthContext';
import Login from './components/UseContext/Login';
import ToDo from './components/ToDo/ToDo';
import Weather from './components/WeatherApp/Weather';
import ExpenseTracker from './components/ExpenseTracker/ExpenseTracker';
import NoteEditor from './components/NoteEditor/NoteEditor';


const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route path="/use-state" element={<UseState/>}/>
        <Route path="/use-effect" element={<UseEffect/>}/>
        <Route path="/login" element={<Login />} /> 
        <Route path="/to-do" element={<ToDo />} /> 
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/expensetracker" element={<ExpenseTracker/>}/>
        <Route path="/note" element={<NoteEditor/>}/>
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App;
