import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Transaction from './pages/Transaction';
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import Chat from "./pages/Chat/Chat";
import FlashcardsPage from "./pages/FlashCards/FlashcardsPage";
import './App.module.css';
import Tutorial from './pages/Tutorial/Tutorial';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/flashcards" element={<FlashcardsPage />} />
        <Route path="/" element={<Header />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/home" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/tutorial" element={<Tutorial />} />
      </Routes>
    </Router>
  );
}

export default App;