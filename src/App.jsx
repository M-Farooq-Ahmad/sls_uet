import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import Home from './pages/Home';

function App() {

  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App
