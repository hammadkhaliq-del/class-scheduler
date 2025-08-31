const React = require("react");

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>MyApp</h1>
      <nav>
        <ul style={styles.navList}>
          <li><a href="/" style={styles.link}>Home</a></li>
          <li><a href="/about" style={styles.link}>About</a></li>
          <li><a href="/contact" style={styles.link}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

module.exports = Header;
