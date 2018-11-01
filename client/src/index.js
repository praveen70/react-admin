import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import  Login  from './component/login/login';
// import Home from './component/dashboard/home/home';
// import CreateEmployee from './component/createEmployee/createEmployee'

import * as serviceWorker from './serviceWorker';


const client = new ApolloClient({
    uri: `http://localhost:4444/graphql`,
    fetchOptions:{
        credentials:'include'
    },
    request: operation => {
        const token = localStorage.getItem('token');
        operation.setContext({
            headers:{
                authorization: token
            }
        })
    },
    onError: ({ networkError }) =>{
        if(networkError){
            console.log("Network Error", networkError);

        }
    }
});


// const Root =() =>(
//     <div>
//      <Router>
//      <Switch>
      

//         <Route exact path="/" component={Login} />
//         <Route path="/home" component={Home} />
//         <Route path="/CreateEmployee" component={CreateEmployee} />
//         </Switch>
//         </Router>
//         </div>
// );


// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
<ApolloProvider client={client}>
<Root />
</ApolloProvider>
, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
