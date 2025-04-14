export type ReviewType = {
	average: number;
	totalCount: number;
	counts: Rating[];
	featured: Reviewer[];
};

export type Rating = {
	rating: number;
	count: number;
};

export type Reviewer = {
	id: number;
	rating: number;
	content: string;
	author: string;
	avatarSrc: string;
};

export const reviews: ReviewType = {
	average: 5.0,
	totalCount: 53,
	counts: [
		{ rating: 5, count: 53 },
		{ rating: 4, count: 0 },
		{ rating: 3, count: 0 },
		{ rating: 2, count: 0 },
		{ rating: 1, count: 0 },
	],
	featured: [
		{
			id: 1,
			rating: 5,
			content:
				"Dan, Zach and Maurice were a great crew. Had to move a relative from a large apartment to a studio in assisted living. In the process we had to make a stop at a storage facility to unload 3/4 of her possessions. The guys worked as a great team to get all of the boxes, totes and furniture into a space that was likely smaller than it should have been. Maurice had a plan and all three worked in unison to pack the unit with room to spare, which was of great benefit to the owner to not have to rent a larger unit. The crew continued on to the final location and placed what was needed to set up the room for the night. They were a great crew and easy to work with. Couldn’t have asked for a more successful move, thanks to Premium Moving and the crew of Dan, Zach and Maurice.",
			author: "Dean Anderson",
			avatarSrc: "https://i.pravatar.cc/150?img=1",
		},
		{
			id: 2,
			rating: 5,
			content:
				"I had a wonderful experience with the Premium Moving Services crew. They were very on time, friendly, professional and took exceptionally great care of my belongings. I would highly recommend their services for your next move.",
			author: "Jacqueline Carter",
			avatarSrc: "https://i.pravatar.cc/150?img=2",
		},
		{
			id: 3,
			rating: 5,
			content:
				"Maurice, Zach & Dan did a wonderful job helping me move from one apartment to the next!!! They all three were very kind, helpful and supportive to me and my needs and making sure I got moved and situated!! They also helped put furniture back together that had to be taken down to transport!! I really appreciate the kindness from these nice men!! Thank you for your service!! Your company to me is awesome and your movers especially were awesome!! I recommend these three guys working together and helping ones that need help to move who cannot move themselves from one place to another!! It took most the day to move and not a complaint from them!!! Thank you so much again for your support and help I greatly appreciate it so much!!",
			author: "Elizabeth Bourke",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 4,
			rating: 5,
			content:
				"My moving crew from Premium Moving & Storage was on time and they were professional and hardworking. I really appreciate the care they took of my belongings.The moving cost was very affordable as well. I highly recommend them.",
			author: "Raul M",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 5,
			rating: 5,
			content:
				"Handle my move well! Very attentive to detail with how they packed my personal most valuable belongings. They took care of me! 10 out of 10 service!",
			author: "Jamal Bodom",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},

		{
			id: 6,
			rating: 5,
			content:
				"Amazing service! The movers were quick, efficient and very nice.",
			author: "Destiny Brown",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 7,
			rating: 5,
			content:
				"I choose Premium Moving Services to remove old cubicles and desks from our office because of the great reviews they received. I now understand why they received great ratings. I was impressed that I could make a phone call and set up the project. I spoke with Chester who was great to work with. Daniel and Dan did the onsite work. Daniel called me a couple times to keep me informed of their arrival. They did excellent work and were very personable. I would highly commend their work.",
			author: "Brian Eaton",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 8,
			rating: 5,
			content:
				"Premium Moving Services was outstanding and I’m so grateful to have had Dan and Jonathan. They were extremely polite, professional, and incredibly accommodating. They went well beyond what I thought was a baseline level of service, and I am very glad we chose this company to help us with our move!",
			author: "John Bissonette",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 9,
			rating: 5,
			content:
				"Had a great experience! Dan and Daniel were my movers, and they were both fantastic. They were professional, efficient, and handled everything with care. The entire process was smooth, from the initial booking to the final delivery. Highly recommend them for anyone looking for reliable movers!",
			author: "Sadik Bouari",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 10,
			rating: 5,
			content:
				"Very happy , I was in a bind where I needed packing and moving services ASAP and everyone went above and beyond getting the job done quickly and efficiently for me.",
			author: "Lori Vickberg",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 11,
			rating: 5,
			content:
				"Premium is so easy to work with from start to finish. I shopped everywhere and these guys called me immediately. I didn’t get a million emails and texts and the price is very fair. They come right out to the house and you know your price same day. On the day of the move our Premium movers were so personable with us while thoughtful and caring with our antiques. And what hard workers! 5 of 5 guys!! Thank you for really promising what you advertised. 👍",
			author: "Kathleen Stedt",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 12,
			rating: 5,
			content:
				"Great experience all around - arrived on time, stayed late when we needed them to. Not all moving companies are made alike - these guys protect woodwork and doorways with blankets, wrap antique items in blankets and plastic wrap - all for our move 10 minutes away. They're legit premium, plus they're nice. Go with these guys, I've used them twice.",
			author: "ANDREW Blaisdell",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 13,
			rating: 5,
			content:
				"Very professional, knows how to make things smooth. We all know how moving is.",
			author: "Zachary Larson",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 14,
			rating: 5,
			content: "",
			author: "Lori Vickberg",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 15,
			rating: 5,
			content:
				"A friend gave me an extremely heavy table that had to be moved from her place to mine. Chester could not have been more efficient and courteous. He kept in contact and arrived and delivered on time. They (his helper) even helped me place it where I finally decided it looked best. My friend who had minimum contact with them called to praise me for finding Premium Movers. I couldn't have been more satisfied.",
			author: "carolyn weaver",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 16,
			rating: 5,
			content:
				"We use Premium Moving Services for labor only to unload a 15 ft U-Haul. It was very easy to book. They call and text ahead of arrival so you know when to expect them. They did a great job!",
			author: "kmelich",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 17,
			rating: 5,
			content:
				"Great moving company, these guys were able to move me last minute when my initial moving company did not show up. I appreciate the reliability and quality service!",
			author: "Khaleem Costal",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 18,
			rating: 5,
			content:
				"The movers were outstanding thank you Chris, Ronnie & Rodney! We really appreciate your outstanding service & attention to detail",
			author: "Braden Thompson",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 19,
			rating: 5,
			content:
				"I have worked with Premium Moving Services previously. I needed their help again. What a Godsend. They are professional, hardworking and courteous. I highly recommended Premium Moving Services!.",
			author: "Shawn Wallington",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 20,
			rating: 5,
			content:
				"Had a very large and heavy safe delivered and carried up multiple flights of stairs. Great communication and hard work!",
			author: "Steven Saari",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 21,
			rating: 5,
			content:
				"The crew moved diligently and swiftly. They were able to schedule me with a very short notice.The gentleman working were very kind and courteous and also threw away an old junk item of mine I didn’t want or have the need for anymore as a courtesy. I was very satisfied with the outcome and would definitely recommend to others that are looking for movers to go with Premium Moving Services!",
			author: "Jamal Bodom",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 22,
			rating: 5,
			content:
				"Chris and Dan are great movers. Thanks for sending me a good crew",
			author: "Ahmed Aden Osman",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 23,
			rating: 5,
			content:
				"Maurice and Nogee were the movers who came to my home. They did an excellent job, not only did they wrap my belongings they padded the door so that there is no damage. They drove everything to the second location and set it up. They were timely, professional and pleasant. I highly recommend Premium Moving services!",
			author: "Ms. Pendelton",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 24,
			rating: 5,
			content:
				"The Premium Moving Services crew was great - on time, worked efficiently, did a great job protecting furniture and other items. They were friendly, communicated well and overall really easy to work with. Definitely exceeded my expectations",
			author: "Ken Higgins",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 25,
			rating: 5,
			content:
				"I had an amazing experience with Premium Moving Services. From the very beginning Chester was very responsive and friendly during the quote process. Fast forward to my move I was told a specific timeframe to expect the movers and then I got a text day of down to the minute of when exactly to expect them. They were right on time! The men that showed up introduced themselves and were super friendly. They took great care of my belongings and went out of there way to protect the larger items. I highly, highly recommend a move with this company. Thank you for making my move seamless.",
			author: "Christopher Scott",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 27,
			rating: 5,
			content:
				"The movers were outstanding thank you Chris, Ronnie & Rodney! We really appreciate your outstanding service and for working your butts off.",
			author: "Braden Thompson",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 28,
			rating: 5,
			content:
				"Can't think of enough positive adjectives to give Premium Moving Services! They were on-time, wrapped & gently moved my sofas and three glass tables, efficiently moved my bedsets, including mattresses and box springs, and did it all within the estimated time period. Nate & Kaden were absolutely amazing - friendly, professional, strong, and amazingly efficient. I would highly recommend Premium Moving Services to anyone considering any kind of move. They were professional from the first phone call (a real person answered!) to the final walk-through. Definitely a 5-star rating!",
			author: "Brenda High",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 29,
			rating: 5,
			content:
				"My fiancé and I used Premium Moving Services a week ago to assist us in moving into our new house. I can’t thank them enough for the great job they did in helping us move. Derek and his crew were on time, polite, and very efficient. They made our move very easy. I highly recommend using Derek and his crew. They will get the job done right.",
			author: "MoSherri Smith",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 31,
			rating: 5,
			content:
				"Greatly recommend this moving company! Fast, efficient, and fantastic services. Doesn’t matter the distance they get the job done right!",
			author: "Zachary Larson",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 32,
			rating: 5,
			content:
				"Premium movers were prompt, courteous, efficient and careful. This was my second move with them. Not cheap but well worth the cost of a good move.",
			author: "Douglas Krueger",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 33,
			rating: 5,
			content:
				"really can't say enough about the fabulous experience we had with this crew! The estimate was easy to complete, Chester was really responsive (and I had a BUNCH of questions!) and helpful, and then the crew arrived and could not have been more impressive! They were not only expert movers - and really careful in prepping and moving all our furniture (they wrapped every furniture piece in blankets and/or plastic) they also offered to move things that I hadn't considered - like ALL of my houseplants -large and small! Then...a mouse snuck into the house (because the door was ajar) and THEY CAUGHT HIM! : ) Truly above and beyond! On top of all that everyone was extremely pleasant and really lovely to work with. Moving is stressful! Premium Moving made it a breeze! Thanks so much!",
			author: "Lindsey Cooper",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 34,
			rating: 5,
			content:
				"These guys were great! This was my first time using a moving service and they made everything super easy! The owner, Chester, was very timely with responding to any questions I had. The 2 movers worked quick and were very professional and friendly. All of my furniture and fragile items were wrapped up to make sure nothing was damaged. They made the process of moving a breeze. I will definitely look to book these guys again in the future!",
			author: "molli dupey",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 35,
			rating: 5,
			content:
				"On short notice I made a contract with Chester who is the owner over the phone! He was easy to understand and ran my card for 600$ Half the estimate price while we were on the phone together! Rodney his truck driver & Forman along with two of his comrades were Fantastic! They were fast & thorough! It was 2 hrs to load & 4 hrs to unload as we moved into a 2nd floor apartment where they had to use the elevator & move all the furniture & boxes down the hall at least 60 yards away! Rodney has been with Chester when they first started over 5 years ago! They were an amazing team & very skilled movers. I bought them lunch but other then this they took no breaks! I needed to use two debit cards to pay the final bill & Chester was flexible & understanding. I would hire Chester & his team over again in a heartbeat.",
			author: "Michael “Mickey” Craig",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 36,
			rating: 5,
			content:
				"The two gentlemen who arrived at my apartment were so friendly. I really enjoyed their help with my move. They told me they would show up between 9am -10am and were in constant contact with me about their arrival time. They handled my furniture with care wrapping each piece and treating my belongings with respect. They made my whole moving process so smooth that I will definitely use them again should I ever need to move again. I highly recommend them to anyone who needs their services & hopefully you'll get the 2 guys I had because they were so friendly.",
			author: "Tara Peterson",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},

		{
			id: 37,
			rating: 5,
			content:
				"I recommend Angel’s home care services to everyone! Great staff, and exceptional care. The care is immaculate, they are caring, compassionate and live up to the company’s name. Thanks for your service:)",
			author: "Keanna Adams",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 38,
			rating: 5,
			content:
				"Chester and his team at Premium Moving Services do a fantastic job at a reasonable price. They’re very professional, personable and easy to work with. I’ve used Premium Moving Services for two local moves, and the customer experience both times was excellent! I will use Premium Moving Services for future moves, and I highly recommend Chester and his team for anyone planning a move. Thank you Chester and the entire team at Premium Moving Services!!",
			author: "Joe Brownrigg",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 39,
			rating: 5,
			content:
				"I hired Premium Moving Services after reading all of the great reviews and I can now personally affirm that this business is PHENOMENAL! Chester and his team were so professional and courteous throughout the day as they worked to move me from my old house to a new one. The care they showed for my personal belongings and people in my home was above my expectations. I highly recommend them to anyone looking for assistance with a move - it’s a great value for a truly premium service!",
			author: "Dionne W",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 40,
			rating: 5,
			content:
				"They say you get what you pay for but premium moving services definitely gave me MORE bang for my bucks! The move was for my daughter who makes everything difficult. Rodney and Jonathan were prompt, professional and polite throughout the entire move. Chester was very responsive throughout the process, from quote to closeout. I will happily refer Premium Moving Services and I have no doubt you will too!",
			author: "Bet McRae",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 41,
			rating: 5,
			content:
				"I was very happy working with Chester and his team. They were on time, professional, personable, and well-priced. I received their information from a friend who also had a good experience with Premium Moving Services. For anyone looking to move, contact these guys!",
			author: "David Dassenko",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 42,
			rating: 5,
			content:
				"Premium Moving did a wonderful job. Chester was prompt with the quote appointment, the guys showed up on time and all introduced themselves, and asked questions along the way to assure everything was going where it was supposed to. They wrapped furniture and took great care of items and walls. Very happy with Chester and his team!",
			author: "Kim Quirk",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 43,
			rating: 5,
			content:
				"3 Guys were a great help! Thankyou again for making moving day less stressful!",
			author: "Winona A",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 44,
			rating: 5,
			content:
				"I had a fantastic experience with Premium Moving Services! The movers were friendly, FAST, and took extreme care while picking up and dropping off. I moved to cross country and it here was not so much as a scratch on anything. The only moving company I’m using from here on out!",
			author: "Miguel Figueiredo",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 45,
			rating: 5,
			content:
				"Thank you for the loving care provided by your agency!! I’ll highly recommend anyone looking for homecare services!! Dependable Angel’s homecare is the way to go!! Thank you again we appreciate the love and compassion you have for our love one!",
			author: "SRT Jones",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 46,
			rating: 5,
			content:
				"I booked my move through another company that contracted Premium Moving for the job. The crew was great. They were professional and a pleasure to work with. All my belongings were handled with care and delivered safely. I highly recommend this company and would book directly with them if I had to do it over again.",
			author: "Jill Bukosky",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 47,
			rating: 5,
			content:
				"I used them to move my business, they brought 2 trucks and a big crew. Professional and friendly, fast moving and safe. They took great care in wrapping my many refrigerators and freezers in moving blankets and then wrapped tape around that to keep it all safe. We had zero damages. Thank you! I would totally use them again.",
			author: "Adam Hoffman",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 48,
			rating: 5,
			content:
				"I have nothing but great things to say about our experience with Premium Moving Services. The boys were incredibly professional and worked really hard to get our move done in less time than we were quoted. I will absolutely be using this company again when our old house sells and the rest of our furniture needs to be brought over. They earned a customer for life.",
			author: "Alison Cromie",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 49,
			rating: 5,
			content:
				"When all other moving companies were trying to charge me my left nut, these guys had the right price. It was still pretty reasonable, they showed up on time, handled my stuff with care, and got it all done in under two hours! They were fast and efficient, they were very helpful, and took care of my furniture which was quite heavy without issue, something that would have taken hours to do if I had done it with a friend or my cousin. I would highly recommend them!",
			author: "David Oyinloye",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 50,
			rating: 5,
			content:
				"These guys were great. Showed up on time. Very professional, and friendly. They made my move super easy!",
			author: "Adam Backes",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 51,
			rating: 5,
			content:
				"Chris and Ronnie are by far the best. On time & are so polite. Great crew",
			author: "Kali Reitmeier",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 52,
			rating: 5,
			content:
				"Excellent communication during the estimating and moving process. The movers were efficient and careful. Nothing damaged or broken. They had some challenges in the building I moved into -- the elevator was NOT a freight elevator but they handled the situation very well. Nice guys, too. I recommend them and if needed, would use them again.",
			author: "Margaret McInerny",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
		{
			id: 53,
			rating: 5,
			content:
				"Chester made me feel extremely comfortable right away in choosing Premium Moving Services. Ronnie and Rodney were the best! They had great attitudes and got the job done fast. I will definitely be using them again for my future moves.",
			author: "Bailey Brown",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
	],
};
