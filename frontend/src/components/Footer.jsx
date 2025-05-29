import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.logoSection}>
          <h2 style={styles.logo}>🍊 Burbujas Refresh</h2>
          <p style={styles.tagline}>La chispa que refresca tu día</p>
        </div>

        <div style={styles.linksSection}>
          <a href="#" style={styles.link}>Inicio</a>
          <a href="#" style={styles.link}>Productos</a>
          <a href="#" style={styles.link}>Clientes</a>
          <a href="#" style={styles.link}>Empleados</a>
        </div>

        <div style={styles.socialSection}>
          <a href="#" style={styles.icon}><i className="fab fa-facebook-f"></i></a>
          <a href="#" style={styles.icon}><i className="fab fa-instagram"></i></a>
          <a href="#" style={styles.icon}><i className="fab fa-twitter"></i></a>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Burbujas Refresh. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#ff6f61',
    color: 'white',
    paddingTop: '2rem',
    paddingBottom: '1rem',
    marginTop: '3rem'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: '0 2rem',
  },
  logoSection: {
    flex: '1',
    minWidth: '200px',
    marginBottom: '1rem'
  },
  logo: {
    margin: 0
  },
  tagline: {
    fontStyle: 'italic',
    marginTop: '0.5rem'
  },
  linksSection: {
    flex: '1',
    minWidth: '150px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1rem'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500'
  },
  socialSection: {
    flex: '1',
    minWidth: '150px',
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    marginBottom: '1rem'
  },
  icon: {
    color: 'white',
    textDecoration: 'none'
  },
  bottomBar: {
    textAlign: 'center',
    marginTop: '1rem',
    borderTop: '1px solid rgba(255,255,255,0.3)',
    paddingTop: '1rem'
  }
};

export default Footer;