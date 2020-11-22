import React from 'react'
import Hero from './hero'
import CallToActionGrid from './callToActionGrid'
import PriceList from './priceList'

const SliceZone = ({ body, title }) => {
  console.log('body', body);
  return (
    <div>
      {body.map((bodyContent, i) => {
        if (bodyContent.type === 'hero') {
          return <Hero
              backgroundImage={bodyContent.primary.backgroundImage.url} 
              title={bodyContent.primary.hero_title}
              content={bodyContent.primary.hero_content}
              key={i}
            />
        } else if (bodyContent.type === 'call_to_action_grid') {
          return (
            <CallToActionGrid 
              key={i}
              title={bodyContent.primary.section_title}
              callToActions={bodyContent.fields}
            />
          );
        } else if (bodyContent.type === 'price_list') {
          return (
            <PriceList
              key={i}
              title={bodyContent.primary.title}
              prices={bodyContent.fields}
            />
          )
        } else {
          return null;
        }
      })}
    </div>
  )
}

export default SliceZone
