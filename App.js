import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import HalamanUtama from './layout/halaman_utama';
import Halaman1 from './layout/halaman1';
import Halaman2 from './layout/halaman2';
import Halaman3 from './layout/halaman3';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HalamanUtama />} />
        <Route path="/halaman1" element={<Halaman1 />} />
        <Route path="/halaman2" element={<Halaman2 />} />
        <Route path="/halaman3" element={<Halaman3 />} />
      </Routes>
    </Router>
  );
}

export default App;
