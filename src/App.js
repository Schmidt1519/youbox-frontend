import './App.css';
import { Route, Switch } from 'react-router-dom';
import Subscriptions from './components/Subscription/subscription';
import axios from 'axios'
import React, {useEffect, useState} from 'react';
import jwtDecode from "jwt-decode";
import SignIn from './components/Login/signInPage';
import NavbarOne from './components/NavBar/navbar';


function App() {

  const [user, setUser] = useState([]);
  const [token, setToken] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [regUsers, setRegUsers] = useState([]);

  useEffect(() => {
    getToken();
  },[]);

  let getToken = () => {
    const jwt = localStorage.getItem('token');
    try{
      let user = jwtDecode(jwt);
      setToken(jwt);
      setUser(user);
      console.log(jwt)
    }
    catch(err){
      console.log(err);
    }
  }

  let logoutUser = async (username) =>{
    try{
      let response = await axios.delete(`http://127.0.0.1:8000/logout/${username}/`);
      console.log(response.data)
      localStorage.removeItem('token');
      setLoggedIn(false)
    }
    catch(err) {
      console.log(err);
    }
  }

  let loginCurrentUser = async (login) => {
    try{
      let response = await axios.post(`http://127.0.0.1:8000/authenticate/`, login);
      console.log(response.data.token)
      setToken(response.data.token);
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token);
      console.log(response.data.user)
      setLoggedIn(true)
    }
    catch(err) {
      console.log(err);
    }
    
  }

  let registerUser = async (user) => {
    try{
      let response = await axios.post(`http://127.0.0.1:8000/user/`, user);
      console.log(response.data)
      setRegUsers(response.data)
    }
    catch(err) {
      console.log(err);
    }
  }

  if(loggedIn===false){
    return (
    <div className="App">
       <NavbarOne logoutUser={logoutUser} user={user} loggedIn={loggedIn} />
        <Switch>
        <Route path='/login' render={props => <SignIn {...props} user={user} loggedIn={loggedIn} registerUser={registerUser} loginCurrentUser={loginCurrentUser} />}/>
        <Route path='/' render={props => <Subscriptions {...props} user={user} loggedIn={loggedIn}  />}/>
        </Switch>
    </div>
   );
  }
  else{
    return (
      <div className="App">
         <NavbarOne logoutUser={logoutUser} user={user} loggedIn={loggedIn} />
          <Switch>
              <Route path='/login' render={props => <SignIn {...props} user={user} loggedIn={loggedIn} registerUser={registerUser} loginCurrentUser={loginCurrentUser} />}/>
              <Route path='/' render={props => <Subscriptions {...props}  />}/>
          </Switch>
      </div>
     );
  }
}

export default App;
