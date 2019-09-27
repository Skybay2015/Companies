import React from 'react';
import { Grid } from '@material-ui/core/';
import Form from './containers/Form/Form';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import CompanyList from './containers/CompanyList/CompanyList'

const App = props => {
   return (
      <div className="App">
         <Router>
            <Header />
            <Grid container justify="center">
               <Switch>
                  <Route exact path="/" component={Form} />
                  <Route path="/list" component={CompanyList} />
                  <Redirect to='/' />
               </Switch>
            </Grid>
         </Router>
      </div>
   );
};

export default App;
