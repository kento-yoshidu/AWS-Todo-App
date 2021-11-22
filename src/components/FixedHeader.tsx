import * as React from "react"

const Styles = require("../styles/_FixedHeader.module.scss")

const FixedHeader: React.VFC = () => {
	return (
		<nav className={Styles.fixedHeader}>
      <h1>Gatsby & Contentful</h1>
		</nav>
	)
}

export default FixedHeader