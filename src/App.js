import './App.css';
import Header from './components/Header/'
import Home from './components/Home/'
import Checkout from './components/Checkout/'
import Login from './components/Login/'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import Payment from './components/Payment';

function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('USER', authUser)

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, []) // run only when app component loads
  return (
    <Router>
      <div className="App">
        
  
        <Switch>
          <Route path="/payment">
            <Header/>
            <Payment/>
          </Route>
          <Route path="/checkout">
          <Header />
          <Checkout/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
          <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
