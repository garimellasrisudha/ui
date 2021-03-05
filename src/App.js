import './App.css';
import Dashboard from './components/Dashboard';
import HeaderComponent from './components/HeaderComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import addRestaurant from './components/Restaurant/addRestaurant';
import child from './components/child';


function App() {
  return (
    
        <Router>
          <div className="App">
          <HeaderComponent/>
      </div>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/addRestaurant" component={addRestaurant}/>
        <Route path="/addChild" component={child}/>
      </Router>
   
  );
}

export default App;
