import * as React from "react"
import { graphql, Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Header from "../components/header"
import { faCcVisa } from "@fortawesome/free-brands-svg-icons"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Styles = require("../styles/_index.module.scss")

type Props = {
  data: GatsbyTypes.IndexPageQuery
}
const settings = {
  autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const IndexPage: React.VFC<Props> = ({ data }) => (
  <Layout>

    <Header
      imagePath={data?.file?.childImageSharp?.gatsbyImageData}
      alt="珈琲の画像"
    />

    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>

    <section className={Styles.sec1}>
      <div className={Styles.wrapper}>
        <h2>Site Map</h2>

        <div className={Styles.boxWrapper}>
          <div className={Styles.box}>
            hogehoge
          </div>
          <div className={Styles.box}>
            hogehoge
          </div>
          <div className={Styles.box}>
            hogehoge
          </div>
          <div className={Styles.box}>
            hogehoge
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className={Styles.container}>
        <h1 className="sr-only">RECENT POSTS</h1>

        <div className={Styles.posts}>
          {data.allContentfulBlogPost.edges.map(({ node }) => (
            <article
              className={Styles.post}
              key={node.id}
            >
              <Link to={`/blog/post/${node.slug}`}>
                <figure>
                  <Img
                    fluid={node.eyecatch?.fluid}
                    alt={node.eyecatch?.description}
                    style={{ height: "100%" }}
                  />
                </figure>
                <h3>{ node.title }</h3>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
query IndexPage{
  allContentfulBlogPost(
    sort: {
      order: DESC,
      fields: publishDate
    }
    skip: 0
    limit: 4
  ) {
    edges {
      node {
        title
        id
        slug
        eyecatch {
          fluid(maxWidth: 573) {
            ...GatsbyContentfulFluid_withWebp
          }
          description
        }
      }
    }
  }
  file(relativePath: {eq: "hero.jpg"}) {
    id
    childImageSharp {
      id
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`