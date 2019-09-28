import React, { useState } from 'react';
import { UserContext } from '../providers/User.provider';
import { UserServiceContext } from '../providers/UserService.provider';
import { BrowserRouter as Router } from 'react-router-dom';
import LogInPage from '../pages/LogInPage';
import Home from './Home';
import { UserService } from '../service/user-service';

export const App = () => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={user}>
      <UserServiceContext.Provider value={UserService()}>
        <Router>
          {user ? <Home/> : <LogInPage onLogin={setUser}/>}
        </Router>
      </UserServiceContext.Provider>
    </UserContext.Provider>
  );
};
