import  { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  const fields = [ 
    {label: 'Email Address', type: 'text', placeholder: 'Input Email'},
    {label: 'Password', type: 'password', placeholder: 'Password'}
  ]
  const [emailAddrs, setEmailAddrs] = useState('Sherwin');
  const [password, setPassword] = useState('enter password');

  return (
    <Form>
      {fields.map((field)=> {
        return(
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{field.label}</Form.Label>
            <Form.Control type={field.type} placeholder={field.placeholder}
              onChange={(e) => 
              {
                if(field.label==='Email Address')
                    setEmailAddrs(e.target.value)
                if(field.label==='Password')
                  setPassword(e.target.value)
              }
              }/>
          </Form.Group>
        )
      })}
      <Button variant="primary" type="type">
        Submit
      </Button>
      <br />
      <h2>Hi {emailAddrs}</h2>
      <h2>Your password is {password}</h2>
    </Form>
  );
}
export default Login;

/* export const Login = () => {
    return (
    <div>
       <fieldset>
              <legend>Login</legend>
              <ul>
                <li>
                  <label for="username">Username/Email:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
              </ul>
            </fieldset>
            <button>Login</button>
    </div>
    )
  }; */
  