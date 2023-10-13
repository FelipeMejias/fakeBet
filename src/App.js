import logo from './logo.svg';
import './App.css';
import Pagina from './Pagina';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<Pagina to=""/>} />
              <Route path="/:id"  element={<Pagina to=""/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
