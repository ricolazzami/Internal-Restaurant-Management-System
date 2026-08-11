import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Kitchen from './pages/Kitchen';
import Menu from './pages/Menu';
import More from './pages/More';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="orders" element={<Orders />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="menu" element={<Menu />} />
          <Route path="more" element={<More />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
