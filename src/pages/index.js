import * as React from "react"
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"

import Layout from "../components/layout"
import Hero from "../components/hero"

import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>

    <SEO />

    <Hero
      title="hoge"
      fluid={data.hero.childImageSharp.fluid}
    />

    <section className="items">
      <div className="container">
        <h2 className="bar">Food <span>Essence</span></h2>

        <div className="details">
          <div className="detail">
            <figure>
              <Img fluid={data.fruit.childImageSharp.fluid} alt="" />
            </figure>
            <h3>フルーツ</h3>
            <p>FRUIT</p>
            <p>甘くてすっぱくておいしい果実たち。<br />旬のフルーツを満喫します。</p>
          </div>

          <div className="detail">
            <figure>
              <Img fluid={data.grain.childImageSharp.fluid} alt="" />
            </figure>
            <h3>穀物</h3>
            <p>GRAIN</p>
            <p>食事の基本となる穀物。<br />毎日の活動のエネルギー源になります。</p>
          </div>

          <div class="detail">
            <figure>
              <Img fluid={data.beverage.childImageSharp.fluid} alt="" />
            </figure>
            <h3>飲み物</h3>
            <p>BEVERAGE</p>
            <p>リラックスするのに欠かせない飲み物。<br />お気に入りの一杯はありますか？</p>
          </div>
        </div>
      </div>
    </section>

    <section class="photo">
      <h2 class="sr-only">Photo</h2>
      <figure>
        <Img
          fluid={data.berry.childImageSharp.fluid}
          alt="赤く熟したベリー"
          style={{ height: "100%" }}
        />
      </figure>
    </section>

    <section>
      <div className="container">
        <h1 className="sr-only">RECENT POSTS</h1>

        <div className="posts">
          {data.allContentfulBlogPost.edges.map(({ node }) => (
            <article
              className="post"
              key={node.id}
            >
              <Link to={`/blog/post/${node.slug}`}>
                <figure>
                  <Img
                    fluid={node.eyecatch.fluid}
                    alt={node.eyecatch.description}
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
query {
  hero: file(relativePath: {eq: "hero.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  fruit: file(relativePath: {eq: "fruit.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  grain: file(relativePath: {eq: "grain.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  beverage: file(relativePath: {eq: "beverage.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  berry: file(relativePath: {eq: "berry.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
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
}
`