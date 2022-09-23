import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './styles/style.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/">
        <Register />
      </Route>
    </Router>
  );
}

export default App;
