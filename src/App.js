
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import BuyKeyboard from './Pages/BuyKeyboard/BuyKeyboard';
import Home from './Pages/Home/Home';
import Keyboards from './Pages/Keyboards/Keyboards';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute';
import LoginRegistration from './Pages/LoginRegistration/LoginRegistration';
import NotFound from './Pages/NotFound/NotFound';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/keyboards">
              <Keyboards></Keyboards>
            </Route>
            <PrivateRoute path="/keyboard/:id">
              <BuyKeyboard />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <LoginRegistration />
            </Route>
            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
