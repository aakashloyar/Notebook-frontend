import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import NoteState from './context/notes/notestate';
function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
