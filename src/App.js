import './App.css';
import { Route, Switch } from 'react-router-dom';
import Subscriptions from './components/Subscription/subscription';


function App() {

  return (
    <div className="App">
        <Switch>
            <Route path='/login' render={props => <Login {...props}  />}/>
            <Route path='/' render={props => <SubSurvey {...props}  />}/>
            <Route path='/subscriptions' render={props => <Subscriptions {...props} />}/>
        </Switch>
    </div>
  );
}

export default App;
