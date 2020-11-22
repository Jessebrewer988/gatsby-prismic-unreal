import React from 'react'
import styled from 'styled-components'
import RichText from './richText'

import CallToActionBlock from './callToActionBlock'

const CallToActionGridWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
`

const CallToActionGrid = ({title, callToActions}) => {
  return (
    <CallToActionGridWrapper>
      <RichText render={title}/>
      {callToActions.map((call, i) => {
        return (
          <CallToActionBlock 
            key={i} 
            title={call.call_to_action_title}
            content={call.content}
            buttonLabel={call.button_label}
            buttonDestination={`/${call.button_destination._meta.uid}`}
            featuredImage={call.feature_image.url}
            />
        )
      })}
    </CallToActionGridWrapper>
  )
}

export default CallToActionGrid
