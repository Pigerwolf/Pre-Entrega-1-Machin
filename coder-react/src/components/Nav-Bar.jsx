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
            <div class="container">
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100 img-fluid" src="https://images.ctfassets.net/1nw0m35kh5t7/6kI0OuYTrVywhKOyUd1kDi/ed6186f9da8feb4464ec6f9e238e6073/Types-of-e-commerce-16-9" alt="First slide"/>
      </div>
      <div class="carousel-item img-fluid">
        <img class="d-block w-100" src="https://assets.entrepreneur.com/content/3x2/2000/20191127134656-e-commerce-3406613.jpeg?width=600&crop=16:9" alt="Second slide"/>
      </div>
      <div class="carousel-item img-fluid">
        <img class="d-block w-100" src="https://media.newyorker.com/photos/5b465113da42df0b560981d3/16:9/w_1280,c_limit/180723_r32444_rd.jpg" alt="Third slide"/>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Anterior</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Siguiente</span>
    </a>
  </div>
 </div>
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