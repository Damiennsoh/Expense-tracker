import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
// import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact</h5>
            <p>Email: info@psychatech.com</p>
            <p>Phone: +1-123-456-7890</p>
          </div>
          <div className="col-md-6 text-md-right">
            <h5>Follow us on social media</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.facebook.com">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-md-right">
            &copy; 2023 PsycaTech. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;