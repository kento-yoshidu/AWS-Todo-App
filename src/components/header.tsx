import React from "react"

import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

const Styles = require("../styles/_header.module.scss")

interface Props {
  imagePath: IGatsbyImageData
  alt: string
}

const Header: React.VFC<Props> = ({imagePath, alt}) => (
    <header className={Styles.header}>
      <div className={Styles.imgWrapper}>
        <GatsbyImage
          image={imagePath}
          alt={alt}
        />
      </div>
    </header>

)

export default Header