import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <Link to="/">
            <h3>Home</h3>
        </Link>
        <Link to="/favourites">
            <h3>Favourites</h3>
        </Link>
    </div>
  )
}

export default Navbar