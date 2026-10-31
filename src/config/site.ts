import {
  Users,
  Globe,
  Award,
  Clock,
  ShieldCheck,
  TrendingUp,
  Handshake,
  Lightbulb,
  Building2,
  FileCheck,
  Calculator,
  Landmark,
  Building,
  RefreshCw,
} from "lucide-react";

export const calendlyUrl = 'https://calendly.com/nextgenadvisorsltd-info/30min'

export const siteConfig = {
  global: {
    name: 'NexGen Business Advisors Ltd',
    location: 'Lagos, Nigeria',
    city: 'Lagos',
    country: 'Nigeria',
    email: 'info@nextgenadvisors.com',
    phone: '+234 803 734 5051',
    whatsapp: '+2348037345051',

    /**
     * Paste a fresh Google Maps embed URL here whenever the office moves.
     * To get one: Google Maps → share → Embed a map → copy the src URL.
     */
    mapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9869.927415408383!2d3.449704144847996!3d6.459473024128256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4f359e067ad%3A0xa08df7cee2d4046c!2sBanana%20Island%2C%20Lekki%20106104%2C%20Lagos!5e1!3m2!1sen!2sng!4v1774460884646!5m2!1sen!2sng',
    /** Direct link that opens Google Maps in a new tab for directions. */
    mapsDirectionsUrl: 'https://www.google.com/maps/place/Banana+Island,+Lekki+106104,+Lagos',
    developer: {
      label: 'Kavara Digital',
      link: 'https://www.kavaradigital.online'
    }
  },
  nav: {
    links: [
      { label: 'About', href: '/#about' },
      { label: 'Services', href: '/#services' },
      { label: 'Audit & Tax', href: '/audit-taxation' },
      { label: 'Financial Strategy', href: '/financial-strategy' },
      { label: 'Team', href: '/#team' },
      { label: 'Contact', href: '/#contact' }
    ],
    cta: 'Book a Consultation'
  },
  hero: {
    badge: 'Business Growth & Strategy',
    headingMain: 'Strategic Business Advisory',
    headingHighlight: 'in Nigeria',
    description1:
      'From market entry to financial structuring, we deliver expert compliance and advisory services. We help diaspora investors and foreign businesses secure financing and scale sustainably.',
    description2: '',
    cta1: {
      label: 'Book a Consultation',
      href: calendlyUrl
    },
    cta2: {
      label: 'Speak With Our Advisors',
      href: 'tel:+2348037345051'
    },
    images: {
      main: '/images/hero-skyline.jpg',
      sub: '/images/consulting.jpg'
    },
    floatingBadge: {
      number: '20+',
      label: 'Years'
    },
    stats: [
      { end: 500, suffix: '+', label: 'Clients Served', icon: Users },
      { end: 15, suffix: '+', label: 'Countries Represented', icon: Globe },
      { end: 98, suffix: '%', label: 'Client Satisfaction', icon: Award },
    ]
  },
  pages: {
    financialStrategy: {
      heroImage: '/images/financial_strategy.png',
    },
    auditTaxation: {
      heroImage: '/images/hero-skyline.jpg',
    }
  },
  about: {
    whyChooseUs: {
      badge: 'Why Choose Us',
      heading: 'Why Clients Trust NexGen Business Advisors Ltd',
      description:
        'We combine professional excellence, international exposure, and practical business insight. Led by Joy Ozua, a licensed member of the Institute of Chartered Accountants of Nigeria with over 15 years of experience in audit, taxation, governance, and strategic advisory. Our team brings experience from globally connected firms and international business institutions.',
      images: {
        main: '/images/team-meeting.jpg',
        sub: '/images/office-work.jpg'
      },
      floatingBadge: {
        number: '15+',
        label: 'Years'
      },
      features: [
        {
          icon: Award,
          title: 'Professional Expertise',
          desc: 'Led by a licensed ICAN member with 15+ years in audit, tax, governance, and business advisory.'
        },
        {
          icon: Globe,
          title: 'International Professional Exposure',
          desc: 'Experience with globally connected firms like Parker Randall Offor and Moore Bishop & Rooks.'
        },
        {
          icon: Handshake,
          title: 'Cross-Border Business Insight',
          desc: 'Leadership experience at Nigerian-German Chamber of Commerce, understanding diaspora and foreign company needs.'
        },
        {
          icon: TrendingUp,
          title: 'Practical Banking & Business Knowledge',
          desc: 'Background in banking operations, credit, and marketing to guide clients in structuring and accessing funding.'
        }
      ]
    },
    vision: {
      title: 'Our Vision',
      description:
        'To be the most trusted and innovative advisory partner in Nigeria for diaspora investors, foreign corporations, and entrepreneurs, enabling sustainable, compliant, and growth-oriented businesses.'
    },
    mission: {
      title: 'Our Mission',
      points: [
        'Deliver exceptional market entry, regulatory, and financial advisory services.',
        'Empower SMEs, foreign investors, and entrepreneurs to achieve sustainable growth.',
        'Facilitate compliance, transparency, and efficiency in every business we support.',
        'Build institutional trust through professional integrity and global best practices.'
      ]
    },
    coreValues: {
      badge: 'What Drives Us',
      heading: 'Core Values',
      values: [
        {
          title: 'Integrity',
          desc: 'Highest ethical standards in all advisory services.'
        },
        {
          title: 'Excellence',
          desc: 'Top-quality, accurate, and actionable solutions.'
        },
        {
          title: 'Innovation',
          desc: 'Creative and practical strategies for sustainable growth.'
        },
        {
          title: 'Client-Centricity',
          desc: "Every strategy designed for the client's success."
        },
        {
          title: 'Collaboration',
          desc: 'Multidisciplinary expertise and holistic solutions.'
        },
        {
          title: 'Sustainability',
          desc: 'Lasting structures that grow responsibly.'
        }
      ]
    }
  },
  services: {
    featureBand: {
      badge: 'Our Approach',
      heading: 'A Structured Path to Sustainable Operations',
      description:
        'We begin by understanding client objectives and evaluating the regulatory and financial landscape. We guide clients through business establishment, compliance structuring, and sound accounting systems. Our advisory supports investment readiness through business proposals, feasibility studies, financial projections, and bank loan facilitation.',
      image: '/images/business-team.png',
      items: [
        'Client Objective Assessment',
        'Regulatory & Financial Landscape Evaluation',
        'Business Establishment & Compliance',
        'Accounting Systems & Investment Readiness'
      ]
    },
    main: {
      badge: 'Our Expertise Services',
      heading: 'Comprehensive Advisory Solutions',
      description:
        'At NexGen Business Advisors, we combine international best practices with local insights to help businesses thrive in Nigeria.',
      servicesList: [
        {
          icon: Building2,
          title: 'Business Setup & Market Entry',
          image: '/images/services/business-setup.jpg',
          items: [
            'Seamless company and branch registration',
            'Market research and feasibility insights',
            'Regulatory guidance for confident market entry'
          ],
          details: [
            {
              title: 'Seamless company and branch registration',
              description:
                'We guide you through the entire incorporation journey, from name reservation to CAC registration, ensuring smooth and compliant setup for your business entity or branch.'
            },
            {
              title: 'Market research and feasibility insights',
              description:
                'Our research helps you understand market demand, competition, and potential risks so you can enter with confidence and the right strategic positioning.'
            },
            {
              title: 'Regulatory guidance for confident market entry',
              description:
                'We provide practical advice on licensing, permits, and industry-specific regulations so you can avoid common regulatory hurdles in Nigeria.'
            }
          ]
        },
        {
          icon: FileCheck,
          title: 'Tax Advisory & Compliance',
          image: '/images/services/tax-advisory.jpg',
          items: [
            'Strategic tax planning and optimization',
            'Full tax registration and advisory support',
            'Ongoing compliance monitoring with Nigerian regulations'
          ],
          details: [
            {
              title: 'Strategic tax planning and optimization',
              description:
                'We design tax strategies that align with your business model and growth goals to help you minimize liabilities while remaining compliant.'
            },
            {
              title: 'Full tax registration and advisory support',
              description:
                'From TIN registration to annual filings, we support you with accurate tax returns, filings, and expert advice for every stage of your business.'
            },
            {
              title: 'Ongoing compliance monitoring with Nigerian regulations',
              description:
                'We keep you informed about regulatory changes and ensure your processes remain aligned with FIRS, CITA, and other relevant authorities.'
            }
          ]
        },
        {
          icon: Calculator,
          title: 'Accounting, Bookkeeping & Financial Structuring',
          image: '/images/services/accounting.jpg',
          items: [
            'Customized accounting systems',
            'Bookkeeping and financial reporting services',
            'Cash flow management and internal controls',
            'Stock-taking and business valuation'
          ],
          details: [
            {
              title: 'Customized accounting systems',
              description:
                'We implement accounting workflows and systems tailored to your operations, whether you need simple bookkeeping or a full ERP-backed finance function.'
            },
            {
              title: 'Bookkeeping and financial reporting services',
              description:
                'Accurate ledgers, timely reports, and meaningful metrics help you make informed decisions and maintain stakeholder confidence.'
            },
            {
              title: 'Cash flow management and internal controls',
              description:
                'We help you design cash management processes and controls that mitigate risk and improve predictability across your business.'
            },
            {
              title: 'Stock-taking and business valuation',
              description:
                'Our teams support physical inventory audits and valuation exercises to keep your balance sheet accurate and investment-ready.'
            }
          ]
        },
        {
          icon: Landmark,
          title: 'Loan & Investment Facilitation',
          image: '/images/services/loan-investment.jpg',
          items: [
            'Bank-ready business proposals and financial documentation',
            'Feasibility studies and cash flow projections',
            'Advisory support for institutional financing'
          ],
          details: [
            {
              title:
                'Bank-ready business proposals and financial documentation',
              description:
                'We prepare investor-grade proposals and financial packages that meet the expectations of banks, DFIs, and other funding partners.'
            },
            {
              title: 'Feasibility studies and cash flow projections',
              description:
                'Our analyses provide realistic forecasts and pricing models that demonstrate the viability of your project or expansion plans.'
            },
            {
              title: 'Advisory support for institutional financing',
              description:
                'We support negotiations and structure financing terms that align with your capital strategy and long-term objectives.'
            }
          ]
        },
        {
          icon: Building,
          title: 'Banking & Institutional Liaison',
          image: '/images/services/banking-liaison.jpg',
          items: [
            'Corporate banking setup and management',
            'Liaison with regulators and institutional partners'
          ],
          details: [
            {
              title: 'Corporate banking setup and management',
              description:
                'We help you establish the right banking relationships, accounts, and cash management structures to support your day-to-day operations and growth.'
            },
            {
              title: 'Liaison with regulators and institutional partners',
              description:
                'We act as your trusted point of contact with banks, regulators, and other institutions to keep processes moving and reduce friction.'
            }
          ]
        },
        {
          icon: RefreshCw,
          title: 'Ongoing Advisory & Retainer Services',
          image: '/images/services/retainer.jpg',
          items: [
            'Strategic advisory for growth and governance',
            'Monthly compliance and financial health reviews',
            'Governance strengthening and long-term planning'
          ],
          details: [
            {
              title: 'Strategic advisory for growth and governance',
              description:
                'We offer recurring guidance on strategy, performance, governance, and risk management to keep your business on track.'
            },
            {
              title: 'Monthly compliance and financial health reviews',
              description:
                'Regular reviews help you maintain compliance, spot issues early, and ensure your finances remain healthy as you scale.'
            },
            {
              title: 'Governance strengthening and long-term planning',
              description:
                'We support governance frameworks and planning processes that create sustainability and resilience in your organization.'
            }
          ]
        }
      ]
    }
  },
  team: {
    badge: 'Our Team',
    heading: 'Meet Our Expert Team',
    description:
      'NexGen Business Advisors Ltd is supported by a team of qualified professionals across accounting, compliance, financial analysis, and strategic advisory. Our multidisciplinary expertise enables integrated services across all business advisory needs.',
    members: [
      {
        name: 'Joy Ozua',
        role: 'Managing Director / Lead Consultant',
        photo: '/images/team-lead.png',
        bio: 'Licensed member of the Institute of Chartered Accountants of Nigeria with 15+ years of experience in audit, taxation, governance, and strategic advisory. Former CFO and Acting DG of Nigerian-German Chamber of Commerce. Experience with globally connected firms including Parker Randall Offor and Moore Bishop & Rooks.',
        memberLinkedInUrl: 'https://www.linkedin.com/in/joy-ozua-10ba25117',
        memberEmailAddress: 'ozua@nextgenadvisorsltd.com'
      },
      {
        name: 'Desmond Abollo',
        role: 'Chartered Accountant & Virtual CFO',
        photo: '/images/team-member-2.png',
        bio: 'Chartered Accountant with 20+ years experience, Certified Management Consultant (CMC), and Founder of CloudERP Accounting & Business Solutions. Specializes in virtual CFO services, forensic accounting, and cloud ERP implementations for hospitality, fintech, real estate, and high-growth startups. Delivers clean books, compliant taxes, investor-ready financials, with proven results in on-time reporting, budgeting accuracy, and cost reductions.',
        memberLinkedInUrl: 'https://www.linkedin.com/in/desmondabollo/',
        memberEmailAddress: 'info@nextgenadvisorsltd.com'
      }
    ]
  },
  testimonials: {
    badge: 'Client Success Stories',
    heading: 'What Our Clients Say',
    description:
      'Trusted by diaspora investors, foreign corporations, entrepreneurs, and SMEs who are building sustainable, compliant businesses in Nigeria.',
    reviews: [
      {
        quote:
          'NexGen Advisors made our entry into the Nigerian market seamless. Their compliance expertise saved us months and gave us confidence to invest further.',
        name: 'Michael Adebayo',
        title: 'CEO, Transatlantic Ventures',
        avatar: '/favicon.png'
      },
      {
        quote:
          'From business registration to tax advisory, the team was professional and extremely knowledgeable. They truly understand cross-border business.',
        name: 'Oluwaseun Ojo',
        title: 'Director, Diaspora Capital Group',
        avatar: '/favicon.png'
      },
      {
        quote:
          'We needed a structured financial model and bank-ready documentation. NexGen delivered beyond expectations and helped us secure our first institutional loan.',
        name: 'Amina Bello',
        title: 'Founder, GreenLeaf Agritech',
        avatar: '/favicon.png'
      }
    ]
  },
  contact: {
    badge: 'Ready to Get Started?',
    heading: 'Get in Touch With Our Team',
    description:
      "Whether you're a diaspora investor, foreign corporation, or entrepreneur, we're here to guide you toward compliant, structured, and growth-ready operations in Nigeria.",
    image: '/images/consulting.jpg',
    quote:
      '"Structured businesses attract sustainable success. Let NexGen Business Advisors help you build yours the right way."',
    formServices: [
      { value: 'setup', label: 'Business Setup' },
      { value: 'tax', label: 'Tax & Compliance' },
      { value: 'accounting', label: 'Accounting' },
      { value: 'loan', label: 'Loan Facilitation' },
      { value: 'banking', label: 'Banking & Liaison' },
      { value: 'other', label: 'Other' }
    ]
  },
  ctaBanner: {
    heading:
      'Build a Compliant, Structured, and Investment-Ready Business in Nigeria',
    description:
      'From market entry guidance to investment readiness, let our expert team help you establish and grow a sustainable business. We bring global perspective, structured approach, and hands-on expertise.',
    primaryButtonText: 'Book Your Consultation',
    primaryButtonLink: calendlyUrl,
    secondaryButtonText: 'Learn More',
    secondaryButtonLink: '/#services'
  },
  faq: {
    badge: 'Frequently Asked Questions',
    heading: 'Setting Up and Running a Business in Nigeria',
    description:
      'Straight answers to the questions diaspora investors, foreign companies, and Nigerian SMEs ask us most about registration, tax, and compliance.',
    items: [
      {
        category: 'Company Registration',
        question:
          'Can a Nigerian living abroad register a company in Nigeria without travelling home?',
        answer:
          'Yes. Company registration with the Corporate Affairs Commission (CAC) is done online, and NexGen Business Advisors acts as your local representative for name reservation, filing, and post-incorporation steps. You only need a valid means of identification, a passport photograph, and signed consent forms. No physical presence in Nigeria is required.'
      },
      {
        category: 'Company Registration',
        question: 'How long does company registration with the CAC take?',
        answer:
          'Name reservation is usually approved within 1 to 2 working days, and incorporation within 3 to 10 working days once all documents are complete. Most delays come from rejected names or incomplete director details, which we check before filing.'
      },
      {
        category: 'Company Registration',
        question: 'How much does it cost to register a company in Nigeria?',
        answer:
          'The cost depends on the company type and share capital. CAC filing fees for a small private limited company start from about ₦25,000 for ₦1 million share capital, plus stamp duty and professional fees. Companies with foreign shareholders need a minimum share capital of ₦100 million, which raises the filing and stamp duty cost.'
      },
      {
        category: 'Company Registration',
        question: 'What documents do I need to register a company in Nigeria?',
        answer:
          'You need two proposed company names, a registered office address in Nigeria, the name, address, date of birth, and ID of each director and shareholder, the share capital and shareholding structure, and the objects of the company. Foreign shareholders provide passport data pages, and corporate shareholders provide their certificate of incorporation and a board resolution.'
      },
      {
        category: 'Tax & Compliance',
        question: 'Is CAC registration enough to start operating legally in Nigeria?',
        answer:
          'No. After incorporation you still need a Tax Identification Number (TIN), VAT registration with the Federal Inland Revenue Service (FIRS), PAYE registration with the state revenue service, and any sector-specific licence. Foreign-owned companies also need Nigerian Investment Promotion Commission (NIPC) registration, a business permit, and expatriate quota approval before hiring foreign staff.'
      },
      {
        category: 'Tax & Compliance',
        question: 'Which taxes does a new company in Nigeria have to register for?',
        answer:
          'Every company registers for Companies Income Tax, Value Added Tax, Withholding Tax, and PAYE for its employees. FIRS handles federal taxes and the state internal revenue service handles PAYE. Larger companies also pay Tertiary Education Tax, and some sectors have additional levies.'
      },
      {
        category: 'Foreign & Diaspora Investors',
        question:
          'Can a foreign company operate in Nigeria as a branch instead of a subsidiary?',
        answer:
          'Generally no. The Companies and Allied Matters Act requires a foreign company to incorporate a separate Nigerian entity before doing business, unless it obtains a ministerial exemption, which is granted only in limited cases such as government-approved projects. We advise on the right structure before any filing.'
      },
      {
        category: 'Foreign & Diaspora Investors',
        question: 'How do I open a corporate bank account in Nigeria from abroad?',
        answer:
          'Nigerian banks require the CAC certificate and status report, the company TIN, a board resolution, and verified identification for every signatory. NexGen coordinates the know-your-customer process with the bank so the account is opened without repeated trips to Nigeria.'
      },
      {
        category: 'Tax & Compliance',
        question:
          'What ongoing compliance does a Nigerian company have to meet every year?',
        answer:
          'Every company files annual returns with the CAC, prepares audited financial statements, files Companies Income Tax returns, remits VAT and PAYE monthly, and files withholding tax returns. Missing any of these attracts penalties and can block bank transactions, loan applications, and investor due diligence.'
      },
      {
        category: 'Working With NexGen',
        question:
          'How is NexGen Business Advisors different from a Big Four firm for business setup?',
        answer:
          'NexGen is a partner-led firm built for diaspora investors, foreign companies, and SMEs. You work directly with an ICAN-licensed lead consultant from registration through tax, accounting, and financing, with pricing and turnaround scaled to a growing business rather than a multinational.'
      },
      {
        category: 'Tax & Compliance',
        question:
          'Do you provide statutory audit and tax filing services, or only business setup?',
        answer:
          'Both. Through our affiliate firm Joy Ozua & Co. (Chartered Accountants), we deliver statutory and regulatory audits, IFRS financial reporting, FIRS and state tax filings, VAT and withholding tax returns, and CAC annual returns. Many clients start with company registration and keep us as their audit, tax, and accounting partner.'
      },
      {
        category: 'Working With NexGen',
        question:
          'What do Nigerian banks and investors need before approving a loan or investment?',
        answer:
          'They expect a bank-ready business plan, a feasibility study, three to five years of cash flow projections, clean audited accounts, and evidence of tax compliance. NexGen prepares this documentation and liaises with the bank or investor so the application is not delayed by missing or inconsistent financials.'
      },
      {
        category: 'Foreign & Diaspora Investors',
        question:
          'Do you work with German and other European companies entering Nigeria?',
        answer:
          'Yes. Our Managing Director was CFO and Acting Director General of the Nigerian-German Chamber of Commerce, so we understand how European companies and their head offices expect compliance, reporting, and governance to be handled in Nigeria. We support market entry, subsidiary setup, NIPC registration, expatriate quota, and ongoing reporting to the parent company.'
      },
      {
        category: 'Working With NexGen',
        question: 'Who leads NexGen Business Advisors?',
        answer:
          'NexGen Business Advisors Ltd is led by Joy Ozua, a licensed member of the Institute of Chartered Accountants of Nigeria (ICAN) with over 15 years in audit, taxation, governance, and strategic advisory, and former CFO and Acting Director General of the Nigerian-German Chamber of Commerce. She is supported by Desmond Abollo, a chartered accountant and virtual CFO with over 20 years of experience.'
      }
    ]
  },
  footer: {
    description:
      'NexGen Business Advisors Ltd helps diaspora investors, foreign corporations, and entrepreneurs establish strong, compliant, and sustainable businesses in Nigeria through expert advisory in setup, compliance, accounting, and investment readiness.',
    quickLinks: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/#about' },
      { label: 'Audit & Tax', href: '/audit-taxation' },
      { label: 'Financial Strategy', href: '/financial-strategy' },
      { label: 'Services', href: '/#services' },
      { label: 'Our Team', href: '/#team' },
      { label: 'Contact', href: '/#contact' },
      { label: 'FAQ', href: '/#faq' }
    ],
    serviceLinks: [
      { label: 'Business Setup', href: '/#services' },
      { label: 'Tax & Compliance', href: '/#services' },
      { label: 'Accounting', href: '/#services' },
      { label: 'Loan Facilitation', href: '/#services' },
      { label: 'Banking Liaison', href: '/#services' },
      { label: 'Advisory Services', href: '/#services' }
    ],
    legalLinks: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' }
    ]
  },
  industriesServed: {
    badge: 'Our Reach',
    heading: 'Industries We Serve',
    description:
      'NexGen Business Advisors Ltd works across sectors to support different business types and growth stages:',
    industries: [
      {
        title: 'SMEs & Entrepreneurs',
        description: 'Structured business setup and growth advisory'
      },
      {
        title: 'Diaspora Investors',
        description: 'Local guidance for investment success'
      },
      {
        title: 'Foreign Companies',
        description: 'Market entry, compliance, and corporate setup'
      },
      {
        title: 'Professional Services',
        description: 'Accounting, governance, and operational support'
      },
      {
        title: 'Trade & Bilateral Organizations',
        description: 'Cross-border advisory, SME programs, governance'
      },
      {
        title: 'Growing Corporates',
        description:
          'Financial governance, investment readiness, and strategic planning'
      }
    ]
  },
  whyNigeria: {
    badge: 'Market Opportunity',
    heading: 'Why Invest in Nigeria',
    description:
      'Nigeria is a high-opportunity market for investors with compelling advantages:',
    opportunities: [
      {
        title: 'Large Consumer Market',
        description: "Africa's largest economy and population"
      },
      {
        title: 'Strategic Gateway',
        description: 'Access to West African markets'
      },
      {
        title: 'Entrepreneurial Ecosystem',
        description: 'Growing SMEs, innovation, and digital transformation'
      },
      {
        title: 'Government Incentives',
        description: 'Policies supporting foreign investment'
      }
    ],
    support: [
      'Market entry strategy',
      'Regulatory compliance',
      'Investment structuring',
      'Institutional partnerships'
    ]
  },
  strategicAdvantage: {
    badge: 'Our Competitive Edge',
    heading: 'Our Strategic Advantage',
    advantages: [
      {
        title: 'Real-World Expertise',
        description:
          'Over 15 years of experience in audit, banking, and advisory'
      },
      {
        title: 'International Standards, Local Insight',
        description:
          'Global firm exposure combined with Nigerian market understanding'
      },
      {
        title: 'Full-Spectrum Advisory',
        description: 'From setup to financing and governance'
      },
      {
        title: 'Tailored for Investors',
        description:
          'Diaspora and foreign companies receive practical, compliant guidance'
      },
      {
        title: 'Long-Term Partnership',
        description:
          'Helping clients build sustainable, structured, and investment-ready businesses'
      }
    ]
  },
  legal: {
    badge: 'Legal & Compliance',
    heading: 'Legal, Terms & Privacy',
    sections: [
      {
        title: 'Terms of Service',
        description:
          'Use of website and professional services governed by engagement agreements'
      },
      {
        title: 'Privacy Policy',
        description:
          'All client and website data is confidential and never sold'
      },
      {
        title: 'Disclaimer',
        description:
          'Website content is informational; professional services are provided only after formal engagement'
      },
      {
        title: 'Limitation of Liability',
        description:
          'Advisory services guide decisions; outcomes depend on client action and regulatory compliance'
      },
      {
        title: 'Intellectual Property',
        description:
          'All documents, reports, and advisory materials belong to NexGen unless agreed otherwise'
      },
      {
        title: 'Governing Law',
        description: 'Federal Republic of Nigeria'
      }
    ]
  }
}
