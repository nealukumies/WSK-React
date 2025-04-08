import './App.css';
import Home from './components/Home';

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Layout from './views/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
