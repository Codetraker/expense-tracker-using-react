

import { Route, Router } from 'react-router-dom';
import './App.css';
import AuthPage from './components/Pages/AuthPage';

function App() {
  return (
    <Router>
      <Route path='/auth'>
          <AuthPage />
      </Route>
    </Router>
  );
}

export default App;
