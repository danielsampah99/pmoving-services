'use client'

import { motion } from "motion/react"
import { Truck, ClipboardList } from "lucide-react";



const MovingSection = () => {


  return (
    <section className="py-16 px-6 md:px-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900"
        >
          Our <span className="text-yellow-500">Mission</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-gray-700"
        >
          Premium Moving Services takes the stress out of moving with expert handling,
          secure packing, and seamless transitions. Whether it's your home or business,
          we guarantee efficiency, safety, and reliability every step of the way.
          Our dedicated team ensures your belongings arrive on time and in perfect condition, giving you peace of mind as you settle into your new space.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 mb-3 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg"
        >
          Learn About Us
        </motion.button>
      </div>

      <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">


        <div className="relative lg:row-span-2 group">
          <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>




          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
              {/* Animated Text */}
              <motion.p
                className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Home Movers
              </motion.p>
              <motion.p
                className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Premium Moving Services is your partner in the homing moving business. Through our experienced staff, you can expect efficiency and quality in all the work completed.
              </motion.p>
            </div>

            {/* Animated Image Container */}
            <motion.div
              className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                <motion.img
                  className="size-full object-cover object-top"
                  src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Truck+loadc-1920w.jpg"
                  alt="Hassle-Free Moving"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </div>
            </motion.div>
          </div>
        </div>


        <div className="relative lg:row-span-2 group">
          <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>

          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
              {/* Animated Text */}
              <motion.p
                className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Office & Commercial Movers
              </motion.p>
              <motion.p
                className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Whether the task at hand is transferring from one office space to another or simply moving furniture and equipment within the same building, Premium Moving Services can assist. Let us do the moving to the new location.
              </motion.p>
            </div>

            {/* Animated Image Container */}
            <motion.div
              className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                <motion.img
                  className="size-full object-cover object-top"
                  src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Target+chairs+assemblyc-1920w.JPG"
                  alt="Hassle-Free Moving"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative lg:row-span-2 group">
          <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>

          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
              {/* Animated Text */}
              <motion.p
                className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Clear Customer Expectations
              </motion.p>
              <motion.p
                className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our staff will be up front with you sharing the Minnesota laws surrounding moving and any other relevant work, as well as being transparent through this entire process ensuring a peace of mind from start to finish.
              </motion.p>
            </div>

            {/* Animated Image Container */}
            <motion.div
              className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                <motion.img
                  className="size-full object-cover object-top"
                  src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/_MG_3094c-1920w.jpg"
                  alt="Hassle-Free Moving"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </div>
            </motion.div>
          </div>
        </div>


      </div>

    </section>
  );
};

export default MovingSection;