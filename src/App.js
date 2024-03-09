import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

import Compras from './component/Compras';
import Consignas from './component/Consignas';
import Home from './component/Home';
import Header from './component/Header';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Header titulo= "POP TRAGOS" /> }>
            <Route index element={ <Home /> }></Route>
            <Route path='Compras' element={ <Compras /> }></Route>
            <Route path='Consignas' element={ <Consignas /> }></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>    
    
  );
}

export default App;

/*
<Router>
      <Routes>
        <Route path='/' element={ }></Route>
      </Routes>
    </Router>
*/