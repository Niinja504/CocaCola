import React from 'react';

const Home = () => {
  return (
    <main style={styles.main}>
      {}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>¡Refresca tu vida con Burbujas Refresh!</h1>
        <p style={styles.heroText}>Las gaseosas más chispeantes, con los sabores más vibrantes 🍊🥤</p>
        <button style={styles.ctaButton}>Ver productos</button>
      </section>

      {}
      <section style={styles.featuredSection}>
        <h2 style={styles.sectionTitle}>Sabores más populares</h2>
        <div style={styles.productGrid}>
          <div style={styles.productCard}>
            <img src="https://via.placeholder.com/150/FF8C00/FFFFFF?text=Naranja" alt="Gaseosa Naranja" style={styles.productImage} />
            <h3>Naranja Explosiva</h3>
            <p>Refrescante y vibrante. ¡La clásica burbuja cítrica!</p>
          </div>
          <div style={styles.productCard}>
            <img src="https://via.placeholder.com/150/00CED1/FFFFFF?text=Limón" alt="Gaseosa Limón" style={styles.productImage} />
            <h3>Limón Burbujeante</h3>
            <p>Una mezcla chispeante para los amantes del sabor ácido.</p>
          </div>
          <div style={styles.productCard}>
            <img src="https://via.placeholder.com/150/BA55D3/FFFFFF?text=Uva" alt="Gaseosa Uva" style={styles.productImage} />
            <h3>Uva Mística</h3>
            <p>Una experiencia dulce con el poder de las uvas moradas.</p>
          </div>
        </div>
      </section>

      {}
      <section style={styles.ctaSection}>
        <h2>¿Listo para burbujear?</h2>
        <p>Haz tu pedido hoy y siente la diferencia.</p>
        <button style={styles.ctaButtonAlt}>Contáctanos</button>
      </section>
    </main>
  );
};

const styles = {
  main: {
    fontFamily: 'Arial, sans-serif',
    paddingBottom: '3rem'
  },
  hero: {
    background: 'linear-gradient(to right, #ff6f61, #ffa07a)',
    color: 'white',
    textAlign: 'center',
    padding: '4rem 2rem'
  },
  heroTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem'
  },
  heroText: {
    fontSize: '1.2rem',
    marginBottom: '2rem'
  },
  ctaButton: {
    backgroundColor: 'white',
    color: '#ff6f61',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '20px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  featuredSection: {
    padding: '3rem 2rem',
    backgroundColor: '#fff3f0',
    textAlign: 'center'
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '2rem'
  },
  productGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '2rem'
  },
  productCard: {
    backgroundColor: 'white',
    padding: '1rem',
    borderRadius: '10px',
    width: '250px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  },
  productImage: {
    width: '100%',
    borderRadius: '10px'
  },
  ctaSection: {
    backgroundColor: '#ff6f61',
    color: 'white',
    textAlign: 'center',
    padding: '3rem 2rem'
  },
  ctaButtonAlt: {
    backgroundColor: 'white',
    color: '#ff6f61',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '1rem'
  }
};

export default Home;