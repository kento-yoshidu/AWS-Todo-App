import React from "react"

import Layout from "../components/layout"

interface Props {
  location: {
    pathname: string
  }
}

const Page404: React.VFC<Props> = ({ location }) => (
  <Layout
    pageTitle="ページが見つかりません"
    pagePath={location.pathname}
  >
    <h1 style={{ padding: "20vh 0", textAlign: "center", color: "#888" }}>404 Page NOT FOUND</h1>
  </Layout>
)

export default Page404