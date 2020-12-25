import React from "react"
import vitlugLogo from "../images/bitmap.png"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Layout = ({ children }) => (
  <div>
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className={`themeBox`}> 
          <input
            id="themeInput"
            name="themeInput"
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
          <label htmlFor="themeInput"></label>
        </div>
      )}
    </ThemeToggler>
    <div className={`container mx-auto py-8 text-center`}>
      <img
        src={vitlugLogo}
        alt="vitlug logo"
        className={`py-4 inline-block object-none object-center`}
      />
      {children}
    </div>
  </div>
)

export default Layout
