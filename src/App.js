import React from 'react';
import './App.css';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
  }

  handleSubmit =(e)=> {
   
e.preventDefault();
    const url = 'http://192.168.0.54:1338/signinUser';
    const data = {
      username: this.state.username,
      password: this.state.password
    };

    try {
     fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res=> res.json()).then( res=> 
      {
        if(res.success){
          alert(res.message);
          this.props.history.push('/dashboard')
        }
        else if (res.error.code === 301){
          alert(res.error.message);
        } else if (res.error.code === 404){
          alert(res.error.message);
        } else if (res.error.code === 500){
          alert(res.error.message);
        }
      });
          
    } catch (error) {
      console.error('Error:', error);
    }
  }


  render() {

    return (
  
<div class="form-style-5">
<form onSubmit={this.handleSubmit}>
<fieldset>
<legend> Login Form</legend>
<input type="text" name="username" placeholder="Your Email" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })}/>
<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}/>
<button className="btn" type="submit">Log In</button>

</fieldset>

</form>
                <ul>
                    <li>Don't have an Account?  <Link to="/register">SignUp Here</Link></li>
                </ul>
</div>

    );
  }

}

export default withRouter(LoginForm);
