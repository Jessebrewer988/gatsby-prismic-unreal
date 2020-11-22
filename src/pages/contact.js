import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import RichText from '../components/richText'

export const query = graphql`{
  prismic {
    allContact_pages {
      edges {
        node {
          form_title
          form_description
          form_fields {
            field_name
            field_type
            required
          }
        }
      }
    }
  }
}
`
const Form = styled.form`
  padding: 10px;
  background: #eee;
  margin-top: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  input {
    margin-bottom: 10px;
    border-radius: 4px;
    height: 40px;
    border: 1px solid #eee;
    width: 100%;
  }

  textarea {
    margin-bottom: 10px;
    border-radius: 4px;
    height: 100px;
    border: 1px solid #eee;
    width: 100%;
    resize: none;
  }
`

const Button = styled.button`
  color: white;
  background: orange;
  cursor: pointer;
  padding: 4px 8px;
  box-shadow: none;
  border-radius: 4px;
`

const ContentWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
`

const Contact = ( props ) => {
  const form_data = props.data.prismic.allContact_pages.edges[0].node;
  const { form_fields } = form_data;
  return (
    <Layout>
      <ContentWrapper>
        <RichText render={form_data.form_title} />
        <RichText render={form_data.form_description} />
        <Form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/contact-success"
        >
        <input type="hidden" name ="form-name" value="contact" />
          {form_fields.map((field, i) => {
            if (field.field_type === 'textarea') {
              return (
                <div key={i}>
                  <textarea 
                  required={field.required === 'Yes' }
                  placeholder={field.field_name}></textarea>
                </div>
              ) 
            } else {
              return (
                <div key={i}>
                  <input 
                  placeholder={field.field_name}
                  required={field.required === 'Yes' }
                  type={field.field_type} />
                </div>
              )
            }
          })}
          <Button type="submit">
            Submit
          </Button>
        </Form>
      </ContentWrapper>

    </Layout>
  )
}

export default Contact
