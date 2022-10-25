import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Update from './components/Update';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='' element={<List />}/>
            <Route path='update/:id' element={<Update />}/>
            <Route path='new' element={<Form />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
