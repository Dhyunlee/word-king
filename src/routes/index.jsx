import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VocaList from '../pages/VocaList';

function RouterContainer() {
  return (
    <Routes>
      <Route path="/" element={<VocaList />} />
    </Routes>
  );
}

export default RouterContainer;
