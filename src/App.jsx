import './App.css';

import Nav from './components/Nav';

const App = () => {
  return (
    <>
      <div className="main-wrapper">
        <main>
          <Nav />

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
