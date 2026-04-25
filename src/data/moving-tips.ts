import type { FAQType } from "@/app/(app)/services/local-moving/residential-movers/faq";
import type { Expectation } from "@/app/(app)/services/local-moving/residential-movers/moving-process";
import { BoxesIcon } from "@/components/icons/boxes-icon";
import type { FlatIcon } from "@/components/icons/flaticon";
import { HouseIcon } from "@/components/icons/house-icon";
import { PackagingIcon } from "@/components/icons/packaging-icon";
import { PlanningIcon } from "@/components/icons/planning-icon";

export type MovingTip = {
	id: number;
	name: string;
	description: string;
	icon: FlatIcon;
};

export const movingTips: MovingTip[] = [
	{
		id: 1,
		name: "Planning & Preparation",
		icon: PlanningIcon,
		description:
			"Develop a week-by-week moving timeline. Systematically evaluate each room to identify items to retain or discard. Consider organizing a garage sale or donating gently-used items. Create a secure transportation plan for high-value possessions such as jewelry and important documents.",
	},
	{
		id: 2,
		name: "Get Packing Supplies",
		icon: PackagingIcon,
		description:
			"Acquire appropriate packing containers in various dimensions (small, medium, large, and wardrobe). Invest in specialty boxes designed for fragile items such as dishware, electronics, important files, and artwork. Ensure sufficient quantities of packing tape, protective wrapping materials, and specialized covers for mattresses.",
	},
	{
		id: 3,
		name: "Boxing It All Up",
		icon: BoxesIcon,
		description:
			"Execute packing with meticulous attention to detail. Clearly label all containers with contents and destination room. Strategically distribute weight by placing dense items like books, tools, and canned goods in smaller boxes. Utilize medium boxes for household items of moderate weight. Reserve large boxes for lightweight, voluminous items such as bedding, lampshades, and soft furnishings.",
	},
	{
		id: 4,
		name: "Unloading",
		icon: HouseIcon,
		description:
			"Maintain on-site presence or designate a representative to provide direction to moving personnel. Conduct pre-move and post-move inspections with the moving team. Establish predetermined locations for substantial furniture pieces. Upon completion of unloading, perform a comprehensive final inspection to verify all items have been properly delivered and are damage-free.",
	},
];

export const internationalMovingProcess = [
	{
		title: "Initial Consultation",
		description: "Free assessment of your moving needs and detailed quote",
	},
	{
		title: "Custom Planning",
		description: "Tailored moving strategy and timeline creation",
	},
	{
		title: "Packing & Documentation",
		description: "Professional packing and paperwork preparation",
	},
	{
		title: "International Transport",
		description: "Secure shipping and real-time tracking",
	},
	{
		title: "Destination Services",
		description: "Customs clearance and delivery to your new home",
	},
];

export const residentialExpectations: Expectation[] = [
	{
		id: 1,
		description: "Convenience to work around your schedule",
	},
	{
		id: 2,
		description:
			"Safety, efficiency, and respect for those in your current and new community",
	},
	{
		id: 3,
		description:
			"Experienced and trained movers that can adapt to any situation",
	},
	{
		id: 4,
		description: "Packing and unpacking services",
	},
	{
		id: 5,
		description: "Courteous, friendly, and professional service",
	},
];

export const frequentQuestions: FAQType[] = [
	{
		question: "Get Started Early",
		answer: "Don't let procrastination win. Get an early start, sometimes planning a month in advance can assure a smooth transition and make your entire moving experience more enjoyable. Don’t wait until the last minute to start planning for moving day.",
	},
	{
		question: "Purge Purge Purge",
		answer: "Decluttering before your move can save time and effort. Get rid of unnecessary items and only pack what you truly need.",
	},
	{
		question: "Round Up All Good Boxes",
		answer: "Having sturdy and well-sized boxes can make a big difference in organizing your move efficiently. Label them properly for easy unpacking.",
	},
];

export const longDistanceQuestions: FAQType[] = [
	{
		question: "What is the cheapest long-distance moving option?",
		answer: "DIY options appear cheaper upfront but often cost more in fuel, time, lodging, and risk. Hiring professionals provides better value and protection.",
	},
	{
		question: "What is the average cost of a long-distance move?",
		answer: "Most interstate moves range between $3,000–$9,000 depending on size, distance, and services requested.",
	},
	{
		question: "Is it cheaper to use pods or a moving company?",
		answer: "Pods may cost less for small moves, but for full households, professional movers offer better protection and efficiency.",
	},
	{
		question: "What is the best way to move long-distance?",
		answer: "A full-service professional move with packing, transport, and delivery coordination is the safest and most efficient method.",
	},
	{
		question: "How to get a free quote for long distance moving services?",
		answer: "Simply reach out to our team for a virtual or in-home estimate tailored to your inventory.",
	},
	{
		question: "Cost of professional moving services?",
		answer: "Pricing is based on distance, weight, packing level, and access. We provide transparent written estimates.",
	},
	{
		question: "What is the average cost of long distance moving per mile?",
		answer: "Costs typically range from $0.50 to $0.90 per pound depending on mileage and services.",
	},
	{
		question: "How to pack for a cross country move?",
		answer: "Use heavy-duty boxes, proper padding, and strategic labeling — or let professionals handle it to prevent damage.",
	},
	{
		question: "Long distance moving companies that offer packing and unpacking?",
		answer: "Premium Moving Services offers full packing, unpacking, and setup at destination.",
	}
];

export const antiqueMovingQuestions: FAQType[] = [
	{
		question:
			"How do you protect valuable antiques during the moving process?",
		answer: "We use specialized packing materials including acid-free paper, custom crating, premium furniture blankets, and high-density foam cushioning. Each antique is individually wrapped and secured with particular attention to fragile components. For extremely valuable or delicate items, we create custom wooden crates with interior foam padding shaped specifically to your piece.",
	},
	{
		question: "Do you provide insurance coverage for antique items?",
		answer: "Yes, we offer comprehensive insurance options for antique moves. While our standard coverage provides basic protection, we recommend our specialized antique valuation coverage for valuable pieces. This requires professional appraisal documentation, but ensures full replacement value protection. We're happy to discuss these options in detail during your pre-move consultation.",
	},
	{
		question: "What experience do your movers have with handling antiques?",
		answer: "Our antique moving specialists undergo extensive training in proper handling techniques for period furniture, artwork, and collectibles. Many have 10+ years of experience specifically with high-value and museum-quality pieces. We also maintain relationships with restoration specialists and conservators who advise on best practices for particularly challenging or unique items.",
	},
	{
		question:
			"Can you disassemble and reassemble complex antique furniture?",
		answer: "Absolutely. Our team is skilled in the careful disassembly of antique furniture, including documenting each component with photos and labels. We use appropriate tools and techniques that respect original construction methods. Upon delivery, the same specialists who disassembled your piece will handle reassembly, ensuring every detail is properly restored to its original condition.",
	},
	{
		question:
			"How do you handle climate control concerns for sensitive antiques?",
		answer: "For items sensitive to temperature and humidity changes, we offer climate-controlled vehicles and can arrange for specialized transportation. We carefully plan move timing to avoid extreme weather conditions, and can provide temporary climate-controlled storage if needed. For particularly sensitive items like antique musical instruments or certain wood finishes, we coordinate with specialists to determine the optimal moving conditions.",
	},
	{
		question:
			"Do you provide appraisal services for antique items before moving?",
		answer: "While we don't provide appraisals directly, we maintain partnerships with certified antique appraisers who can document the value of your collection before moving. This is highly recommended for insurance purposes. We can coordinate these services as part of your moving package, ensuring all documentation is properly prepared for both insurance coverage and potential customs requirements for interstate or international moves.",
	},
];

export const seniorRelocationFAQs: FAQType[] = [
	{
		question:
			"What specialized services do you offer for senior relocations?",
		answer: "Our senior relocation services include personalized planning, downsizing assistance, careful packing of sentimental items, coordination with retirement communities or care facilities, setup of essential items in the new home, and a slower-paced moving process tailored to accommodate seniors' needs and comfort levels.",
	},
	{
		question: "How do you help seniors with downsizing decisions?",
		answer: "We provide compassionate downsizing assistance by working alongside seniors and their families to sort through belongings, identify which items to keep, donate, sell, or pass to family members. Our experienced team offers gentle guidance while respecting emotional attachments to possessions and ensuring seniors maintain control throughout the process.",
	},
	{
		question:
			"Do you coordinate with retirement communities and care facilities?",
		answer: "Yes, we have extensive experience working with retirement communities and care facilities. We coordinate moving dates and times according to their specific requirements, understand their space limitations, and ensure all paperwork and move-in procedures are followed correctly to make the transition as smooth as possible.",
	},
	{
		question: "How do you handle medical equipment during a senior move?",
		answer: "Medical equipment receives special attention during senior relocations. Our team is trained in the proper handling, disassembly, transportation, and reassembly of medical equipment such as hospital beds, mobility aids, and oxygen concentrators. We prioritize setting up this equipment first at the new location to ensure immediate accessibility.",
	},
	{
		question:
			"Can you help set up the new home to be safe and comfortable?",
		answer: "Absolutely. We offer complete setup services including furniture arrangement with accessibility in mind, unpacking essentials, making beds, hanging clothes, setting up the kitchen, and installing basic safety features. We can even arrange items similarly to the previous home to help seniors adjust more easily to their new surroundings.",
	},
	{
		question: "How do you make the moving day less stressful for seniors?",
		answer: "We reduce moving day stress by assigning dedicated senior move specialists who work at a comfortable pace, provide clear communication throughout the process, offer a quiet space away from the bustle of moving activities, handle all physical aspects of the move, and ensure medications and personal items are easily accessible. Family members can be as involved as needed or desired.",
	},
];

export const laborOnlyFAQs: FAQType[] = [
	{
		question:
			"What exactly is included in your 'labor only' moving service?",
		answer: "Our labor only service provides professional movers to handle the physical aspects of your move while you provide the transportation. We can load your rental truck, POD, or container, rearrange furniture within your home, or unload your vehicle at your destination. This service gives you control over transportation while avoiding the physical strain of moving heavy items.",
	},
	{
		question: "How many movers will you send for a labor only job?",
		answer: "We typically recommend 2-4 movers depending on the size of your move, time constraints, and complexity. For a studio or one-bedroom apartment, 2 movers are usually sufficient. Larger homes or jobs with many heavy items may require 3-4 movers to complete the work efficiently and safely.",
	},
	{
		question:
			"Do I need to provide any equipment for the labor only service?",
		answer: "Our movers bring basic tools for furniture disassembly/reassembly, moving straps, and dollies. If you've arranged for a rental truck or container, you should ensure it has furniture pads/blankets. For specialty items, please let us know in advance so we can bring appropriate equipment.",
	},
	{
		question: "How do you charge for labor only moving services?",
		answer: "We charge an hourly rate based on the number of movers needed for your job. There is typically a minimum hour requirement (usually 2-3 hours). The clock starts when our team arrives at your location and ends when the job is completed. We can provide an estimate of hours based on your specific needs.",
	},
	{
		question: "Can your labor-only movers help with furniture arrangement?",
		answer: "Absolutely! Our movers can help with furniture rearrangement, whether you're redecorating, making room for new furniture, or preparing for home renovations. We can move items within the same room or between different floors of your home.",
	},
	{
		question: "What if I need to reschedule my labor only moving service?",
		answer: "We understand plans can change. Please notify us at least 48 hours in advance to reschedule without penalty. Last-minute cancellations or reschedules may incur a fee. We'll do our best to accommodate your new date and time based on our availability.",
	},
];

export const furnitureMovingFAQs: FAQType[] = [
	{
		question: "How do you protect furniture during a move?",
		answer: "We use a comprehensive system to protect your furniture including furniture blankets, plastic stretch wrap, corrugated corner protectors, and custom crating for high-value pieces. All furniture is properly padded before being loaded, and we use furniture straps to secure items during transport. Our trucks are equipped with air-ride suspension to minimize vibration.",
	},
	{
		question: "Do you disassemble and reassemble furniture?",
		answer: "Yes, we offer complete disassembly and reassembly services for beds, tables, desks, entertainment centers, and other items that require it. Our movers carry basic tools and are trained in proper techniques. We keep all hardware organized in labeled bags to ensure nothing gets lost during the move.",
	},
	{
		question: "Can you move large or unusual furniture pieces?",
		answer: "Absolutely. Our teams are experienced with moving oversized sofas, sectionals, armoires, pianos, pool tables, exercise equipment, and other challenging items. We use specialized equipment like piano boards, appliance dollies, and furniture sliders to move these items safely and efficiently.",
	},
	{
		question: "What about delicate or antique furniture?",
		answer: "We take extra precautions with delicate and antique pieces. These items receive additional padding, custom crating if necessary, and are handled by our most experienced team members. We can also use climate-controlled vehicles for extremely valuable antiques that may be sensitive to temperature or humidity changes.",
	},
	{
		question: "How do you handle furniture placement in my new home?",
		answer: "We'll place furniture exactly where you want it in your new home. Many clients find it helpful to have a basic floor plan or to mark rooms with post-it notes. We're happy to reposition furniture until you're satisfied with the arrangement, and we can make suggestions based on our experience if you're undecided.",
	},
	{
		question:
			"What if my furniture is too large to fit through doorways or stairwells?",
		answer: "Our experienced movers are skilled at navigating tight spaces using techniques like hoisting, partial disassembly, or using alternate entry points such as balconies or windows when necessary and safe. In the rare case that an item truly cannot be moved into your new space, we'll discuss options with you before proceeding.",
	},
];

export const gunSafetyMovingFAQs: FAQType[] = [
	{
		question:
			"How do you ensure the safe transport of firearms during a move?",
		answer: "We follow all federal, state, and local regulations for transporting firearms. All firearms must be unloaded and locked in secure cases separate from ammunition. We require proper documentation of ownership, and our team is trained in proper handling procedures. For added security, we can arrange for firearms to be transported separately with specialized security measures.",
	},
	{
		question: "Can you move gun safes and heavy security equipment?",
		answer: "Yes, we specialize in moving gun safes, security safes, and other heavy security equipment. Our team uses specialized equipment including safe dollies, stair climbers, and lift gates to safely move these extremely heavy items. We have experience with safes from all major manufacturers and in weights exceeding 1,000 pounds.",
	},
	{
		question: "What precautions do you take when moving ammunition?",
		answer: "Ammunition must be packed separately from firearms in manufacturer packaging or ammo boxes. We cannot transport large quantities of ammunition or reloading supplies like gunpowder or primers as these are considered hazardous materials. Please consult with us about specific quantities and types of ammunition before your move.",
	},
	{
		question: "Do I need to provide any documentation for moving firearms?",
		answer: "We require proof of ownership for all firearms being transported. Additionally, you should be aware of the firearms laws in your destination location, as regulations vary by state and locality. If moving across state lines, we recommend consulting with an attorney familiar with firearms laws to ensure compliance.",
	},
	{
		question:
			"How do you protect my privacy when moving firearms and security equipment?",
		answer: "We understand the importance of discretion when moving firearms and security equipment. Our teams use unmarked vehicles when requested, and we never label boxes containing firearms or indicate the presence of weapons or security equipment to outside parties. All staff handling such moves sign confidentiality agreements.",
	},
	{
		question:
			"Can you help with reinstalling a gun safe at my new location?",
		answer: "Yes, we provide complete installation services for gun safes at your new location. This includes positioning the safe according to your specifications, anchoring it to the floor if desired (subject to floor type and building regulations), and ensuring it is level and properly functioning. We can also advise on optimal placement for security and accessibility.",
	},
];

export const loadingUnloadingFAQs: FAQType[] = [
	{
		question: "What does your loading and unloading service include?",
		answer: "Our loading and unloading service includes professional handling of your pre-packed items, strategic loading to maximize space and minimize shifting during transport, careful unloading at your destination, and placement of boxes and furniture in their designated rooms according to your instructions.",
	},
	{
		question:
			"Do I need to be present during the loading and unloading process?",
		answer: "We recommend having someone present who can direct our team regarding furniture placement and special handling instructions. However, with clear written instructions and proper arrangements for access, we can complete the service without your physical presence if necessary.",
	},
	{
		question:
			"How do you ensure the safety of my items during loading and unloading?",
		answer: "Our professionals use industry-standard techniques including furniture padding, stretch wrap, doorway protection, and proper lifting methods. We secure items in the truck using straps, blankets, and strategic loading patterns to prevent shifting. Each team member is trained in proper handling procedures for different types of items.",
	},
	{
		question:
			"Can you handle specialty items during loading and unloading?",
		answer: "Yes, we have experience with specialty items such as pianos, pool tables, artwork, antiques, and large appliances. Please inform us in advance about any specialty items so we can assign team members with appropriate expertise and bring specialized equipment if necessary.",
	},
	{
		question:
			"What if my furniture doesn't fit through doorways or stairwells?",
		answer: "Our experienced movers are skilled at navigating tight spaces. If necessary, we can disassemble and reassemble furniture to fit through narrow doorways or stairwells. In rare cases where an item truly cannot fit, we'll discuss alternative options with you before proceeding.",
	},
	{
		question:
			"How long does the loading and unloading process typically take?",
		answer: "The duration varies based on the volume of items, accessibility of both locations, presence of stairs or elevators, distance items must be carried, and whether any special handling is required. For an average 2-bedroom apartment with good access, loading typically takes 2-3 hours and unloading 1-2 hours.",
	},
];

export const storageFaqs = [
	{
		question: "What works best for small apartments?",
		answer: "Off-site, climate-controlled storage with professional pickup allows apartment residents to maintain livable space without clutter.",
	},
	{
		question: "How do I find reliable storage services near me?",
		answer: "Look for providers like Premium Moving & Storage that offer trained crews, inventory tracking, and secure facilities, not unattended storage units.",
	},
	{
		question: "Can garage items be stored long-term?",
		answer: "Yes. Climate-controlled environments protect tools, bikes, and equipment from temperature changes and moisture damage.",
	},
	{
		question: "Are garage organization systems always the best option?",
		answer: "Not always. Off-site storage can be more flexible and cost-effective, especially for seasonal or temporary needs.",
	},
	{
		question: "Can storage help with walk-in closet organization?",
		answer: "Absolutely. Many clients temporarily store overflow items while reorganizing, then rotate belongings seasonally. Closet storage systems with adjustable shelves and hanging rods can help utilize every inch of wardrobe space for clothes, keeping everything tidy and accessible.",
	},
	{
		question: "How can I organize my entryway to reduce clutter?",
		answer: "Entryway storage solutions like shoe racks, hooks, and baskets help keep the area near the front door organized and functional. These options maximize space and make it easy to store shoes, bags, and other essentials right as you enter your home.",
	},
	{
		question: "What are the best storage solutions for bathrooms?",
		answer: "Space-saving options such as wall-mounted shelves, over-the-toilet cabinets, and under-sink organizers are ideal for bathrooms. These solutions help efficiently organize toiletries, towels, and cleaning supplies, even in small or high-traffic bathroom spaces.",
	},
	{
		question: "How can I create an efficient home office in a small space?",
		answer: "Flexible furniture and layouts are key for offices in small or multi-purpose rooms. Consider desks that fold away, tables that double as workspaces, and storage units that fit under or around existing furniture to maximize your office area.",
	},
	{
		question: "What types of storage furniture are most effective?",
		answer: "Multipurpose furniture such as flip-top upholstered storage benches, beds with built-in storage, and tables that double as workspaces can help keep belongings hidden yet within reach. These pieces are especially useful in small spaces where every item needs to serve more than one function.",
	},
	{
		question: "How can I organize books and decor efficiently?",
		answer: "Bookshelves serve as both storage and decorative elements, allowing you to display items while keeping them organized and accessible.",
	},
	{
		question: "What should I know about shopping for storage solutions?",
		answer: "Online shops offer the convenience of browsing and making purchases from home, with delivery right to your front door. Many retailers provide flexible payment options, including credit cards and installment plans, making it easier to acquire the storage products you need.",
	},
	{
		question: "How do I maximize bedroom storage?",
		answer: "Under-bed storage solutions are perfect for keeping clothes and linens organized and out of sight, making the most of available space in bedrooms and dorm rooms.",
	},
];

export const logisticsFAQs: FAQType[] = [
	{
		question: "What types of logistics services do you offer?",
		answer: "We provide a comprehensive suite of logistics solutions, including freight forwarding (air, sea, and land), warehousing and distribution, supply chain management, customs brokerage, and specialized transport services.",
	},
	{
		question: "What is freight forwarding?",
		answer: "Freight forwarding involves arranging the transportation of goods on behalf of shippers.  We handle everything from booking cargo space to coordinating customs clearance and delivery to the final destination, utilizing various modes of transport (air, sea, road, or rail) depending on speed, cost, and specific requirements.",
	},
	{
		question: "Do you offer international shipping services?",
		answer: "Yes, we specialize in international shipping.  Our team has extensive knowledge of customs regulations, import/export procedures, and international trade laws, ensuring your goods move smoothly across borders. We handle all necessary documentation, duties, and taxes on your behalf.",
	},
	{
		question: "What is supply chain management?",
		answer: "Supply chain management is the oversight of materials, information, and finances as they move from supplier to manufacturer to wholesaler to retailer to consumer. We can help you optimize your supply chain for efficiency, cost-effectiveness, and resilience, improving visibility and minimizing disruptions.",
	},
	{
		question: "Do you offer warehousing and distribution services?",
		answer: "Yes, we offer secure warehousing and efficient distribution services. Our warehouses are equipped with advanced inventory management systems, ensuring accurate tracking and timely delivery of your goods. We can handle order fulfillment, pick and pack, and cross-docking operations.",
	},
	{
		question: "How do you handle customs brokerage?",
		answer: "Our experienced customs brokers navigate the complexities of customs regulations to ensure your shipments clear customs quickly and efficiently. We prepare and submit all necessary documentation, calculate duties and taxes, and represent you with customs authorities.",
	},
	{
		question: "How can I get a quote for your logistics services?",
		answer: "You can easily request a quote through our website or by contacting our sales team directly.  Please provide details about the type of goods you're shipping, origin and destination locations, dimensions and weight, and any special requirements. We'll provide a customized quote tailored to your specific needs.",
	},
	{
		question: "How do you ensure the safety and security of my cargo?",
		answer: "We prioritize the safety and security of your cargo. We use reputable carriers, implement robust security protocols, and offer cargo insurance options to protect against loss or damage during transit. We also utilize GPS tracking to monitor the location of your shipments in real-time.",
	},
	{
		question: "What types of cargo can you handle?",
		answer: "We can handle a wide range of cargo, including general merchandise, electronics, machinery, food products, hazardous materials (subject to regulations), and oversized or heavy items. Please contact us to discuss your specific cargo requirements.",
	},
	{
		question: "What are your payment terms?",
		answer: "Our payment terms vary depending on the type of service and the volume of business. We typically offer net terms for established customers and require prepayment for new clients or smaller shipments. We accept various payment methods, including wire transfer, credit card, and ACH.",
	},
	{
		question: "How do I track my shipment?",
		answer: "We provide online tracking tools that allow you to monitor the status of your shipment in real-time. You'll receive a tracking number when your shipment is dispatched, which you can use to track its progress on our website or through our mobile app.",
	},
	{
		question: "What happens if my shipment is delayed or damaged?",
		answer: "In the event of a delay or damage to your shipment, we'll work diligently to resolve the issue as quickly as possible. We'll investigate the cause of the problem, communicate with the relevant parties, and provide you with updates throughout the process. We also offer cargo insurance options to protect against financial loss due to damage or loss.",
	},
];

export const pianoMovingFAQs: FAQType[] = [
	{
		question: "Do you have experience moving pianos?",
		answer: "Yes, we specialize in piano moving! Our team has extensive experience handling all types of pianos, including uprights, grands, baby grands, and organs. We understand the unique challenges and requirements of piano transport.",
	},
	{
		question: "How do you protect my piano during the move?",
		answer: "We use specialized equipment and techniques to protect your piano. This includes heavy-duty padding, piano boards, straps, and sometimes custom crating for valuable or delicate instruments. Our movers are trained in proper lifting and handling procedures to prevent damage.",
	},
	{
		question: "Will you disassemble and reassemble my piano?",
		answer: "We typically don't fully disassemble pianos unless absolutely necessary for transport due to space constraints. For grand pianos, we will carefully remove the legs and pack them separately. Upon arrival, we will reassemble the piano legs and ensure it's properly positioned.",
	},
	{
		question: "Is your company insured for piano moving?",
		answer: "Yes, we are fully insured, including coverage for piano moving. This protects you in the unlikely event of damage during the move. We can provide proof of insurance upon request.",
	},
	{
		question: "How much does it cost to move a piano?",
		answer: "The cost of moving a piano depends on several factors, including the type of piano, the distance of the move, the presence of stairs or other obstacles, and any special requirements. Contact us for a free, no-obligation quote. We'll assess your needs and provide an accurate estimate.",
	},
];

export const junkRemovalFAQs: FAQType[] = [
	{
		question: "What kind of junk do you remove?",
		answer: "We remove almost all types of non-hazardous junk, including old furniture, appliances, electronics, yard waste, construction debris, mattresses, and more. If you're unsure if we take something, just ask!",
	},
	{
		question: "How does your junk removal service work?",
		answer: "It's easy! Just contact us for a free estimate. We'll schedule a time to come to your location, assess the junk, and provide you with a firm price. If you agree, we'll remove the junk right then and there. We handle all the loading, hauling, and disposal.",
	},
	{
		question: "How much does junk removal cost?",
		answer: "The cost depends on the volume and type of junk, as well as how much space it takes up in our truck. We offer free, no-obligation estimates so you know the exact price upfront. There are no hidden fees.",
	},
	{
		question: "Do you recycle or donate items?",
		answer: "Yes, we are committed to environmentally responsible disposal. We prioritize recycling and donating usable items to local charities whenever possible. We only take items to the landfill as a last resort.",
	},
	{
		question: "Do I need to be present during the junk removal?",
		answer: "While it's helpful if you're present to point out the items you want removed, it's not always necessary. As long as we have clear instructions and access to the junk, we can complete the job even if you're not there.",
	},
];

export const internationalMovingFAQs: FAQType[] = [
	{
		question: "What is involved in an international move?",
		answer: "An international move is a complex process that involves packing, shipping, customs clearance, and delivery to your new home in another country. We handle all aspects of the move, including pre-move planning, packing, loading, shipping, customs documentation, and unpacking at your destination.",
	},
	{
		question: "How much does an international move cost?",
		answer: "The cost of an international move varies greatly depending on the destination, volume of goods, shipping method (sea or air), and any additional services required. We'll provide a detailed, customized quote based on your specific needs after a free in-home or virtual consultation.",
	},
	{
		question: "How long does an international move take?",
		answer: "The transit time for an international move depends on the destination, shipping method, and customs clearance processes. Sea freight typically takes several weeks to a few months, while air freight is faster but more expensive. We'll provide you with an estimated transit time based on your specific move details.",
	},
	{
		question: "What items can I take with me in an international move?",
		answer: "Most household goods and personal belongings can be shipped internationally. However, there may be restrictions on certain items, such as firearms, hazardous materials, and perishable goods. We'll advise you on any prohibited or restricted items based on the destination country's regulations.",
	},
	{
		question: "What is customs clearance, and how do you handle it?",
		answer: "Customs clearance is the process of obtaining permission from customs authorities to import your goods into another country. We have experienced customs brokers who handle all necessary documentation, duties, and taxes on your behalf to ensure a smooth and efficient customs clearance process.",
	},
	{
		question: "Do I need insurance for my international move?",
		answer: "We highly recommend purchasing insurance for your international move. While we take every precaution to protect your belongings, unforeseen events can occur during transit. Our insurance options provide coverage against loss or damage during shipping.",
	},
	{
		question: "What happens when my goods arrive at the destination?",
		answer: "Upon arrival at the destination port or airport, your goods will undergo customs clearance. Once cleared, they will be delivered to your new home by our local partners. We can also provide unpacking and settling-in services to help you get settled in your new home quickly and easily.",
	},
];

export const specialtyMovingFAQs: FAQType[] = [
	{
		question: "What types of specialty items do you move?",
		answer: "We handle a wide variety of specialty items, including pianos, antiques, artwork, safes, pool tables, hot tubs, laboratory equipment, medical equipment, and oversized furniture.  If you have an item that requires special care and attention, we can likely move it.",
	},
	{
		question: "How do you protect specialty items during a move?",
		answer: "We use specialized packing materials, techniques, and equipment to protect specialty items. This may include custom crating, heavy-duty padding, climate-controlled transport, and the use of specialized dollies and lifting equipment. Our team is trained in proper handling procedures for different types of specialty items.",
	},
	{
		question:
			"Do you have experience moving valuable artwork and antiques?",
		answer: "Yes, we have extensive experience moving valuable artwork and antiques. We understand the unique requirements for handling these delicate items and take extra precautions to ensure their safety. We offer white-glove service, including custom crating, climate-controlled transport, and insurance coverage for high-value items.",
	},
	{
		question: "Can you move a gun safe?",
		answer: "Yes, we are experienced in moving gun safes.  We use specialized equipment, including safe dollies and stair climbers, to safely move these extremely heavy items. We ensure all firearms are handled according to all applicable laws and regulations.",
	},
	{
		question: "Do you offer climate-controlled moving services?",
		answer: "Yes, we offer climate-controlled moving services for items that are sensitive to temperature and humidity changes, such as antiques, artwork, and certain types of electronics. Our climate-controlled vehicles maintain a consistent temperature and humidity level throughout the move.",
	},
];

export const packingFAQs: FAQType[] = [
	{
		question: "How Much Does a Full Packing Service Cost?",
		answer: "The cost depends on several factors including the size of your home or office, number of items, type of materials required, and timeline. We provide clear, upfront pricing with no surprises. Contact us for a free estimate.",
	},
	{
		question: "Is It Worth Paying for Packing Services?",
		answer: "For most people, yes. Professional packing saves time, reduces stress, and protects your belongings. It's especially valuable for busy professionals, families with children, seniors downsizing, and long-distance moves.",
	},
	{
		question: "Do You Offer Eco-Friendly Packing Services?",
		answer: "Yes. Premium Moving Services offers eco-conscious packing options, including recyclable materials and reusable packing solutions. Just let us know your preference when scheduling.",
	},
	{
		question: "What Does a Packing Service Include?",
		answer: "A professional packing service typically includes labor from trained professionals, all necessary packing materials, wrapping and protection of fragile items, organized labeling for efficient unloading, and coordination with your moving schedule.",
	},
];
