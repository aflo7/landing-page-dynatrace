import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav>
      <div className="left-nav-wrapper">
        <h1>LOGO</h1>
        <div className="left-nav">
          <p>
            Mock <FaAngleDown />
          </p>
          <p>
            Mock <FaAngleDown />
          </p>
          <p>
            Mock <FaAngleDown />
          </p>
          <p>
            Mock <FaAngleDown />
          </p>
          <p>Mock</p>
        </div>
      </div>
      <GiHamburgerMenu size="1.5rem" className="gi-hamburger-menu" />
      <div className="right-nav">
        <p>
          Mock <FaAngleDown />
        </p>
        <p>Mock</p>
        <FaSearch />
        <button className="free-trial-btn" style={{ fontSize: '1rem' }}>
          Mock button
        </button>
      </div>
    </nav>
  );
};

export default Nav;
