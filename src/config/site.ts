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
      'Helping Diaspora Investors, Foreign Corporations, and Entrepreneurs Build Sustainable and Compliant Businesses.',
    description2:
      'NextGen Business Advisors Ltd delivers expert advisory services for business setup, regulatory compliance, financial structuring, and investment readiness in Nigeria.',
    cta1: {
      label: 'Book a Consultation',
      href: '#contact'
    },
    cta2: {
      label: 'Speak With Our Advisors',
      href: '#contact'
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
      heading: 'The Only Source of Knowledge is Experience',
      description:
        'With decades of combined experience in finance, regulation, and cross-border advisory, NextGen Business Advisors delivers institutional-level expertise to every engagement.',
      images: {
        main: '/images/team-meeting.jpg',
        sub: '/images/office-work.jpg'
      },
      floatingBadge: {
        number: '500+',
        label: 'Clients'
      },
      features: [
        {
          icon: ShieldCheck,
          title: 'Regulatory Expertise',
          desc: 'Deep knowledge of Nigerian business regulations, tax laws, and compliance frameworks.'
        },
        {
          icon: TrendingUp,
          title: 'Growth Strategy',
          desc: 'Sustainable financial structuring and investment readiness advisory.'
        },
        {
          icon: Handshake,
          title: 'Cross-Border Experience',
          desc: 'Facilitating diaspora investment and foreign corporation market entry.'
        },
        {
          icon: Lightbulb,
          title: 'Institutional-Grade',
          desc: 'Led by licensed ICAN professionals with CFO and C-suite advisory experience.'
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
      badge: 'Why Our Clients Trust Us',
      heading: 'We Are Qualified In Every Department',
      description:
        'From regulatory compliance and financial governance to cross-border advisory, our multidisciplinary team brings institutional-grade expertise to every engagement.',
      image: '/images/business-team.png',
      items: [
        'Chartered Accountants (ICAN)',
        'Tax & Regulatory Specialists',
        'Banking & Investment Experts',
        'Cross-Border Advisory'
      ]
    },
    main: {
      badge: 'What We Do',
      heading: 'Our Services',
      description:
        'Comprehensive advisory solutions designed to help you establish, grow, and sustain your business in Nigeria.',
      servicesList: [
        {
          icon: Building2,
          title: 'Business Setup & Market Entry',
          items: [
            'Company registration and branch setup',
            'Market research and feasibility support',
            'Regulatory guidance'
          ]
        },
        {
          icon: FileCheck,
          title: 'Tax & Compliance Advisory',
          items: [
            'Tax registration and advisory',
            'Compliance with Nigerian regulations',
            'Ongoing monitoring support'
          ]
        },
        {
          icon: Calculator,
          title: 'Accounting & Financial Structuring',
          items: [
            'Accounting system setup',
            'Cash flow management',
            'Internal controls for sustainable operations'
          ]
        },
        {
          icon: Landmark,
          title: 'Loan & Investment Facilitation',
          items: [
            'Business proposals and funding documents',
            'Cash flow projections and feasibility studies',
            'Bank-ready financial documentation',
            'Advisory for institutional financing'
          ]
        },
        {
          icon: Building,
          title: 'Banking & Institutional Liaison',
          items: [
            'Corporate banking setup support',
            'Liaison with regulatory institutions'
          ]
        },
        {
          icon: RefreshCw,
          title: 'Ongoing Advisory & Retainer Services',
          items: [
            'Monthly compliance oversight',
            'Financial health review',
            'Strategic advisory support',
            'Governance strengthening'
          ]
        }
      ]
    }
  },
  team: {
    badge: 'Our People',
    heading: 'Meet The Expert Team Members',
    description:
      'A multidisciplinary team with deep expertise in accounting, tax, finance, and cross-border business advisory.',
    members: [
      {
        name: 'Joy Ozua',
        role: 'Managing Director / Lead Consultant',
        photo: '/images/team-lead.png',
        bio: 'Licensed ICAN member, former CFO & Acting DG of the Nigerian-German Chamber of Commerce.',
        memberLinkedInUrl: 'https://www.linkedin.com/in/joy-ozua-10ba25117',
        memberEmailAddress: 'ozua@nextgenadvisorsltd.com'
      },
      {
        name: 'Adeyemi Oladipo',
        role: 'Tax & Compliance Officer',
        photo: '/images/team-member-2.png',
        bio: 'Specialist in Nigerian tax regulation, corporate compliance, and audit governance.',
        memberLinkedInUrl: '#',
        memberEmailAddress: '#'
      },
      {
        name: 'Chinelo Nwosu',
        role: 'Financial Analyst',
        photo: '/images/team-member-3.png',
        bio: 'Expert in cash-flow modelling, investment readiness, and financial structuring for SMEs.',
        memberLinkedInUrl: '#',
        memberEmailAddress: '#'
      }
    ]
  },
  testimonials: {
    badge: 'Testimonials',
    heading: 'What Our Customers Have to Say',
    description:
      'Trusted by diaspora investors, entrepreneurs, and foreign corporations building businesses in Nigeria.',
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
    badge: "Let's Talk",
    heading: 'Get in Touch',
    description:
      'We help diaspora investors, foreign corporations, and entrepreneurs build compliant, structured, and growth-ready businesses in Nigeria.',
    image: '/images/consulting.jpg',
    quote:
      '"Structured businesses attract sustainable success — let us help you build yours the right way."',
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
    heading: 'Ready to Build a Structured and Compliant Business in Nigeria?',
    description:
      'Let our expert team guide you from setup to sustainable growth. Book your free consultation today.',
    primaryButtonText: 'Get Started Today',
    primaryButtonLink: '#contact',
    secondaryButtonText: 'Explore Our Services',
    secondaryButtonLink: '#services'
  },
  footer: {
    description:
      'Helping businesses establish strong, compliant, and sustainable operations in Nigeria.',
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
  }
}
