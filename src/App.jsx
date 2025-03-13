// src/App.jsx

import { Routes, Route } from "react-router-dom";
import Home from './Home';
import AddBook from "./components/AddBook";
import './App.css'; // Import global styles

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/add-book" element={<AddBook />} /> {/* Add Book form page */}
      </Routes>
    </div>
  );
}

export default App;
