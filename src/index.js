import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import Resume from './components/resume/Resume';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<App />}></Route>
        <Route exact path='/resume' element={<Resume />}></Route>
      </Routes>
    </Router>
    {/* <App /> */}
  </React.StrictMode>
);


