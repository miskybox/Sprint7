//App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Welcome from './Welcome';
import Menu from './Menu';
import ShipList from './ShipList';
import ShipDetails from './ShipDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Signup from './Signup';
import { StarShipsProvider } from './StarShipsContext';
import withAuth from './WithAuth';

const ProtectedShipList = withAuth(ShipList);

const App = () => (
  <AuthProvider>
    <StarShipsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/starships" element={<ProtectedShipList />} />
          <Route path="/details/:page" element={<ShipDetails />} />
        </Routes>
      </Router>
    </StarShipsProvider>
  </AuthProvider>
);

export default App;
