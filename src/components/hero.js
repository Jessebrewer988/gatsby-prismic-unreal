import React from 'react'
import RichText from './richText'
import styled from 'styled-components'

const HeroWrapper = styled.section`
  background: url('${props=> props.backgroundImage}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: calc(100vh - 3rem);
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
  margin-bottom: 20px;

  div {
    max-width: 800px;
    margin: 0 auto;
    background: rgba(0,0,0,0.5);
  }
`

const Hero = ({title, content, backgroundImage}) => {
  return (
    <HeroWrapper backgroundImage={backgroundImage}>
      <div>
        <RichText render={title}/>
        <p>{content}</p>
      </div>
    </HeroWrapper>
  )
}

export default Hero
