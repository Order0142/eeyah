import React from 'react'
import { Link } from "react-router-dom";
const NavLinks = ({children, colors, to}) => {
  return (
    <Link className={colors} to={to}>{children}</Link>
  )
}

export default NavLinks
