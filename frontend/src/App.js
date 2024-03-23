import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import Confirmation from "./components/Auth/Confirmation";
import HomePage from "./components/Home/HomePage";
import HeaderLayout from './components/Header/Header';
import { Footer } from 'antd/es/layout/layout';
import ChatbotComponent from './components/MainFunctionality/ChatBot/ChatBot';
import SearchPage from './components/MainFunctionality/Search/Searchi';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderLayout/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <ChatbotComponent />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
