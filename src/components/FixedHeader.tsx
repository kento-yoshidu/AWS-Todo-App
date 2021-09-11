import * as React from "react"

const Styles = require("../styles/_FixedHeader.module.scss")

const FixedHeader: React.VFC = () => {
	return (
		<nav className={Styles.fixedHeader}>
			<ul className={Styles.linkList}>
				<li className={Styles.linkItem}><a href="#">お知らせ</a></li>
				<li className={Styles.linkItem}><a href="#">お知らせ</a></li>
				<li className={Styles.linkItem}><a href="#">お知らせ</a></li>
				<li className={Styles.linkItem}><a href="#">お知らせ</a></li>
				<li className={Styles.linkItem}><a href="#">お知らせ</a></li>
			</ul>
		</nav>
	)
}

export default FixedHeader