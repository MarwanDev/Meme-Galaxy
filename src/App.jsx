// import { Navbar, Header, Categories } from "./components";
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components';

const App = () => {
  return (
    <Router>
      <main>
        <Layout />
      </main>
    </Router>
  );
};

export default App;
