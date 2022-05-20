import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VocaPage from '../pages/VocaPage';
import WordPage from '../pages/WordPage';

function RouterContainer() {
  return (
    <Routes>
      <Route path="/" element={<VocaPage />} />
      <Route path="/word" element={<WordPage />} />
    </Routes>
  );
}

export default RouterContainer;
