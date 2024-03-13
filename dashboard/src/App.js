import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
//import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import List from './components/List';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact component={Dashboard} />
        <Route path="/List" component={List} />
      </Routes>
    </Router>
  );
}

export default App;
