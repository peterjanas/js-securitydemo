import { useState } from 'react'
import './App.css'
import facade from './util/apiFacade'
import LogIn from './components/logIn';
import LoggedIn from './components/LoggedIn';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => { 
    facade.logout()
    setLoggedIn(false)
    
  } 

  const login = (user, pass) => {
         facade.login(user,pass).then(res =>setLoggedIn(true));
  } 

  return (
    <div>
      {!loggedIn ? (
        <LogIn login={login} />
      ) : (
        <div>
          <LoggedIn loggedIn={loggedIn} />
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  )
}
export default App

