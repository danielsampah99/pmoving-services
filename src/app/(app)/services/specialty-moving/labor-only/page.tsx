'use client'

import { ServiceLayout } from '@/components/ServiceLayout'
import { OurLocations } from '@/components/OurLocations'
import { RelatedServices } from '@/components/RelatedServices'

const LaborOnlyMovingPage = () => {
  return (
    <div>
      <ServiceLayout
        image="/residential.jpg"
        title="Labor Only Moving Services"
        desc="Professional moving labor assistance for loading, unloading, and in-house moving needs"
      >
        <div className="px-4 py-8 space-y-8">
          {/* Service Description */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">Expert Moving Labor Assistance</h2>
            <p className="text-gray-600">
              Our labor-only moving service provides professional moving help without the truck. Perfect for
              customers who have their own rental truck or container and need experienced movers to do the
              heavy lifting, loading, and unloading.
            </p>
          </div>

          {/* Service Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">Loading & Unloading</h3>
              <p className="text-gray-600">
                Our trained professionals will carefully load or unload your rental truck, POD, or storage
                container with maximum efficiency and care for your belongings.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">In-House Moving</h3>
              <p className="text-gray-600">
                Need help moving furniture within your home? Our team can assist with rearranging furniture,
                moving heavy items between floors, or setting up new rooms.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Labor Service</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Experienced and trained moving professionals</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Flexible scheduling to meet your needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Proper equipment and tools for safe moving</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Fully insured and background-checked movers</span>
              </li>
            </ul>
          </div>
        </div>
      </ServiceLayout>
      <RelatedServices />
      <OurLocations />
    </div>
  )
}

export default LaborOnlyMovingPage