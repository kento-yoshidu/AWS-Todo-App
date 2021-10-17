import React, { ReactNode } from "react"

import SEO from "../components/seo"
import Footer from "../components/footer"

interface Props {
  children: ReactNode,
  pageTitle?: string,
  pageDesc?: string,
  pagePath?: string
}

const Layout: React.VFC<Props> = ({children, pageTitle, pageDesc, pagePath}) => (
  <>
    <SEO
      pageTitle={pageTitle}
      pageDesc={pageDesc}
    />

    {children}

    <Footer />
  </>
)

export default Layout