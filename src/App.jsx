import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// add created pages
import Home from './pages/Home';
import Todo from './pages/Todo';

// add navbar layout
import Navbar from './components/layouts/Navbar';

const App = () => {
  return (
    <>

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index Component={Home} />
          <Route path='/todo' Component={Todo} />
          {/* <Route path='*' Component={} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;