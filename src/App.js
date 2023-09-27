// import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/service" Component={Service} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/about" Component={About} />
      </Routes>
    </>
  );
}

export default App;
