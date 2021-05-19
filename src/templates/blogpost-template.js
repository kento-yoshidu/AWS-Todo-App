import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare, faClock, faFolderOpen } from "@fortawesome/free-regular-svg-icons"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

//import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"
import { config } from "@fortawesome/fontawesome-svg-core"

const options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2>
        <FontAwesomeIcon icon={faCheckSquare} />
        { children }
      </h2>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (
        <img
          src={node.data.target.file.url}
        />
      );
    },
  },
  renderText: text => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment]
    }, [])
  }
}

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <div className="eyecatch">
        <figure>
          <Img
            fluid={data.contentfulBlogPost.eyecatch.fluid}
            alt={data.contentfulBlogPost.eyecatch.description}
          />
        </figure>
      </div>

      <article className="content">
        <div className="container">
          <h1 className="bar">
            {data.contentfulBlogPost.title}
          </h1>

          <aside className="info">
            <time datetime={data.contentfulBlogPost.publishDate}>
              <FontAwesomeIcon icon={faClock} />
              {data.contentfulBlogPost.publishDateJP}
            </time>

            <div className="cat">
              <FontAwesomeIcon icon={faFolderOpen} />
              <ul>
                {data.contentfulBlogPost.category.map(category => (
                  <li className={category.categorySlug} key={category.id}>
                    {category.category}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="postbody">
            {renderRichText(data.contentfulBlogPost.content, options)}
          </div>

          <ul className="postlink">
            <li className="prev">
              <a href="base-blogpost.html" rel="prev">
              <FontAwesomeIcon icon={faChevronLeft} />
                <span>前の記事</span>
              </a>
            </li>
            <li className="next">
              <a href="base-blogpost.html" rel="next">
                <span>次の記事</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </li>
          </ul>

        </div>
      </article>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      publishDateJP: publishDate(formatString: "YYYY年MM月DD日")
      publishDate
      category {
        category
        categorySlug
        id
      }
      eyecatch {
        fluid(maxWidth: 1600) {
          ...GatsbyContentfulFluid_withWebp
        }
        description
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            file {
              url
            }
          }
        }
      }
    }
  }
`
