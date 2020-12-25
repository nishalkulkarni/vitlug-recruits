import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <h2 className={`text-3xl`}>Oopsie :( You are not supposed to be here.</h2>
      <Link to="/" className={`text-purple-600 underline`}>Go Back</Link>
    </Layout>
  )
}
