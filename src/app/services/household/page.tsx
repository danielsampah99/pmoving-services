import ServiceLayout from '@/components/ServiceLayout'
import React from 'react'

const HouseHoldMoving = () => {
    return (
        <ServiceLayout
            image='' // Pass `null` instead of an empty string to explicitly indicate no image
            title="Household Moving"
            desc="We provide top-quality household moving services, ensuring your belongings are safely transported to your new home."
        >
            <p className="text-lg text-gray-700">
                Our experienced team ensures a hassle-free moving experience, from packing to unloading. Contact us for more details.
            </p>
        </ServiceLayout>
    )
}

export default HouseHoldMoving;
