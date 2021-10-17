import React from "react"

import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

const Styles = require("../styles/_header.module.scss")

interface Props {
  imagePath: IGatsbyImageData
  alt: string
}

const Header: React.VFC<Props> = ({imagePath, alt}) => (
  <header className={Styles.header}>
    <GatsbyImage
      image={imagePath}
      alt={alt}
      className={Styles.imgWrapper}
      imgClassName={Styles.img}
    />
  </header>
)

export default Header