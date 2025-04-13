import HeroSection from '@/app/my-route/components/HeroSection'
import React from 'react'
import LocalServiceDetails from '../../../my-route/components/LocalServiceDetails'
import RelatedServices from '@/app/my-route/components/RelatedServices'

const LocalMoving = () => {
  return (
    <div>
       <HeroSection />
       <LocalServiceDetails/>
       <RelatedServices/>
    </div>
  )
}

export default LocalMoving