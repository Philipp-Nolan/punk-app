import './App.css';
import BeersPage from './pages/beersPage';
import PizzaPage from './pages/pizzaPage';
import SteakPage from './pages/steakPage';
import Nav from './components/Main/Nav';
import { BrowserRouter as BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/">
          <BeersPage />
        </Route>
        <Route exact path="/pizzabeers">
          <PizzaPage />
        </Route>
        <Route exact path="/steackbeers">
          <SteakPage />
        </Route>
        <Route path="*">not found</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
