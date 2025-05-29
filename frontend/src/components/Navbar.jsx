import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  const getActiveClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li>
          <Link
            to="/"
            style={styles.link}
            className={getActiveClass('/') + ' admin-nav-link'}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/productos"
            style={styles.link}
            className={getActiveClass('/productos') + ' admin-nav-link'}
          >
            Productos
          </Link>
        </li>
        <li>
          <Link
            to="/clientes"
            style={styles.link}
            className={getActiveClass('/clientes') + ' admin-nav-link'}
          >
            Clientes
          </Link>
        </li>
        <li>
          <Link
            to="/empleados"
            style={styles.link}
            className={getActiveClass('/empleados') + ' admin-nav-link'}
          >
            Empleados
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// CSS en JS
const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '1rem'
  },
  ul: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.5rem',
    margin: 0,
    padding: 0
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

export default NavBar;