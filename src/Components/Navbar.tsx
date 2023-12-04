// Navbar.js
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Logo
        </Typography>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/categori" color="inherit">
          Categories
        </Button>
        <Button component={Link} to="/bookmark" color="inherit">
          Bookmarks
        </Button>
        <Button component={Link} to="/cards" color="inherit">
          Cards
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
