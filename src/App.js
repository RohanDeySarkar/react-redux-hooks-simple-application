import React, {useEffect} from 'react';
import './App.css';

import {useSelector, useDispatch} from 'react-redux';
import allActions from './actions'

const App = () => {
  // for calling reducers
  const counter = useSelector(state => state.counter)
  const currentUser = useSelector(state => state.currentUser)

  // for calling actions
  const dispatch = useDispatch()

  const user = {name: "Rohan"}

  // use action by destructuring 
  useEffect(() => {
    dispatch(allActions.userActions.setUser(user))
  }, [])

  return (
    <div className="App">
      {
        currentUser.loggedIn ? 
        <>
          <h1>Welcome, {currentUser.user.name}</h1>
          <button onClick={() => dispatch(allActions.userActions.logOut())}>Log Out</button>
        </>
        :
        <>
          <h1>Login To recieve invite</h1>
          <button onClick={() => dispatch(allActions.userActions.setUser(user))}>Login</button>
        </>
      }
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(allActions.counterActions.increment())}>Increase</button>
      <button onClick={() => dispatch(allActions.counterActions.decrement())}>Decrease</button>
    </div>
  );
};

export default App;
