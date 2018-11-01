import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Login  from './component/login/login';
import Home from './component/dashboard/home/home';
import CreateEmployee from './component/createEmployee/createEmployee'
import Addemployee from './component/dashboard/addEmployee/addEmployee';
import withSession from './component/withSession';

// import Layout from './layout/index'


// class App extends Component {
//   render() {
//     return (
//       <div>
//      <Router>
//      <Switch>
      

//         <Route exact path="/" component={Login} />
//         <Route path="/home" component={Home} />
//         <Route path="/CreateEmployee" component={CreateEmployee} />
//         </Switch>
//         </Router>
//         </div>

//     );
//   }
// }

const Root =() =>(
  <div>
   <Router>
   <Switch>
    

      <Route exact path="/" component={Login} />
      {/* <Route path='/layout' component={Layout} /> */}
      <Route path="/home"  render={() => <Home  /> } />
      <Route path="/CreateEmployee" component={CreateEmployee} />
      <Route path="/addEmployee" render={() => <Addemployee /> }  />
      
      
      </Switch>
      </Router>
      </div>
);

//const RootWithSession = withSession(Root);


export default withSession(Root);
