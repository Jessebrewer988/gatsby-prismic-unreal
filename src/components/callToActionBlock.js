import React from 'react'
import styled from 'styled-components'
import RichText from './richText'

import {Link} from 'gatsby'

const CallToActionBlockWrapper = styled.div`
  padding: 20px;
  background: #eee;
  border-radius: 20px;
  margin: 20px 0;

  .call-content {
    display: flex;
    .featured-image-wrapper {
      background: white;
      padding: 10px;
      border-radius: 10px;
      margin: auto 10px;
    }
    img {
      max-width: 200px;
      margin: 0;
    }
  }
`

const Button = styled.div`
  background: orange;
  display: inline-block;
  border-radius: 5px;
  padding: 4px 8px;
  cursor: pointer;

  a {
    display: inline-block;
    padding: 4px 8px;
    text-decoration: none;
    color:white;
  }

  &:hover {
    background-color: black;

    a {
      color: orange;
    }
  }
  
`

const CallToActionBlock = ({
  title, 
  content, 
  buttonLabel, 
  buttonDestination, 
  featuredImage
}) => {
  return (
    <CallToActionBlockWrapper>
      <RichText render={title} />
      <div className="call-content">
        <RichText render={content} />
        <div className="featured-image-wrapper">
          <img src={featuredImage} alt="Featured"/>
        </div>
      </div>
      <Button>
        <Link to={buttonDestination}>
          {buttonLabel}
        </Link>
      </Button>
    </CallToActionBlockWrapper>
  )
}

export default CallToActionBlock
