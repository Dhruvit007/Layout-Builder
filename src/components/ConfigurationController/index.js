import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
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
              />
              <label htmlFor="content">Content</label>
            </div>
            <div>
              <input
                onChange={onToggleShowLeftNavbar}
                id="leftNavbar"
                type="checkbox"
              />
              <label htmlFor="leftNavbar">Left Navbar</label>
            </div>
            <div>
              <input
                onChange={onToggleShowRightNavbar}
                id="rightNavbar"
                type="checkbox"
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
