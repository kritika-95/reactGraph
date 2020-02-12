// app/src/Login.js
import React from 'react';
class Login extends React.Component {
    constructor(props) {
  super(props);
  this.state = {
   username: '',
   password: '',
   date:''
  };
 
 }
 handleInputChange = (event) => {
  this.setState({
   [event.target.name]: event.target.value
  })
};


 render() {
  return (
   <form className='login'>
     <label>Username</label>
     <input id='email123' onChange={this.handleInputChange} name='email' type='text' placeholder="mail.." /><br/><br/>
     <label>Password</label>
     <input id='password' onChange={this.handleInputChange} name='password' type='password' placeholder="password.." /><br/><br/>
     <label>Date</label>
     <input type="date" readOnly={false} required={true}/>
     <button id='01' disabled={true}  className="button">Submit</button>
   </form>
  )
 }
}
export default Login;