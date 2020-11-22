import React from 'react'
import RichText from './richText'
import styled from 'styled-components'

const PriceItemWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  margin: 20px 10px;
  background: ${p => p.priceType === 'Free' ? 'orange' : '#eee'};
  color: ${p => p.priceType === 'Free' ? 'ivory' : 'black'};
  border-radius: 5px;
  position: relative;

  .free {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    background: green;
    color: white;
  }

  h3 {
    padding:15px 15px;
    margin-bottom: 0;
  }

  .price {
    font-size: 2rem;
    margin-bottom: 10px;
    text-align: center;
    padding: 12px;
    background: rgba(0,0,0,0.15)
  }

  p {
    padding: 0 10px;
  }
`

const PriceItem = ({title, price, description, priceType}) => {
  let priceDisplay = price !== null ? `${price}%` : '';
  return (
    <PriceItemWrapper priceType={priceType}>
    {priceType === 'Free' &&
      <div className='free'>
        FREE!
      </div>
    }
      <RichText render={title} />
      {
        priceDisplay ? <div className="price">
          {priceDisplay}
        </div> : ''
        }
        <RichText render={description} />
    </PriceItemWrapper>
  )
}

export default PriceItem
