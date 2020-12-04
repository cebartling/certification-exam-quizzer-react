import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-12 col-md">
          <small className="d-block mb-3 text-muted">Pintail Consulting LLC &copy; 2020</small>
        </div>
        <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li>
              <Link className="text-muted" to="/welcome">Cool stuff</Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li>
              <Link className="text-muted" to="/welcome">Resource</Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li>
              <Link className="text-muted" to="/welcome">Team</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



