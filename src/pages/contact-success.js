import React from 'react'
import Layout from '../components/layout';
import styled from 'styled-components';

const ContentWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
`

const ContactSuccess = () => {
  return (
    <Layout>
      <ContentWrapper>
        <h1>Thanks for reaching out!</h1>
        <p>I will get back to you ASAP</p>
      </ContentWrapper>
    </Layout>
  )
}

export default ContactSuccess
