import { Route, Switch } from 'react-router';
import './App.scss';
import Header from './component/header/header.component';
import LandingPage from './pages/landing-page.component';

function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
      <Route exact path="/sweet-cheeks-pastry" component={LandingPage} />
    </Switch>
    </div>
  );
}

export default App;
