import './App.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';

const App = () => {
  return (
    <>
      <div className="main-wrapper">
        <main>
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

          <div>
            <div>
              <h2>Unified observability and security</h2>
              <p className="mock-paragraph">
                This is a mock page made by Andres Flores. Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Nostrum illo qui.
              </p>
              <div className="button-wrapper">
                <button className="free-trial-btn">Mock button</button>
                <button className="request-demo-btn">Mock button</button>
              </div>
            </div>
            <div>
              <img
                className="dashboard-homepage"
                src="https://mkt-cdn.dynatrace.com/assets/Marketing/_1920x1062_crop_center-center_100_line/DT_Dashboard_Homepage.png.webp"
                alt="dashboard-homepage"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
