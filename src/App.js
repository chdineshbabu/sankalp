import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import LoginPage from './pages/LoginPage';
import DashBoard from './pages/DashBoard';
import AdminDashBoard from './pages/AdminDashBoard';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element = {<LoginPage />}/>
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='admin' element={<AdminDashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 