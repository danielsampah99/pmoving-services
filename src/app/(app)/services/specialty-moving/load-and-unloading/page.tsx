'use client'

import { ServiceLayout } from '@/components/ServiceLayout'
import { OurLocations } from '@/components/OurLocations'
import { RelatedServices } from '@/components/RelatedServices'

const LoadAndUnloadingPage = () => {
  return (
    <div>
      <ServiceLayout
        image="/residential.jpg"
        title="Load and Unloading Services"
        desc="Professional loading and unloading services for your moving needs"
      >
        <div className="px-4 py-8 space-y-8">
          {/* Service Description */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">Professional Loading & Unloading Services</h2>
            <p className="text-gray-600">
              Our specialized loading and unloading services provide expert assistance for all your moving
              needs. Whether you're using a rental truck, storage container, or moving pod, our experienced
              team ensures your belongings are handled with care and precision.
            </p>
          </div>

          {/* Service Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">Loading Services</h3>
              <p className="text-gray-600">
                Our team expertly loads your items using proper techniques and equipment, maximizing space
                efficiency while ensuring the safety of your belongings during transport.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">Unloading Services</h3>
              <p className="text-gray-600">
                We carefully unload your items and can place them in their designated locations within your
                new space, making your move-in process smooth and efficient.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Loading & Unloading Service</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Trained professionals with proper equipment</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Efficient space utilization and organization</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Safe handling of all items, including fragile goods</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Flexible scheduling to meet your timeline</span>
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

export default LoadAndUnloadingPage