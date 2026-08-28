import { ServiceLayout } from "@/components/ServiceLayout";
import { Info } from "lucide-react";
import React from "react";
import { FAQs } from "../../local-moving/residential-movers/faq";
import { officeMoversFaqs } from "@/data/moving-tips";
import { RequestQuote } from "../../local-moving/residential-movers/request-quote";
import { RelatedServices } from "../related-services";
import { commercialMovingServices } from "@/data/services";
import { OurLocations } from "@/components/OurLocations";
import { ServicesSection } from "@/components/ServicesSection";

const OfficeMovers = () => {
	return (
		<ServiceLayout
			image="/office-moving.webp"
			title="Professional Office Movers in Minnesota"
			desc="Commercial and business relocation services for Minneapolis, St. Paul, and the Twin Cities."
		>
			<div className="py-12 px-4">
				<div className="max-w-7xl mx-auto space-y-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="rounded-lg overflow-hidden p-4 sm:p-6">
							<h1 className="text-4xl font-bold mb-2 sm:mb-4">
								Professional Office Movers in Minnesota
							</h1>
							<p className="text-background text-lg sm:text-xl mb-4 sm:mb-6">
								Trusted commercial movers in the Twin Cities
							</p>
							<div className="relative">
								<img
									className="w-full h-auto rounded-lg object-cover"
									src="/api/media/file/pirnter-office-desk-joined.webp"
									alt="Office Moving Process"
								/>
							</div>
						</div>

						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									What are Office Movers?
								</h2>
							</div>
							<p className="text-background">
								Moving an office is different from moving a household.
								Businesses have employees, workstations, corporate furniture,
								electronics, files, inventory, building requirements, loading
								docks, elevators, and deadlines that all need to be
								coordinated.
							</p>
							<p className="text-gray-700">
								Premium Moving & Storage provides professional office moving
								and commercial relocation services in Minnesota designed to
								minimize business disruption and keep your relocation
								organized.
							</p>
							<p className="text-gray-700">
								Whether you&apos;re searching for office movers in Minneapolis,
								office movers in St. Paul, business movers near you, or a
								commercial moving company serving the greater Twin Cities, our
								experienced team can customize the move around your business,
								building, schedule, and budget.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								Commercial Movers in Minnesota
							</h2>
							<p className="text-gray-700">
								A commercial move requires planning, organization, and
								experienced movers who understand the importance of keeping
								your business operating.
							</p>
							<p className="text-gray-700">
								Our commercial movers in Minnesota work with business owners
								and staffs of different sizes to relocate business furnishings,
								equipment, files, supplies, inventory, fixtures, and other
								commercial assets.
							</p>
							<p className="text-gray-700">
								Commercial moving services can include:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Office relocations</li>
								<li>Business relocations</li>
								<li>Corporate moves</li>
								<li>Office furniture moving</li>
								<li>Cubicle and workstation moving</li>
								<li>Packing and unpacking</li>
								<li>Commercial storage</li>
								<li>Internal office moves</li>
								<li>Warehouse moves</li>
								<li>Retail relocations</li>
								<li>Furniture disassembly and reassembly</li>
								<li>Receiving and delivery</li>
								<li>Long-distance commercial moves</li>
								<li>Multi-phase business relocations</li>
							</ul>
						</div>

						<div className="rounded-lg overflow-hidden h-full">
							<img
								className="w-full h-auto rounded-lg object-cover"
								src="/moving-process.webp"
								alt="Office Moving Process"
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								Office Movers Minneapolis
							</h2>
							<p className="text-gray-700">
								Businesses searching for office movers in Minneapolis need more
								than a truck and a few movers. Downtown buildings, loading
								docks, elevators, parking restrictions, building management
								requirements, and tight schedules can all affect how a company
								relocation is completed.
							</p>
							<p className="text-gray-700">
								Premium Moving & Storage provides organized commercial moving
								solutions for Minneapolis businesses, from small workspaces and
								professional practices to corporate workplaces and larger
								commercial facilities.
							</p>
							<p className="text-gray-700">
								We serve businesses throughout Downtown Minneapolis, North
								Loop, Northeast Minneapolis, Uptown, University/Prospect Park,
								and surrounding commercial districts, including ZIP codes
								55401, 55402, 55403, 55404, 55405, 55408, 55413, 55414, and
								55415.
							</p>

							<h2 className="text-xl md:text-2xl font-bold pt-6">
								Office Movers St. Paul
							</h2>
							<p className="text-gray-700">
								Premium Moving & Storage delivers professional office moving
								services in St. Paul for companies relocating departments,
								furniture, equipment, and commercial contents.
							</p>
							<p className="text-gray-700">
								Whether you&apos;re moving within Downtown St. Paul or
								relocating your business elsewhere in the Twin Cities, our
								commercial moving team can coordinate transportation, furniture
								moving, packing, storage, and final placement.
							</p>
							<p className="text-gray-700">
								We serve Downtown St. Paul, Lowertown, Midway, Highland Park,
								West Seventh, and surrounding business districts, including ZIP
								codes 55101, 55102, 55104, 55105, 55114, and 55116.
							</p>
						</div>

						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									Business Movers Near Me
								</h2>
							</div>
							<p className="text-background">
								When searching for business movers near me, look for a moving
								company that understands commercial moving, not simply a
								residential mover willing to move a few desks.
							</p>
							<p className="text-gray-700">
								Business relocations may involve building access, elevators,
								loading docks, furniture disassembly, employee workstations,
								equipment, files, inventory, temporary storage, and strict
								deadlines.
							</p>
							<p className="text-gray-700">
								Our business movers develop a customized relocation plan based
								on your office size, moving date, destination, equipment,
								furniture, access requirements, and business schedule.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="rounded-lg overflow-hidden h-full">
							<img
								className="w-full h-auto rounded-lg object-cover"
								src="/api/media/file/pirnter-office-desk-joined.webp"
								alt="Corporate Relocation Services"
							/>
						</div>

						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								Corporate Relocation Services
							</h2>
							<p className="text-gray-700">
								Larger corporate relocations require careful coordination
								between management, employees, building representatives,
								vendors, and moving crews.
							</p>
							<p className="text-gray-700">
								Premium Moving & Storage can assist with:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Department-by-department relocations</li>
								<li>Furniture inventories</li>
								<li>Office labeling systems</li>
								<li>Floor-plan coordination</li>
								<li>Employee workstation moves</li>
								<li>Cubicle relocation</li>
								<li>Equipment transportation</li>
								<li>Phased office moves</li>
								<li>Temporary commercial storage</li>
								<li>Scheduled furniture deliveries</li>
								<li>Packing and unpacking</li>
								<li>Internal office moves</li>
							</ul>
							<p className="text-gray-700">
								Planning early allows your business to address building access,
								furniture placement, elevator reservations, loading dock
								scheduling, employee communication, and other logistical issues
								before moving day.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								Small Business Office Movers
							</h2>
							<p className="text-gray-700">
								Small businesses cannot always afford several days of
								unnecessary downtime.
							</p>
							<p className="text-gray-700">
								Our small business office movers help professional practices,
								startups, agencies, retailers, real estate companies, nonprofits,
								and other local businesses create practical relocation plans
								around their operating schedules.
							</p>
							<p className="text-gray-700">
								Whether you&apos;re moving five desks or an entire office
								suite, our team can coordinate the furniture, equipment, boxes,
								transportation, and placement necessary to get you into your new
								workspace efficiently.
							</p>

							<h2 className="text-xl md:text-2xl font-bold pt-6">
								Office Furniture Movers
							</h2>
							<p className="text-gray-700">
								Office furniture can be bulky, modular, heavy, and difficult to
								maneuver through commercial buildings.
							</p>
							<p className="text-gray-700">
								Our office furniture movers can handle:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Executive desks</li>
								<li>Office desks</li>
								<li>Cubicles</li>
								<li>Modular workstations</li>
								<li>Conference tables</li>
								<li>Reception furniture</li>
								<li>Filing cabinets</li>
								<li>Bookshelves</li>
								<li>Storage cabinets</li>
								<li>Office chairs</li>
								<li>Breakroom furniture</li>
								<li>Training room furniture</li>
								<li>Commercial shelving</li>
							</ul>
							<p className="text-gray-700">
								When appropriate, furniture can be disassembled before
								transportation and reassembled at the destination.
							</p>
						</div>

						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									Cubicle Movers &amp; Workstation Relocation
								</h2>
							</div>
							<p className="text-background">
								Cubicles and modular workstations require organization during
								disassembly and transportation so components arrive together and
								can be efficiently placed at the new location.
							</p>
							<p className="text-gray-700">
								Our cubicle movers can assist with moving workstation panels,
								desks, chairs, partitions, filing systems, and related office
								furniture as part of a full company headquarters relocation or
								internal office reconfiguration.
							</p>

							<h2 className="text-xl md:text-2xl font-bold pt-6">
								Office Packing Services
							</h2>
							<p className="text-gray-700">
								Packing an entire office can take employees away from their
								normal responsibilities.
							</p>
							<p className="text-gray-700">
								Our office packing services can include:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Full office packing</li>
								<li>Partial packing</li>
								<li>Workstation packing</li>
								<li>File and document packing</li>
								<li>Office supply packing</li>
								<li>Conference room packing</li>
								<li>Breakroom packing</li>
								<li>Furniture protection</li>
								<li>Box labeling</li>
								<li>Unpacking</li>
								<li>Packing material removal</li>
							</ul>
							<p className="text-gray-700">
								Organizing boxes by employee, department, room, or workstation
								can make unpacking and setup significantly easier at the
								destination.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								Office Equipment &amp; Electronics Movers
							</h2>
							<p className="text-gray-700">
								Computers, printers, monitors, copiers, and other office
								equipment require careful handling during relocation.
							</p>
							<p className="text-gray-700">
								Our movers use professional moving equipment, padded moving
								blankets, shrink wrap, carts, dollies, and protective materials
								to safely transport properly prepared office electronics and
								equipment.
							</p>
							<p className="text-gray-700">
								For servers, network infrastructure, or specialized technology,
								we can coordinate the physical move with your company&apos;s IT
								department or technology provider.
							</p>

							<h2 className="text-xl md:text-2xl font-bold pt-6">
								Internal Office Moving Services
							</h2>
							<p className="text-gray-700">
								Your business doesn&apos;t have to change addresses to need
								professional movers.
							</p>
							<p className="text-gray-700">
								Companies frequently need internal office moving services when:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Expanding departments</li>
								<li>Reconfiguring floor plans</li>
								<li>Moving employees between floors</li>
								<li>Adding or removing workstations</li>
								<li>Replacing office furniture</li>
								<li>Remodeling</li>
								<li>Consolidating departments</li>
								<li>Reorganizing storage areas</li>
							</ul>
							<p className="text-gray-700">
								Our crews will be timely on site to move furniture,
								workstations, files, equipment, and other office contents within
								the same building or commercial campus.
							</p>
						</div>

						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									Commercial Moving &amp; Storage
								</h2>
							</div>
							<p className="text-background">
								Your new office may not always be ready when your current lease
								ends.
							</p>
							<p className="text-gray-700">
								Our commercial moving and storage solutions can help businesses
								during renovations, construction delays, lease transitions,
								downsizing, expansion, or phased relocations.
							</p>
							<p className="text-gray-700">
								Storage may be used for:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Office furniture</li>
								<li>Desks and chairs</li>
								<li>Conference furniture</li>
								<li>Files and boxed contents</li>
								<li>Fixtures</li>
								<li>Surplus equipment</li>
								<li>Seasonal business inventory</li>
								<li>Furniture awaiting installation</li>
								<li>Contents during renovations</li>
							</ul>
							<p className="text-gray-700">
								Premium Moving & Storage can coordinate pickup, storage, and
								final delivery according to your project timeline.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="rounded-lg overflow-hidden h-full">
							<img
								className="w-full h-auto rounded-lg object-cover"
								src="/moving-process.webp"
								alt="Commercial Receiving and Delivery"
							/>
						</div>

						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								Commercial Receiving, Storage &amp; Delivery
							</h2>
							<p className="text-gray-700">
								Not every commercial project involves moving from one office to
								another.
							</p>
							<p className="text-gray-700">
								Premium Moving & Storage can receive series of approved
								furniture and commercial items, coordinate temporary storage,
								and coordinate delivery to the final location when the office or
								property is ready.
							</p>
							<p className="text-gray-700">
								These services can be useful for:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>New office openings</li>
								<li>Office renovations</li>
								<li>Interior designers</li>
								<li>Property managers</li>
								<li>Corporate furniture projects</li>
								<li>Commercial furnishing projects</li>
								<li>Businesses replacing workplace desks and chairs</li>
								<li>Multi-location installations</li>
							</ul>

							<h2 className="text-xl md:text-2xl font-bold pt-6">
								Warehouse Movers
							</h2>
							<p className="text-gray-700">
								Warehouse and industrial moves can involve considerably more
								than desks and chairs.
							</p>
							<p className="text-gray-700">
								Our warehouse movers can assist with approved commercial
								inventory, shelving, boxed products, furniture, office contents,
								and other business assets being relocated between facilities.
							</p>
							<p className="text-gray-700">
								A pre-move walkthrough helps determine the appropriate crew,
								trucks, moving equipment, access requirements, and project
								timeline.
							</p>

							<h2 className="text-xl md:text-2xl font-bold pt-6">
								Retail &amp; Commercial Business Movers
							</h2>
							<p className="text-gray-700">
								Retail businesses and customer-facing companies often need
								relocations completed quickly so they can reopen and continue
								serving customers.
							</p>
							<p className="text-gray-700">
								Our commercial business movers can relocate displays,
								furniture, boxed inventory, shelving, office contents,
								fixtures, and other approved business assets while coordinating
								the move around your operational needs.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								Medical &amp; Professional Office Movers
							</h2>
							<p className="text-gray-700">
								Different businesses have different relocation requirements.
							</p>
							<p className="text-gray-700">
								Premium Moving & Storage delivers moving services for:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Medical offices</li>
								<li>Dental offices</li>
								<li>Law firms</li>
								<li>Accounting firms</li>
								<li>Insurance agencies</li>
								<li>Financial offices</li>
								<li>Real estate companies</li>
								<li>Property management companies</li>
								<li>Consulting firms</li>
								<li>Nonprofit organizations</li>
								<li>Educational offices</li>
								<li>Administrative offices</li>
							</ul>
							<p className="text-gray-700">
								Specialized medical, laboratory, or regulated equipment may
								require coordination with an appropriate specialty provider.
							</p>

							<h2 className="text-xl md:text-2xl font-bold pt-6">
								After-Hours &amp; Weekend Office Movers
							</h2>
							<p className="text-gray-700">
								For many businesses, minimizing downtime is one of the biggest
								priorities during relocation.
							</p>
							<p className="text-gray-700">
								Depending on scheduling and availability, office moves may be
								coordinated during evenings, weekends, or other lower-traffic
								periods.
							</p>
							<p className="text-gray-700">
								After-hours commercial moving can be especially useful for
								professional offices, retailers, corporate facilities, and
								customer-facing businesses that need to remain operational
								during normal weekday hours.
							</p>
						</div>

						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									Long-Distance Commercial Movers
								</h2>
							</div>
							<p className="text-background">
								Moving your company outside the Twin Cities requires additional
								transportation and scheduling coordination.
							</p>
							<p className="text-gray-700">
								Our long-distance commercial movers can relocate office
								furniture, equipment, workstations, boxed contents, and other
								approved business assets from Minnesota to destinations
								throughout the Midwest and across the country.
							</p>

							<h2 className="text-xl md:text-2xl font-bold pt-6">
								Twin Cities Commercial Movers
							</h2>
							<p className="text-gray-700">
								Premium Moving & Storage handles Twin Cities commercial moving
								services throughout Minneapolis, St. Paul, and surrounding
								Minnesota communities.
							</p>
							<p className="text-gray-700">
								We serve downtown office buildings, suburban corporate campsuses,
								neighborhood professional offices, retail centers, warehouses,
								industrial properties, and commercial business parks all
								seasons.
							</p>
							<p className="text-gray-700">
								Popular commercial moving areas include Minneapolis (55401,
								55402, 55403, 55404, 55405, 55408, 55413, 55414, 55415),
								St. Paul (55101, 55102, 55104, 55105, 55114, 55116),
								Bloomington, Edina, Minnetonka, Maple Grove, Plymouth, Eagan,
								Woodbury, Lakeville, and surrounding communities.
							</p>
							<p className="text-gray-700">
								We also serve Apple Valley, Savage, Prior Lake, Chaska,
								Chanhassen, Cottage Grove, Oakdale, Inver Grove Heights,
								Mendota Heights, South St. Paul, Blaine, Coon Rapids, Anoka,
								Champlin, Fridley, New Brighton, Shoreview, Vadnais Heights,
								Stillwater, Hastings, Farmington, Rosemount, Otsego,
								Albertville, and St. Michael.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								Industries Our Commercial Movers Serve
							</h2>
							<p className="text-gray-700">
								Our commercial relocation services can be customized for
								businesses across many industries, including:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Corporate offices</li>
								<li>Small businesses</li>
								<li>Law firms</li>
								<li>Accounting firms</li>
								<li>Financial companies</li>
								<li>Insurance agencies</li>
								<li>Real estate companies</li>
								<li>Property management companies</li>
								<li>Medical and dental offices</li>
								<li>Nonprofit organizations</li>
								<li>Retail businesses</li>
								<li>Technology companies</li>
								<li>Educational organizations</li>
								<li>Warehouses</li>
								<li>Professional service firms</li>
								<li>Senior living organizations</li>
								<li>Administrative offices</li>
							</ul>
						</div>

						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									How Much Do Office Movers Cost in Minnesota?
								</h2>
							</div>
							<p className="text-background">
								Office moving costs in Minnesota depend on office size,
								furniture, equipment, crew requirements, packing, distance,
								building access, storage, and relocation complexity.
							</p>
							<p className="text-gray-700">
								A small office with several desks and employees may require only
								a small moving crew and truck, while a corporate relocation
								involving dozens of workstations, multiple floors, elevators,
								packing, and temporary storage requires significantly more
								labor and planning.
							</p>
							<p className="text-gray-700">
								Factors that can affect office moving costs include:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Number of employees</li>
								<li>Number of workstations</li>
								<li>Amount of furniture</li>
								<li>Moving distance</li>
								<li>Crew size</li>
								<li>Building access</li>
								<li>Elevators</li>
								<li>Loading docks</li>
								<li>Packing requirements</li>
								<li>Furniture disassembly</li>
								<li>Storage</li>
								<li>Specialty equipment</li>
								<li>After-hours scheduling</li>
							</ul>
							<p className="text-gray-700">
								The best way to determine your actual cost is to request a
								customized commercial moving estimate based on your specific
								relocation.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="rounded-lg overflow-hidden h-full">
							<img
								className="w-full h-auto rounded-lg object-cover"
								src="/api/media/file/pirnter-office-desk-joined.webp"
								alt="Office Moving Planning"
							/>
						</div>

						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								How Far in Advance Should You Book Office Movers?
							</h2>
							<p className="text-gray-700">
								Smaller business relocations may only require a few weeks of
								preparation, while larger corporate moves should typically
								begin planning much earlier.
							</p>
							<p className="text-gray-700">
								Starting early provides time to coordinate:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Building management</li>
								<li>Employee communication</li>
								<li>Furniture inventories</li>
								<li>Floor plans</li>
								<li>Loading docks</li>
								<li>Elevator reservations</li>
								<li>Parking</li>
								<li>Packing</li>
								<li>IT vendors</li>
								<li>Storage</li>
								<li>Moving crews</li>
								<li>Delivery schedules</li>
							</ul>
							<p className="text-gray-700">
								The more complex the relocation, the more valuable early
								planning becomes.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									Get a Commercial Moving Quote
								</h2>
							</div>
							<p className="text-background">
								Whether you&apos;re searching for office movers Minneapolis,
								office movers St. Paul, commercial movers Minnesota, business
								movers near me, corporate relocation services, office furniture
								movers, cubicle movers, office packing services, commercial
								moving and storage, warehouse movers, or dependable Twin Cities
								commercial movers, Premium Moving & Storage can develop a
								relocation plan around your business.
							</p>
							<p className="text-gray-700">
								We provide moving solutions for small businesses, professional
								offices, corporate facilities, warehouses, retailers, and
								organizations throughout the Twin Cities and surrounding
								Minnesota communities.
							</p>
							<p className="text-gray-700">
								From the initial walkthrough and planning process to moving day,
								furniture placement, and storage, our goal is simple: move your
								business efficiently while minimizing unnecessary downtime.
							</p>
							<p className="text-gray-700 font-semibold">
								Contact Premium Moving & Storage today to schedule a commercial
								moving consultation and receive a customized office relocation
								quote.
							</p>
						</div>
					</div>
				</div>
			</div>
			<RelatedServices services={commercialMovingServices} />
			<RequestQuote />
			<FAQs
				faqs={officeMoversFaqs}
				title="Frequently Asked Questions About Office Moving"
			/>
			<ServicesSection />
			<OurLocations />
		</ServiceLayout>
	);
};

export default OfficeMovers;
