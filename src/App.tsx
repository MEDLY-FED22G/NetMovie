import { Outlet } from 'react-router-dom';
import './App.css';
import { Footer } from './Pages/Footer';

function App() {
  return (
    <main>
      {/* HEADER GOES HERE */}

      <Outlet />

      <Footer />
    </main>
  );
}

export default App;
