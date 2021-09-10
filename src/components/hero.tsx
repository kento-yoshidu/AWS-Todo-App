import React from "react"
import Img from "gatsby-image"

const Styles = require("../styles/_hero.module.scss")

const Hero = (props) => {
  const title = props.title
  const fluid = props.fluid

  return (
    <section className={Styles.hero}>
      <div className={Styles.wrapper}>
        <figure>
          <Img
            fluid={fluid}
            alt=""
            style={{ height: "100%"}}
          />
        </figure>

        <div className={Styles.siteTitleWrapper}>
          <h1>
            GatsbyCafeSite
          </h1>
          <p>Gatsbyを使用して作られたカフェのWebサイトです。</p>
        </div>
      </div>
    </section>
  )
}

export default Hero