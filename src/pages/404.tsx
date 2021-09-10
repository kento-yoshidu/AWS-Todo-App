import React from "react"

import SEO from "../components/seo"

const Page404 = ({ location }) => (
  <>
    <SEO
      pagetitle="ページが見つかりません"
      pagepath={location.pathname}
    />

    <h1 style={{ padding: "20vh 0", textAlign: "center", color: "#888" }}>404 Page NOT FOUND</h1>
  </>
)

export default Page404