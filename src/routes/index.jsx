import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VocaPage from '../pages/VocaPage';

function RouterContainer() {
  return (
    <Routes>
      <Route path="/" element={<VocaPage />} />
    </Routes>
  );
}

export default RouterContainer;
