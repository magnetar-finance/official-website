import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Developers from './pages/Developers';
import './index.css';

function AppLayout() {
  const location = useLocation();
  const isDevelopers = location.pathname === '/developers';

  return (
    <div className="min-h-screen bg-[#050508] text-slate-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/developers" element={<Developers />} />
      </Routes>
      {!isDevelopers && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
