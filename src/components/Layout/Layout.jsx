import { Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Home, Details } from '../../pages';

const Layout = () => {
  return (
    <>
      <Navbar />
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
