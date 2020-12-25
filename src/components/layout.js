import React from "react"
import vitlugLogo from "../images/bitmap.png"

const Layout = ({ children }) => (
  <div className={`container mx-auto py-8 text-center`}>
    <img src={vitlugLogo} alt="vitlug logo" className={`py-4 inline-block object-none object-center`}  />
    {children}
  </div>
)

export default Layout
