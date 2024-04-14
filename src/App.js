import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from './components/Pages/AuthPage';
import Home from './components/Pages/Home';
import WelcomePage from './components/Pages/WelcomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<WelcomePage />} /> */}
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
