import { Navbar } from 'react-bootstrap';
const Header = () => {
  return (
    <Navbar sticky="top" className="mx-2">
      <header class="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4 border-bottom">
        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#education" class="nav-link px-2 link-dark">
              Education
            </a>
          </li>
          <li>
            <a href="#skills" class="nav-link px-2 link-dark">
              Skills
            </a>
          </li>
          <li>
            <a href="#about" class="nav-link px-2 link-dark">
              About
            </a>
          </li>
        </ul>
      </header>
    </Navbar>
  );
};

export default Header;
