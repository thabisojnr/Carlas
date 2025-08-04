export const mockData = {
  programs: {
    usa: [
      {
        location: "California",
        description: "Experience the Golden State with host families in sunny California. Perfect beaches, vibrant cities, and endless opportunities.",
        duration: "12 months",
        color: "purple",
        features: [
          "J-1 Visa Support",
          "Monthly stipend $195.75/week",
          "Room & board included",
          "Educational component"
        ]
      },
      {
        location: "New York",
        description: "Live in the city that never sleeps. Experience Broadway, Central Park, and the diverse culture of New York.",
        duration: "12-24 months",
        color: "blue",
        features: [
          "Premium placement areas",
          "Cultural activities included",
          "Weekend trips to landmarks",
          "Language exchange program"
        ]
      },
      {
        location: "Florida",
        description: "Enjoy year-round sunshine while caring for children in family-friendly Florida communities.",
        duration: "12 months",
        color: "orange",
        features: [
          "Beach access communities",
          "Theme park proximity",
          "Warm weather year-round",
          "Strong au pair network"
        ]
      }
    ],
    europe: [
      {
        location: "London, UK",
        description: "Experience British culture in one of the world's most historic cities. Museums, castles, and countryside adventures await.",
        duration: "6-12 months",
        color: "green",
        features: [
          "Visa assistance provided",
          "£100-150 weekly pocket money",
          "Weekend travel opportunities",
          "English language improvement"
        ]
      },
      {
        location: "Paris, France",
        description: "Live in the City of Light, perfect your French, and immerse yourself in art, culture, and cuisine.",
        duration: "6-12 months",
        color: "pink",
        features: [
          "French language courses",
          "Cultural immersion program",
          "European travel opportunities",
          "Art and cooking classes"
        ]
      },
      {
        location: "Barcelona, Spain",
        description: "Enjoy Mediterranean lifestyle while learning Spanish and exploring beautiful architecture and beaches.",
        duration: "6-12 months",
        color: "purple",
        features: [
          "Spanish language learning",
          "Beach lifestyle",
          "Flamenco and cooking classes",
          "Weekend Barcelona exploration"
        ]
      }
    ]
  },

  programDetails: {
    usa: {
      "california": {
        fullDescription: "Immerse yourself in the California lifestyle while providing childcare for American families. From San Francisco's tech culture to Los Angeles' entertainment scene, experience the diversity and innovation that makes California unique.",
        stipend: "$195.75/week + benefits",
        familyTypes: "Tech families, Entertainment industry, Entrepreneurs",
        highlights: [
          "Access to Silicon Valley networking events",
          "Hollywood and entertainment industry exposure",
          "Year-round outdoor activities and beaches",
          "Wine country and national parks nearby",
          "Strong international au pair community",
          "University extension programs available"
        ],
        included: [
          "J-1 visa sponsorship and support",
          "Private room and full board",
          "Health insurance coverage",
          "Monthly metro/transport allowance",
          "Educational allowance $500/year",
          "24/7 emergency support hotline"
        ],
        requirements: {
          basic: [
            "Age 18-26 years old",
            "Single with no dependents",
            "High school diploma or equivalent",
            "Clean criminal background check",
            "Valid driver's license"
          ],
          experience: [
            "Minimum 200 hours childcare experience",
            "First aid/CPR certification",
            "Experience with children of various ages",
            "Swimming ability (preferred)"
          ],
          documentation: [
            "Passport valid for 2+ years",
            "Medical examination certificate",
            "Character references (3)",
            "Educational transcripts",
            "Childcare reference letters"
          ]
        },
        living: {
          accommodation: "Private bedroom in family home with access to common areas, wifi, laundry facilities, and typically includes a car for personal use.",
          familyLife: "Integrated family member participating in daily activities, family outings, and cultural celebrations while maintaining professional boundaries.",
          cultural: "Beach activities, hiking in national parks, wine tastings, tech meetups, Hollywood tours, and weekend trips to San Francisco or San Diego."
        },
        timeline: [
          {
            phase: "Application Review",
            description: "Submit complete application with all required documents. Our team reviews and provides feedback within 5-7 business days.",
            duration: "1-2 weeks"
          },
          {
            phase: "Interview Process",
            description: "Video interviews with our placement coordinators and potential host families. Discuss expectations and compatibility.",
            duration: "2-3 weeks"
          },
          {
            phase: "Family Matching",
            description: "We match you with suitable California families based on your preferences, experience, and lifestyle compatibility.",
            duration: "3-6 weeks"
          },
          {
            phase: "Visa Processing",
            description: "Complete J-1 visa application with our support. Attend embassy interview and receive visa approval.",
            duration: "6-8 weeks"
          },
          {
            phase: "Pre-Departure",
            description: "Orientation sessions, travel arrangements, and final preparations for your California adventure.",
            duration: "2-3 weeks"
          },
          {
            phase: "Program Start",
            description: "Arrive in California, meet your host family, and begin your cultural exchange experience.",
            duration: "Day 1"
          }
        ]
      },
      "new-york": {
        fullDescription: "Experience the energy of New York City while caring for children in the world's most dynamic metropolis. From Broadway shows to Central Park picnics, live at the heart of American culture.",
        stipend: "$195.75/week + NYC benefits",
        familyTypes: "Finance professionals, Artists, International business families",
        highlights: [
          "Broadway shows and cultural events",
          "World-class museums and galleries",
          "Central Park and urban outdoor spaces",
          "International cuisine and food scene",
          "Excellent public transportation system",
          "Weekend trips to Washington DC, Boston"
        ],
        included: [
          "J-1 visa sponsorship and support",
          "Private room in Manhattan/Brooklyn",
          "MetroCard for unlimited subway travel",
          "Health insurance with NYC providers",
          "Cultural activity stipend $200/month",
          "Emergency support 24/7"
        ],
        requirements: {
          basic: [
            "Age 18-26 years old",
            "Comfort with urban living",
            "High school diploma or equivalent",
            "Clean criminal background check",
            "Adaptability to fast-paced lifestyle"
          ],
          experience: [
            "Minimum 200 hours childcare experience",
            "First aid/CPR certification",
            "Public transportation experience",
            "Multi-tasking abilities"
          ],
          documentation: [
            "Passport valid for 2+ years",
            "Medical examination certificate",
            "Character references (3)",
            "Educational transcripts",
            "Childcare experience verification"
          ]
        },
        living: {
          accommodation: "Private bedroom in family apartment or townhouse, typically in Manhattan, Brooklyn, or Queens with easy access to subway systems.",
          familyLife: "Active family life including weekend activities, cultural events, and exploration of NYC's diverse neighborhoods and attractions.",
          cultural: "Broadway shows, museum visits, food tours, Central Park activities, weekend trips to the Hamptons, and exploration of NYC's vibrant neighborhoods."
        },
        timeline: [
          {
            phase: "Application Review",
            description: "Comprehensive application review focusing on urban adaptability and childcare experience in busy environments.",
            duration: "1-2 weeks"
          },
          {
            phase: "NYC-Specific Interview",
            description: "Specialized interviews addressing NYC living, public transport comfort, and urban childcare challenges.",
            duration: "2-3 weeks"
          },
          {
            phase: "Manhattan Family Matching",
            description: "Careful matching with NYC families considering commute, lifestyle, and cultural compatibility.",
            duration: "3-6 weeks"
          },
          {
            phase: "Visa & NYC Prep",
            description: "J-1 visa processing with additional NYC living orientation and subway system training.",
            duration: "6-8 weeks"
          },
          {
            phase: "NYC Orientation",
            description: "Comprehensive NYC orientation including safety, navigation, and cultural integration sessions.",
            duration: "2-3 weeks"
          },
          {
            phase: "Program Launch",
            description: "Arrival in NYC, family introduction, and beginning of your metropolitan adventure.",
            duration: "Day 1"
          }
        ]
      },
      "florida": {
        fullDescription: "Enjoy the sunshine state while providing childcare in family-friendly Florida communities. Experience theme parks, beautiful beaches, and a relaxed lifestyle year-round.",
        stipend: "$195.75/week + Florida perks",
        familyTypes: "Resort families, Retirees with grandchildren, Tourism industry",
        highlights: [
          "Year-round warm weather and sunshine",
          "World-famous theme parks (Disney, Universal)",
          "Beautiful beaches on both coasts",
          "No state income tax",
          "Strong Latin American cultural influence",
          "Everglades and natural wildlife experiences"
        ],
        included: [
          "J-1 visa sponsorship and support",
          "Private room with AC and pool access",
          "Car use for personal activities",
          "Theme park annual passes",
          "Beach access and equipment",
          "Hurricane season support and safety"
        ],
        requirements: {
          basic: [
            "Age 18-26 years old",
            "Heat tolerance and sun safety awareness",
            "High school diploma or equivalent",
            "Clean criminal background check",
            "Swimming ability required"
          ],
          experience: [
            "Minimum 200 hours childcare experience",
            "First aid/CPR certification",
            "Outdoor activity experience",
            "Experience with water safety"
          ],
          documentation: [
            "Passport valid for 2+ years",
            "Medical examination certificate",
            "Character references (3)",
            "Swimming competency certificate",
            "Sun safety training completion"
          ]
        },
        living: {
          accommodation: "Private bedroom in family home, usually with pool access, air conditioning, and often located in gated communities with family-friendly amenities.",
          familyLife: "Relaxed family lifestyle with frequent outdoor activities, theme park visits, beach days, and BBQ gatherings with extended family and neighbors.",
          cultural: "Theme park adventures, beach activities, Everglades tours, Key West trips, cultural festivals in Miami, and exploring Florida's unique wildlife and nature."
        },
        timeline: [
          {
            phase: "Application Review",
            description: "Application review with emphasis on outdoor childcare experience and Florida lifestyle compatibility.",
            duration: "1-2 weeks"
          },
          {
            phase: "Florida Family Interview",
            description: "Video interviews with Florida families focusing on outdoor activities, swimming, and heat tolerance.",
            duration: "2-3 weeks"
          },
          {
            phase: "Sunshine State Matching",
            description: "Matching with Florida families considering location preferences (coast vs. inland) and activity levels.",
            duration: "3-6 weeks"
          },
          {
            phase: "Visa & Weather Prep",
            description: "J-1 visa processing with Florida-specific preparation including hurricane season awareness.",
            duration: "6-8 weeks"
          },
          {
            phase: "Florida Orientation",
            description: "Pre-departure orientation covering Florida weather, outdoor safety, and cultural integration.",
            duration: "2-3 weeks"
          },
          {
            phase: "Sunshine Arrival",
            description: "Arrive in Florida, meet your host family, and start enjoying the sunshine state lifestyle.",
            duration: "Day 1"
          }
        ]
      }
    },
    europe: {
      "london-uk": {
        fullDescription: "Experience British culture in one of the world's most historic and cosmopolitan cities. From royal palaces to modern art galleries, immerse yourself in London's rich heritage while caring for British children.",
        stipend: "£100-150/week + benefits",
        familyTypes: "Professional families, International business, Creative industries",
        highlights: [
          "Royal palaces and historic landmarks",
          "World-class museums (British Museum, Tate Modern)",
          "Easy European travel opportunities",
          "Multicultural neighborhoods and communities",
          "Excellent public transport system",
          "Traditional afternoon tea culture"
        ],
        included: [
          "Visa assistance and work permit",
          "Private room in London family home",
          "Oyster Card for London transport",
          "National Health Service access",
          "Weekend European travel opportunities",
          "British cultural orientation"
        ],
        requirements: {
          basic: [
            "Age 18-26 years old",
            "Basic English proficiency",
            "EU/UK citizenship or visa eligibility",
            "Clean criminal background check",
            "Cultural sensitivity and adaptability"
          ],
          experience: [
            "Minimum 150 hours childcare experience",
            "First aid certification",
            "Experience with British cultural norms",
            "Public transport comfort"
          ],
          documentation: [
            "Valid passport",
            "Medical examination certificate",
            "Character references (3)",
            "Educational transcripts",
            "Visa application documents"
          ]
        },
        living: {
          accommodation: "Private bedroom in London family home, typically in zones 2-4, with access to garden, kitchen facilities, and excellent transport links.",
          familyLife: "Traditional British family life including Sunday roasts, school runs, after-school activities, and weekend countryside excursions.",
          cultural: "Museum visits, West End shows, pub culture, countryside walks, royal events, European weekend trips, and traditional British celebrations."
        },
        timeline: [
          {
            phase: "Application Assessment",
            description: "Review of application with focus on English proficiency and cultural adaptability to British lifestyle.",
            duration: "1-2 weeks"
          },
          {
            phase: "British Family Interview",
            description: "Video interviews with London families discussing British customs, expectations, and cultural integration.",
            duration: "2-3 weeks"
          },
          {
            phase: "London Matching",
            description: "Matching process considering London zone preferences, family lifestyle, and cultural compatibility.",
            duration: "2-4 weeks"
          },
          {
            phase: "Visa Processing",
            description: "Assistance with UK visa application, documentation, and embassy appointments.",
            duration: "4-6 weeks"
          },
          {
            phase: "Pre-Arrival Prep",
            description: "British culture orientation, London navigation training, and practical preparation sessions.",
            duration: "2-3 weeks"
          },
          {
            phase: "London Welcome",
            description: "Arrival in London, family introduction, and beginning of your British cultural experience.",
            duration: "Day 1"
          }
        ]
      },
      "paris-france": {
        fullDescription: "Live in the City of Light and immerse yourself in French culture, art, and cuisine while providing childcare for French families. Experience the elegance of Parisian life and improve your French language skills.",
        stipend: "€300-400/month + benefits",
        familyTypes: "Artists, Professionals, International diplomats",
        highlights: [
          "Iconic landmarks (Eiffel Tower, Louvre, Notre-Dame)",
          "World-renowned cuisine and patisseries",
          "Art galleries and cultural exhibitions",
          "French language immersion",
          "European travel hub",
          "Café culture and Parisian lifestyle"
        ],
        included: [
          "Visa assistance for France",
          "Private room in Parisian apartment",
          "Metro pass for Paris transport",
          "French language classes",
          "Cultural activities allowance",
          "European travel opportunities"
        ],
        requirements: {
          basic: [
            "Age 18-26 years old",
            "Basic French language skills",
            "EU citizenship or visa eligibility",
            "Clean criminal background check",
            "Interest in French culture"
          ],
          experience: [
            "Minimum 150 hours childcare experience",
            "First aid certification",
            "Language learning aptitude",
            "Cultural sensitivity"
          ],
          documentation: [
            "Valid passport",
            "Medical examination certificate",
            "Character references (3)",
            "French language assessment",
            "Educational transcripts"
          ]
        },
        living: {
          accommodation: "Private bedroom in Parisian apartment, typically in central arrondissements with authentic French décor and close to metro stations.",
          familyLife: "Sophisticated French family life including market shopping, cultural outings, long meals, and appreciation for art and literature.",
          cultural: "Museum visits, wine tastings, cooking classes, Seine river walks, château visits, French language meetups, and weekend trips to French regions."
        },
        timeline: [
          {
            phase: "Application Review",
            description: "Application assessment focusing on French language ability and interest in French culture and lifestyle.",
            duration: "1-2 weeks"
          },
          {
            phase: "French Family Interview",
            description: "Interviews conducted partially in French with Parisian families to assess language skills and cultural fit.",
            duration: "2-3 weeks"
          },
          {
            phase: "Parisian Matching",
            description: "Careful matching with French families considering arrondissement preferences and language learning goals.",
            duration: "2-4 weeks"
          },
          {
            phase: "France Visa Process",
            description: "Assistance with French visa application, consulate appointments, and required documentation.",
            duration: "4-6 weeks"
          },
          {
            phase: "French Culture Prep",
            description: "Intensive French culture and etiquette training, language preparation, and Paris navigation orientation.",
            duration: "2-3 weeks"
          },
          {
            phase: "Bonjour Paris!",
            description: "Arrival in Paris, family welcome, and beginning of your French cultural immersion experience.",
            duration: "Day 1"
          }
        ]
      },
      "barcelona-spain": {
        fullDescription: "Experience the vibrant Mediterranean lifestyle in Barcelona while caring for Spanish children. Enjoy beautiful beaches, stunning architecture, and the warm Spanish culture in this cosmopolitan Catalan city.",
        stipend: "€300-400/month + benefits",
        familyTypes: "Creative professionals, Tourism industry, International families",
        highlights: [
          "Gaudí architecture (Sagrada Familia, Park Güell)",
          "Beautiful Mediterranean beaches",
          "Vibrant nightlife and festival culture",
          "Spanish and Catalan language immersion",
          "Mediterranean cuisine and tapas culture",
          "Perfect climate year-round"
        ],
        included: [
          "Visa assistance for Spain",
          "Private room near Barcelona center",
          "Metro and bus transportation pass",
          "Spanish language classes",
          "Beach club access",
          "Cultural activities and flamenco lessons"
        ],
        requirements: {
          basic: [
            "Age 18-26 years old",
            "Basic Spanish language skills",
            "EU citizenship or visa eligibility",
            "Clean criminal background check",
            "Openness to Spanish culture"
          ],
          experience: [
            "Minimum 150 hours childcare experience",
            "First aid certification",
            "Flexibility and adaptability",
            "Swimming ability preferred"
          ],
          documentation: [
            "Valid passport",
            "Medical examination certificate",
            "Character references (3)",
            "Spanish language assessment",
            "Educational transcripts"
          ]
        },
        living: {
          accommodation: "Private bedroom in Barcelona apartment, often with balcony, near metro stations and within walking distance to beaches or city center.",
          familyLife: "Relaxed Spanish family lifestyle with late dinners, siesta culture, beach weekends, and strong emphasis on family gatherings and celebrations.",
          cultural: "Beach activities, flamenco shows, tapas tours, Gaudí architecture exploration, Mediterranean festivals, weekend trips to Costa Brava, and Spanish language exchange."
        },
        timeline: [
          {
            phase: "Application Review",
            description: "Assessment focusing on Spanish language skills and enthusiasm for Mediterranean lifestyle and Spanish culture.",
            duration: "1-2 weeks"
          },
          {
            phase: "Spanish Family Interview",
            description: "Video interviews with Barcelona families, including Spanish conversation assessment and cultural compatibility discussion.",
            duration: "2-3 weeks"
          },
          {
            phase: "Barcelona Matching",
            description: "Matching with Catalan families considering neighborhood preferences (beach vs. city center) and language goals.",
            duration: "2-4 weeks"
          },
          {
            phase: "Spain Visa Support",
            description: "Comprehensive support for Spanish visa application, consulate procedures, and documentation requirements.",
            duration: "4-6 weeks"
          },
          {
            phase: "Spanish Culture Prep",
            description: "Spanish culture orientation, Catalan customs introduction, and Barcelona city preparation sessions.",
            duration: "2-3 weeks"
          },
          {
            phase: "¡Hola Barcelona!",
            description: "Arrival in Barcelona, family introduction, and start of your Mediterranean cultural adventure.",
            duration: "Day 1"
          }
        ]
      }
    }
  },
  
  processSteps: [
    {
      step: "1",
      title: "Initial Application",
      description: "Complete our comprehensive online application with personal information, childcare experience, and motivations.",
      timeframe: "30 minutes"
    },
    {
      step: "2",
      title: "Background Check",
      description: "We conduct thorough background checks and verify all references to ensure safety for host families.",
      timeframe: "1-2 weeks"
    },
    {
      step: "3",
      title: "Interview Process",
      description: "Video interviews with our team to assess compatibility, language skills, and cultural readiness.",
      timeframe: "1 week"
    },
    {
      step: "4",
      title: "Family Matching",
      description: "We match you with suitable host families based on preferences, location, and compatibility factors.",
      timeframe: "2-4 weeks"
    },
    {
      step: "5",
      title: "Visa & Travel",
      description: "Complete visa applications, travel arrangements, and pre-departure orientation sessions.",
      timeframe: "4-8 weeks"
    },
    {
      step: "6",
      title: "Program Start",
      description: "Arrive at your host family and begin your cultural exchange adventure with ongoing support.",
      timeframe: "Ongoing"
    }
  ],

  testimonials: [
    {
      name: "Sofia Martinez",
      role: "Au Pair",
      location: "California, USA",
      text: "Carla helped me find the perfect host family in California. The support throughout my program was incredible. I learned so much and made lifelong friendships.",
      rating: 5,
      color: "purple"
    },
    {
      name: "Emma Thompson",
      role: "Host Mother",
      location: "London, UK",
      text: "We've had three au pairs through Carla's agency. Each placement has been perfect for our family. The screening process gives us complete confidence.",
      rating: 5,
      color: "blue"
    },
    {
      name: "Marie Dubois",
      role: "Au Pair",
      location: "New York, USA",
      text: "My dream was to live in New York and improve my English. Carla made it happen! The family I stayed with became my second family.",
      rating: 5,
      color: "green"
    },
    {
      name: "James Wilson",
      role: "Host Father",
      location: "Barcelona, Spain",
      text: "Our au pair from Germany has been amazing with our kids. The cultural exchange has enriched our entire family's perspective.",
      rating: 5,
      color: "orange"
    },
    {
      name: "Anna Kowalski",
      role: "Au Pair",
      location: "Florida, USA",
      text: "The entire experience exceeded my expectations. From the application process to daily support, Carla's team was there every step.",
      rating: 5,
      color: "pink"
    },
    {
      name: "Sarah Johnson",
      role: "Host Mother",
      location: "Paris, France",
      text: "Finding the right au pair was crucial for our family. Carla understood our needs perfectly and found someone who fits seamlessly into our lives.",
      rating: 5,
      color: "purple"
    }
  ]
};