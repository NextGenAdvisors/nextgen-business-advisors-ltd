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

export const siteConfig = {
  global: {
    name: 'NextGen Business Advisors Ltd',
    location: 'Lagos, Nigeria',
    email: 'info@nextgenadvisors.com',
    phone: '+234 803 734 5051'
  },
  nav: {
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Team', href: '#team' },
      { label: 'Contact', href: '#contact' }
    ],
    cta: 'Book a Consultation'
  },
  hero: {
    badge: 'Business Growth & Strategy',
    headingMain: 'Structured, Compliant, Business Solutions',
    headingHighlight: 'in Nigeria',
    description1:
      'NextGen Business Advisors Ltd delivers expert advisory services for business setup, regulatory compliance, accounting solutions, financial structuring, and investment readiness, while also assisting businesses with bank loan facilitation, business proposals, cash flow projections, and feasibility studies required for accessing institutional financing in Nigeria.',
    description2:
      'We combine professional excellence, international exposure, and practical business insight to deliver structured advisory solutions for diaspora investors, foreign corporations, and entrepreneurs.',
    cta1: {
      label: 'Book a Consultation',
      href: 'https://calendly.com/nextgenadvisorsltd-info/30min'
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
      { end: 20, suffix: '+', label: 'Years of Experience', icon: Clock }
    ]
  },
  about: {
    whyChooseUs: {
      badge: 'Why Choose Us',
      heading: 'Why Clients Trust NextGen Business Advisors Ltd',
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
        'At NextGen Business Advisors, we combine international best practices with local insights to help businesses thrive in Nigeria.',
      servicesList: [
        {
          icon: Building2,
          title: 'Business Setup & Market Entry',
          image: '/images/services/business-setup.svg',
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
          image: '/images/services/tax-advisory.svg',
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
          image: '/images/services/accounting.svg',
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
          image: '/images/services/loan-investment.svg',
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
          image: '/images/services/banking-liaison.svg',
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
          image: '/images/services/retainer.svg',
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
      'NextGen Business Advisors Ltd is supported by a team of qualified professionals across accounting, compliance, financial analysis, and strategic advisory. Our multidisciplinary expertise enables integrated services across all business advisory needs.',
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
      },
      {
        name: 'Bukola Lawal',
        role: 'Lead Consultant, Accounting Services MBA, ACCA, ACTI',
        photo: '/images/team-member-3.png',
        bio: 'Bukola Lawal is a Chartered Accountant and Taxation Professional with over seven years of experience delivering high-impact accounting and financial solutions. She specializes in financial reporting, tax compliance, payroll management, and internal controls, helping businesses strengthen financial systems and operate with clarity and confidence.',
        memberLinkedInUrl:
          'https://www.linkedin.com/in/bukola-lawal-acca-22612534/',
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
          'NextGen Advisors made our entry into the Nigerian market seamless. Their compliance expertise saved us months and gave us confidence to invest further.',
        name: 'Michael Adebayo',
        title: 'CEO, Transatlantic Ventures',
        avatar: '/images/testimonial-avatar.png'
      },
      {
        quote:
          'From business registration to tax advisory, the team was professional and extremely knowledgeable. They truly understand cross-border business.',
        name: 'Oluwaseun Ojo',
        title: 'Director, Diaspora Capital Group',
        avatar: '/images/testimonial-avatar.png'
      },
      {
        quote:
          'We needed a structured financial model and bank-ready documentation. NextGen delivered beyond expectations and helped us secure our first institutional loan.',
        name: 'Amina Bello',
        title: 'Founder, GreenLeaf Agritech',
        avatar: '/images/testimonial-avatar.png'
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
      '"Structured businesses attract sustainable success. Let NextGen Business Advisors help you build yours the right way."',
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
    primaryButtonLink: '#contact',
    secondaryButtonText: 'Learn More',
    secondaryButtonLink: '#services'
  },
  footer: {
    description:
      'NextGen Business Advisors Ltd helps diaspora investors, foreign corporations, and entrepreneurs establish strong, compliant, and sustainable businesses in Nigeria through expert advisory in setup, compliance, accounting, and investment readiness.',
    quickLinks: [
      { label: 'Home', href: '#' },
      { label: 'About Us', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Our Team', href: '#team' },
      { label: 'Contact', href: '#contact' }
    ],
    serviceLinks: [
      { label: 'Business Setup', href: '#services' },
      { label: 'Tax & Compliance', href: '#services' },
      { label: 'Accounting', href: '#services' },
      { label: 'Loan Facilitation', href: '#services' },
      { label: 'Banking Liaison', href: '#services' },
      { label: 'Advisory Services', href: '#services' }
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
      'NextGen Business Advisors Ltd works across sectors to support different business types and growth stages:',
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
          'All documents, reports, and advisory materials belong to NextGen unless agreed otherwise'
      },
      {
        title: 'Governing Law',
        description: 'Federal Republic of Nigeria'
      }
    ]
  }
}
