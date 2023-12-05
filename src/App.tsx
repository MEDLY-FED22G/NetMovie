import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    // HEADER GOES HERE
    <main>
      <Outlet />
    </main>
    // FOOTER GOES HERE
  );
}

export default App;
