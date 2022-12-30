import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar-menu">
              <h1>Left Navbar Menu</h1>
              <ul className="left-navbar-menu-list-item">
                <li className="left-navbar-item">Item1</li>
                <li className="left-navbar-item">Item2</li>
                <li className="left-navbar-item">Item3</li>
                <li className="left-navbar-item">Item4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container-1">
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="right-navbar-container">
              <h1 className="right-navbar-title">Right Navbar</h1>
              <div className="right-navbar-sub-container">
                <p className="ad-container">Ad 1</p>
                <p className="ad-container">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default body
