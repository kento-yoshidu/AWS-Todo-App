import React from 'react'
import { Link } from "gatsby"

const Styles = require("../styles/_header.module.scss")

const Header = () => (
  <header className={Styles.header}>
    <div className={Styles.container}>
      <h1 className={Styles.headerTitle}>
        <Link to={`/`}>
          GatsbyCafeSite
        </Link>
      </h1>
      
      <nav className={Styles.nav}>
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

export default Header