import React from 'react';
import Home from './components/Home';
import Placeholder from './components/Placeholder';
import { Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
    render() {
        
        return(
         
               <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/past" component={Placeholder} />
                    <Route path="/how-it-works" component={Placeholder} />
                    <Route path="/login-signup" component={Placeholder} />
             
               </Switch>
        );
    }
}



export default Routes;
