import logo from './logo.svg';
import './App.css';
import Add from './Add';
import Showproduct from './Showproduct';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <div className="App">
     <Route exact path="/">
     <Add/>
     </Route>     
   
    </div>
    </Switch>
    </Router>
  
  );
}

export default App;
