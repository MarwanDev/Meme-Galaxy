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
