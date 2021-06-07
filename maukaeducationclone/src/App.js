import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from "./components/Home";

function App() {
  return ( <Router>
    <Navbar />
    <Home />
    </Router>
   
  );
}

export default App;
