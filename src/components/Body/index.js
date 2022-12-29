import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <ul>
              <li>Left Navbar Menu</li>
              <li>Item1</li>
              <li>Item2</li>
              <li>Item3</li>
              <li>Item4</li>
            </ul>
          )}
          {showContent && (
            <ul>
              <li>Content</li>
              <li>
                Search for Online Writing Help. Find the most relevant
                information, video, images, and answers from all across the Web.
                Make Things Easy. Unbeatable Value. Expert Friendly Service.
                Free shipping. Try It Free. Save Time and Money. Best Sellers.
              </li>
            </ul>
          )}

          {showRightNavbar && (
            <ul>
              <li>Right Navbar</li>
              <li>Ad1</li>
              <li>Ad2</li>
            </ul>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default body
