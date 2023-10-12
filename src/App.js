import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import LoginPage from './pages/LoginPage';
import DashBoard from './pages/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element = {<LoginPage />}/>
        <Route path='/dashbord' element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 