import './App.css';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path='/login' render={props => <Login {...props}  />}/>
            <Route path='/' render={props => <SubSurvey {...props}  />}/>
        </Switch>
    </div>
  );
}

export default App;
