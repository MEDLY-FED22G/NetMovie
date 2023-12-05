import { Outlet } from 'react-router-dom';
import './App.css';
import { Footer } from './Pages/Footer';

function App() {
  return (
    // HEADER GOES HERE

    <main>
      <Outlet />
      <Footer />
    </main>

    // FOOTER GOES HERE
  );
}

export default App;
