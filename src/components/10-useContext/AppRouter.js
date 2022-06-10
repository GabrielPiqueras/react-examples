import React from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from './Navbar';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { PageNotFound } from './PageNotFound';

export const AppRouter = () => {
  return (
    <Router>
        <div>
            <Navbar />

            <Routes>
                <Route exact path='/' element={ <HomePage /> }></Route>
                <Route exact path='/about' element={ <AboutPage /> }></Route>
                <Route exact path='/login' element={ <LoginPage /> }></Route>

                <Route path='*' element={ <PageNotFound /> }></Route>
                {/* <Route path='*' element={<Navigate to="/" replace />}></Route> */}
            </Routes>
        </div>
    </Router>
  )
}
