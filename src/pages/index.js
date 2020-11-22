import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SliceZone from "../components/sliceZone"

export const query = graphql`
  query HomePageQuery {
    prismic {
      allHomepages {
        edges {
          node {
            body {
              ... on PRISMIC_HomepageBodyHero {
                type
                primary {
                  hero_content
                  hero_title
                  backgroundImage
                }
              }
              ... on PRISMIC_HomepageBodyCall_to_action_grid {
                type
                primary {
                  section_title
                }
                fields {
                  button_destination {
                    ... on PRISMIC_Page {
                      page_title
                      content
                      _meta {
                        uid
                      }
                    }
                  }
                  button_label
                  call_to_action_title
                  content
                  feature_image
                }
              }
                ... on PRISMIC_HomepageBodyPrice_list {
                type
                label
                fields {
                  price_amount
                  price_list_description
                  price_list_title
                  price_type
                }
                primary {
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`


const IndexPage = (props) => (
  <Layout>
    <SliceZone body={props.data.prismic.allHomepages.edges[0].node.body} />
  </Layout>
)

export default IndexPage
