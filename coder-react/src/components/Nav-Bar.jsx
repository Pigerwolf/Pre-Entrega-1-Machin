import React from 'react';
import "../index.css"

const NavBar = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <h1>ESC-Electronics</h1>
          </div>
        </div>
      </div>
      <div className="container" style={{ height: '30px' }}>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ height: '30px' }}>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse pl-4" id="navbarNav">
            <ul className="navbar-nav">
              {/* Menú desplegable */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <h4>≡ Categorías</h4>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="index.html">Inicio</a>
                  <a className="dropdown-item" href="#">Computadoras de Escritorio</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Laptops</a>
                  <a className="dropdown-item" href="#">Smartphones</a>
                  <a className="dropdown-item" href="#">Tablets</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;