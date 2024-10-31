const DarkmodeToggle = () => {
  return (
    <div className="theme-toggle-switches flex">
    <span className="dm-text" aria-hidden="true">Dark mode</span>
    
    <label id="label-darkmode-switch-whitebg" htmlFor="darkmode-switch-whitebg" className="dm-toggle-switch">
      <span className="dmswitchbg"></span>
    </label>
    <label id="label-darkmode-switch-darkbg" htmlFor="darkmode-switch-darkbg" className="dm-toggle-switch">
      <span className="dmswitchbg"></span>
    </label>

    <span className="dm-chbox-hidden debug">prefers-color-scheme-light-box</span>
    <input id="darkmode-switch-whitebg" className="darkmode-checkboxes visually-hidden" type="checkbox" aria-label="Enable darkmode" />
    <span className="dm-chbox-hidden debug">prefers-color-scheme-dark-box</span>
    <input id="darkmode-switch-darkbg" className="darkmode-checkboxes visually-hidden" type="checkbox" checked aria-label="Enable darkmode" />
  </div>
  )
}
export default DarkmodeToggle