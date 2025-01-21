import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import MainPage from '../pages/MainPage';

function LayoutRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={MainPage}>

        </Route>
    </Routes>
    </>
  )
}

export default LayoutRoutes