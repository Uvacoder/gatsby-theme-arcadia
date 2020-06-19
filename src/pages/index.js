import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSections from "../components/home-sections"
import HomeRepositories from "../components/home-repositories"

import Spacer from "../ui/spacer"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Spacer size={11} />
      <HomeSections />
      <HomeRepositories />
    </Layout>
  )
}

export default IndexPage
