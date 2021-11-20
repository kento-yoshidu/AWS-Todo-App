import React from "react"

import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Styles = require("../styles/_header.module.scss")

const settings = {
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false
};

interface Props {
  imagePath: IGatsbyImageData
  alt: string
}

const Header: React.VFC<Props> = ({imagePath, alt}) => {
  const imgData: GatsbyTypes.ImagesQuery = useStaticQuery<GatsbyTypes.ImageQuery>(graphql`
    query Images{
      hero: file(relativePath: {eq: "hero.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <header className={Styles.header}>
      <Slider {...settings}>
        <div className={Styles.slide}>
          <h2 className={Styles.title}>01 / 04</h2>
          <GatsbyImage
            image={imgData?.hero?.childImageSharp?.gatsbyImageData}
            alt={alt}
            className={Styles.imgWrapper}
            imgClassName={Styles.img}
          />
        </div>

        <div className={Styles.slide}>
          <h2 className={Styles.title}>02 / 04</h2>
          <GatsbyImage
            image={imagePath}
            alt={alt}
            className={Styles.imgWrapper}
            imgClassName={Styles.img}
          />
        </div>

        <div className={Styles.slide}>
          <h2 className={Styles.title}>03 / 04</h2>
          <GatsbyImage
            image={imagePath}
            alt={alt}
            className={Styles.imgWrapper}
            imgClassName={Styles.img}
          />
        </div>
      </Slider>

    </header>
  )
}

export default Header