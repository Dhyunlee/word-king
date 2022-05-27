import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VocaPage from '../pages/VocaPage';
import WordPage from '../pages/WordPage';
import CreateVoca from './../components/CreateVoca';

function RouterContainer() {
  return (
    <Routes>
      <Route path="/" element={<VocaPage />} />
      <Route path="/word" element={<WordPage />} />
      <Route path="/create-voca" element={<CreateVoca />} />
      <Route path="/create-word" element={<>구현중 ⚡⚡</>} />
    </Routes>
  );
}

export default RouterContainer;
