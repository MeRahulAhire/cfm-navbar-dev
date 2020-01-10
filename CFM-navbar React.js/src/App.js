import React from 'react';
import Home from './home'
import About from './about'
import Login from './login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
   
   <Router>
   <div>
<Switch>
<Route path='/' component={Home}  exact/>
<Route path='/about' component={About}  exact/>
<Route path='/login' component={Login}  exact/>
</Switch>
   
  </div>
   </Router>
);
}

export default App;
