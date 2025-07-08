import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/OfferBanner/Offer'
import Collections from '../Components/Collections/Collections'
import Email from '../Components/Email/Email'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <Collections />
      <Email />
    </div>
  )
}

export default Shop