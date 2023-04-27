export const Login = () => {
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
  };
  