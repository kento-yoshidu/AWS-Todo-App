import React from 'react'
import { Link } from "gatsby"

export default () => (
  <header className="header">
    <div className="container">
      <div className="site">
        <Link to={`/`}>
          GatsbyCafeSite
        </Link>
      </div>
      
      <nav className="nav">
        <ul>
          <li>
            <Link to={`/`}>TOP</Link>
          </li>
          <li>
            <Link to={`/about/`}>ABOUT</Link>
          </li>
          <li>
            <Link to={`/blog/`}>BLOG</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)