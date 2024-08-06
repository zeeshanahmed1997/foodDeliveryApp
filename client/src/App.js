// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DishList from './components/DishList';
import DishForm from './components/DishForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DishList />} />
        <Route path="/create" element={<DishForm />} />
        <Route path="/edit/:id" element={<DishForm />} />
      </Routes>
    </Router>
  );
}

export default App;
