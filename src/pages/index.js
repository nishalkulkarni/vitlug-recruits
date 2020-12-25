import React, { useState } from "react"
import { graphql } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"
import Layout from "../components/layout"
import SelectItem from "../components/selectItem"

export default function IndexPage({ data }) {
  const index = data.localSearchPeople.index
  const store = data.localSearchPeople.store

  const [query, setQuery] = useState("")
  const results = useFlexSearch(query, index, store)

  const recruits = data.allPeopleCsv.edges
  return (
    <Layout>
      <h2 className={`text-3xl`}>{data.site.siteMetadata.title}</h2>
      <h3 className={`text-2xl pb-8`}>{data.site.siteMetadata.description}</h3>
      <input
        name="query"
        value={query}
        class="w-full h-16 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow"
        type="search"
        onChange={event => setQuery(event.target.value.toUpperCase())}
        placeholder="Search Registration Number or Domain..."
      />
      {results.length > 0 ? (
        <div className={`divide-y divide-solid`}>
          {results.map(node => (
            <SelectItem
              id={node.id}
              name={node.Name}
              domain={node.Domain}
              regno={node.Registration_Number}
            />
          ))}
        </div>
      ) : (
        <div className={`divide-y divide-solid`}>
          {recruits.map(({ node }) => (
            <SelectItem
              id={node.id}
              name={node.Name}
              domain={node.Domain}
              regno={node.Registration_Number}
            />
          ))}
        </div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query {
    allPeopleCsv {
      edges {
        node {
          id
          Name
          Registration_Number
          Email
          Domain
        }
      }
    }
    site {
      siteMetadata {
        description
        title
      }
    }
    localSearchPeople {
      index
      store
    }
  }
`
