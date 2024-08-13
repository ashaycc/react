import React, { useContext } from 'react'
import '../Navbar/navbar.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../UseContext/AuthContext'

const Navbar = () => {
const {isAuthenticated,logout} = useContext(AuthContext);
  return (
  <nav>
      <ul>
          <li><Link to ='/'>Home</Link></li>
          <li><Link to ='/use-reducer'>Use-reducer</Link></li>
          <li><Link to ='/use-state'>Use-State</Link></li>
          <li><Link to ='/use-effect'>Use-Effect</Link></li>
          {isAuthenticated ? (
        <li><button onClick={logout}>Logout</button></li>
      ) : (
        <li><Link to="/login">Login</Link></li>
      )}
          <li><Link to='/to-do'>ToDo</Link></li>
          <li><Link to='/weather'>Weather</Link></li>
          <li><Link to='/expensetracker'>Expense Tracker</Link></li>
          <li><Link to ='/note'>Notes</Link></li>
      </ul>
  </nav>
)
}

export default Navbar