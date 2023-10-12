import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    </Routes>
  </BrowserRouter>
  );
}

export default App;