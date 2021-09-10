import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare, faClock, faFolderOpen } from "@fortawesome/free-regular-svg-icons"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

//import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
//import resolveResponse from "contentful-resolve-response"

import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"
//import { config } from "@fortawesome/fontawesome-svg-core"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"

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

type PageContext = {
  id: number,
  next: {
    slug: string,
    title: string
  }
  previous: {
    slug: string,
    title:string
  }
}

type Props = {
  data: GatsbyTypes.BlogPostQuery,
  pageContext: PageContext,
  location: {
    pathname: string
  }

}

const BlogPost: React.VFC<Props> = ({ data, pageContext, location }) => {

  const description = documentToPlainTextString(JSON.parse(data.contentfulBlogPost.content.raw)).slice(0, 70)

  return (
    <>

      <SEO
        pagetitle={data.contentfulBlogPost?.title}
        pagedesc={description}
        pagepth={location.pathname}
        blogimg={`https:${data.contentfulBlogPost?.eyecatch?.file?.url}`}
        pageimgw={data.contentfulBlogPost?.eyecatch?.file?.details?.image?.width}
        pageimg={data.contentfulBlogPost?.eyecatch?.file?.details?.image?.height}
      />

      <div className="eyecatch">
        <figure>
          <Img
            fluid={data.contentfulBlogPost?.eyecatch?.fluid}
            alt={data.contentfulBlogPost?.eyecatch?.description}
          />
        </figure>
      </div>

      <article className="content">
        <div className="container">
          <h1 className="bar">
            {data.contentfulBlogPost?.title}
          </h1>

          <aside className="info">
            <time datetime={data.contentfulBlogPost?.publishDate}>
              <FontAwesomeIcon icon={faClock} />
              {data.contentfulBlogPost?.publishDateJP}
            </time>

            <div className="cat">
              <FontAwesomeIcon icon={faFolderOpen} />
              <ul>
                {data.contentfulBlogPost?.category?.map(category => (
                  <li className={category?.categorySlug} key={category?.id}>
                    <Link to={`/cat/${category?.categorySlug}/`}>{category?.category}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="postbody">
            {renderRichText(data.contentfulBlogPost?.content, options)}
          </div>

          <ul className="postlink">
            {pageContext.next && (
              <li className="prev">
                <Link to={`/blog/post/${pageContext.next.slug}/`} rel="prev">
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <span>{pageContext.next.title}</span>
                </Link>
              </li>
            )}
            {pageContext.previous && (
              <li className="next">
                <Link to={`/blog/post/${pageContext.previous.slug}/`} rel="next">
                  <span>{pageContext.previous.title}</span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </Link>
              </li>
              )}
          </ul>

        </div>
      </article>
    </>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPost($id: String!) {
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
        file {
          details {
            image {
              width
              height
            }
          }
        }
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
