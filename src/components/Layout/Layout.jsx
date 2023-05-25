/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from 'react-router-dom';
import { Home, Details } from '../../pages';

const Layout = () => {
  return (
    <>
      <div className="layout-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </>
  )
}

export default Layout
