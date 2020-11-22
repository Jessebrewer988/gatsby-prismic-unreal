import React from 'react'
import {graphql} from 'gatsby'
import RichText from '../components/richText'
import SliceZone from '../components/sliceZone'
import styled from 'styled-components'

import Layout from '../components/layout';

export const query = graphql`
query PageQuery($id: String) {
  prismic {
    allPages(id: $id) {
      edges {
        node {
          body {
            ... on PRISMIC_PageBodyCall_to_action_grid {
              type
              label
              fields {
                button_destination {
                  _linkType
                  ... on PRISMIC_Contact_page {
                    form_title
                    form_description
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
              primary {
                section_title
              }
            }
          } 
          content
          page_title
          _meta {
            uid
            id
          }
        }
      }
    }
  }
}
`

const PageWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
`

const Page = (props) => {
  const pageData = props.data.prismic.allPages.edges[0].node;
  const { page_title } = pageData;
  const { content } = pageData;
  const { body } = pageData;
  console.log('body', body);
  return (
    <Layout>
      <PageWrapper>
        <RichText render={page_title} />
        <RichText render={content} />
        {body && <SliceZone body={body} />}
      </PageWrapper>
    </Layout>
  )
}

export default Page;