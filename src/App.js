import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import UserLogin from './UserLogin';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useRef } from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

const Dashboard = () => {

  const projectRef = useRef(null);
  const boardRef = useRef(null);

  const location = useLocation();
  console.log('Jira user : ' + location.state.name);

  return (
      <div>
          <Header projectLink = {projectRef} boardLink = {boardRef} />
          <Main userName = {location.state.name} projectLink = {projectRef} boardLink = {boardRef} />
          <Footer />
      </div>
  );
}

export default App;
