import React, { ReactNode } from "react"

import SEO from "../components/seo"
import FixHeader from "../components/FixedHeader"
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

    <FixHeader />

    {children}

    <Footer />
  </>
)

export default Layout