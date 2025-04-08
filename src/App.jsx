import './App.css';
import Home from './views/Home';

import {BrowserRouter, Route, Routes} from 'react-router';
import {Layout} from './components/Layout';
import Profile from './views/Profile';
import Upload from './views/Upload';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/single" element={<Single />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
