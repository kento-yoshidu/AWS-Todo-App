import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons"

type Props = {
  data: GatsbyTypes.CatBlogListQuery,
  location: {
    pathname: string,
  },
  pageContext: {
    catid: number,
    catname: string,
    catslug: string,
    skip: number,
    limit: number,
    currentPage: number,
    isFirst: boolean,
    isLast: boolean
  }
}

const CatBlogList: React.VFC<Props> = ({data, location, pageContext}) => (
  <Layout
    pageTitle={`category: ${pageContext.catname}`}
    pageDesc={`「${pageContext.catname}」カテゴリの記事一覧です。`}
    pagePath={location.pathname}
  >
    <section className="content bloglist">
      <div className="container">
        <h1 className="bar">CATEGORY: {pageContext.catname}</h1>

        <div className="posts">
          {data.allContentfulBlogPost.edges.map(({ node }) => (
            <article
              className="post"
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

        <ul className="pagenation">
          {!pageContext.isFirst && (
            <li className="prev">
              <Link
                to={
                  pageContext.currentPage === 2
                    ? `/cat/${pageContext.catslug}`
                    : `/cat/${pageContext.catslug}/${pageContext.currentPage - 1}`
                }
                rel="prev"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
                <span>前のページ</span>
              </Link>
            </li>
          )}

          {!pageContext.isLast && (
            <li className="next">
              <Link
                to={
                  `/cat/${pageContext.catslug}/${pageContext.currentPage + 1}/`
                }
                rel="next"
              >
                <span>次のページ</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
query CatBlogList($catid: String!, $skip: Int!, $limit: Int!) {
  allContentfulBlogPost(
    sort: {
      order: DESC,
      fields: publishDate
    }
    skip: $skip
    limit: $limit
    filter: {
      category: {
        elemMatch: {
          id: { eq: $catid }
        }
      }
    }
  ) {
    edges {
      node {
        title
        id
        slug
        eyecatch {
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid_withWebp
          }
          description
        }
      }
    }
  }
}
`

export default CatBlogList