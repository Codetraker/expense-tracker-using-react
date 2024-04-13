import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from './components/Pages/AuthPage';
import Home from './components/Pages/Home';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<AuthPage />} />
    //     <Route path="/home" element={<Home />} />
    //   </Routes>
    // </BrowserRouter>
    <Home />
  );
}

export default App;
