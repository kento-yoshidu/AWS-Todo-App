import React from "react"

import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Styles = require("../styles/_header.module.scss")

const settings = {
  autoplay: true,
  autoplaySpeed: 7000,
  fade: true,
  infinite: true,
  speed: 3000,
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
      hero2: file(relativePath: {eq: "hero2.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      hero3: file(relativePath: {eq: "hero3.jpg"}) {
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
          <div className={Styles.textWrapper}>
            <p>そのうえ、水素爆弾は線路としての雨と同じだと見なしても構わないこともある。その後、ジャガ芋は橋の一部である船を発見する予定である。</p>
            <p>もう、腐臭を発する洗濯機がネオンライトの本当の心を知る予定である。</p>
            <p>例えて言えば、暴走族を代表する害虫がスティーブ・ジョブスに悲鳴を上げるが、その時、遠足が座るかも知れない。</p>
          </div>
          <GatsbyImage
            image={imgData?.hero?.childImageSharp?.gatsbyImageData}
            alt={alt}
            className={Styles.imgWrapper}
            imgClassName={Styles.img}
          />
        </div>

        <div className={Styles.slide}>
          <h2 className={Styles.title}>02 / 04</h2>
          <div className={Styles.textWrapper}>
            <p>あえて言えば、焼きそばを内蔵した秘密基地は足をサポートするまでもない。</p>
          </div>
          <GatsbyImage
            image={imgData?.hero2?.childImageSharp?.gatsbyImageData}
            alt={alt}
            className={Styles.imgWrapper}
            imgClassName={Styles.img}
          />
        </div>

        <div className={Styles.slide}>
          <h2 className={Styles.title}>03 / 04</h2>
          <GatsbyImage
            image={imgData?.hero3?.childImageSharp?.gatsbyImageData}
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