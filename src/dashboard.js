import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';

// const url = 'http://192.168.0.54:1338/user/id';
// const data = {};

// try {
//     fetch(url, {
//     method: 'GET', 
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }) .then(function(response) { 
//     console.log("response") 
//     console.log(response) 
//     return response.json(); 
//     }); 
   
// } catch (error) {
//     console.error('Error:', error);
// }
      
    
        
class Dashboard extends React.Component {
  
  render() {
    return (

      <div>
        <h1>Welcome to Dashboard</h1>
        <Link className="btnlg" type="submit" to="/">Log Out</Link>
      </div>
    )
  }
}

export default Dashboard