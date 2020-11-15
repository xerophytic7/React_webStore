import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/products">Products</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/cart">Cart</Link>
      </li>
    </ul>
  </div>
</nav>
        // <div class="jumbotron">
        
        // <h1 className="display-4">Hello, world!</h1>
        // <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        // <hr className="my-4" />
        // <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        // <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>

        // </div>
    );
};

export default Header;