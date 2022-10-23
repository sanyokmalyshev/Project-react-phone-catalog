/* eslint-disable no-console */
import { Link, useLocation } from 'react-router-dom';
import './Footer.scss';
import '../../scss/blocks/nav.scss';
import logo from '../../img/LOGO.svg';

export const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="Footer">
      <div className="Footer__container container">
        <div className="logo">
          <Link to="/" onClick={goToTop}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className="Footer__nav nav">
          <ul className="nav__pages">
            <li className="nav__page">
              <a
                href="https://github.com/sanyokmalyshev"
                target="blank"
                className="Footer__link nav__link"
              >
                Github
              </a>
            </li>
            <li className="nav__page">
              <a
                href="https://github.com/sanyokmalyshev"
                target="blank"
                className="Footer__link nav__link"
              >
                Contacts
              </a>
            </li>
            <li className="nav__page">
              <a
                href="https://github.com/sanyokmalyshev"
                target="blank"
                className="Footer__link nav__link"
              >
                Rights
              </a>
            </li>
          </ul>
        </nav>
        <div className="Footer__backToTop">
          <Link
            to={currentPath}
            className="Footer__titleBack"
            onClick={goToTop}
          >
            Back to top
          </Link>
          <button
            type="button"
            className="
              button
              Footer__backButton
            "
            onClick={goToTop}
          >
            &nbsp;
          </button>
        </div>
      </div>
    </footer>
  );
};
