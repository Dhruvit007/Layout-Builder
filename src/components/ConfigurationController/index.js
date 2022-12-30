import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      return (
        <div className="configuration-controller">
          <div>
            <h1 className="layout-name">Layout</h1>
            <div>
              <input
                onChange={onToggleShowContent}
                id="content"
                type="checkbox"
                checked={showContent}
              />
              <label htmlFor="content">Content</label>
            </div>
            <div>
              <input
                onChange={onToggleShowLeftNavbar}
                id="leftNavbar"
                type="checkbox"
                checked={showLeftNavbar}
              />
              <label htmlFor="leftNavbar">Left Navbar</label>
            </div>
            <div>
              <input
                onChange={onToggleShowRightNavbar}
                id="rightNavbar"
                type="checkbox"
                checked={showRightNavbar}
              />
              <label htmlFor="rightNavbar">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
