import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import { Helmet } from 'react-helmet'

// css
import './Landing.css'
import Slider from '../../components/landing/slider'
import TotalFeatures from '../../components/landing/features/compFeature'
import Banner from '../../components/landing/banner'

export default function Landing() {
  return (
    <div >
      <Banner />
      <Slider />
      <TotalFeatures />

    </div>
  )
}
