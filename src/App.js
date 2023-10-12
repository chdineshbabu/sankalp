import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/login' element={<Login />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;