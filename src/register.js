import React from 'react';
import './App.css';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { Link } from 'react-router-dom';

class RegisterForm extends React.Component {
    state = {

        username: "",
        password: "",
        confirm_password: "",
        gender: "",
        religion: ""
    }


    handleSubmit = (e) => {

        e.preventDefault();
        const url = 'http://192.168.0.54:1338/register';
        const data = {
            username: this.state.username,
            password: this.state.password,
            confirm_password: this.state.confirm_password,
            gender: this.state.gender,
            religion: this.state.religion

        };

        try {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()).then((res) => {
                if (res.code === 200) {
                    alert(res.message);
                } else if (res.error.code === 301) {
                    alert(res.error.message);
                } else if (res.error.code === 404) {
                    alert(res.error.message);
                } else if (res.error.code === 500) {
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
                        <legend><solid> Registration Form</solid></legend>
                        <label>Email:</label>
                        <input type="text" name="username" placeholder="Your Email" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />

                        <label>Password:</label>
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />

                        <label>Confirm Password:</label>
                        <input type="password" name="confirm_password" placeholder="Re-enter Your Password" value={this.state.confirm_password} onChange={(e) => this.setState({ confirm_password: e.target.value })} />

                        <label>Gender:</label>
                        <RadioGroup onChange={(value) => this.setState({ gender: value })} horizontal>
                            <RadioButton value="male">
                                Male
  </RadioButton>
                            <RadioButton value="female">
                                Female
  </RadioButton>
                            <RadioButton value="other">
                                Other
  </RadioButton>
                        </RadioGroup>

                        <br></br>
                        <br></br>

                        <label>Religion:</label>
                        <select onChange={(e) => this.setState({ religion: e.target.value })}>
                            <option value="hindu">Hindu</option>
                            <option value="muslim">Muslim</option>
                            <option value="sikh">Sikh</option>
                            <option value="christen">Christen</option>
                        </select>

                        <button className="btn" type="submit">Register</button>

                    </fieldset>
                </form>
                <ul>
                    <li>Already have an Account!  <Link to="/">LogIn</Link></li>
                </ul>
            </div>

        );
    }

}

export default RegisterForm;
