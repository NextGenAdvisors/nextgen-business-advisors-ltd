# NexGen Business Advisors Ltd !

A modern, responsive corporate website for **NexGen Business Advisors Ltd** by Kavara Digital Global — a Nigerian business advisory firm delivering expert services in business setup, regulatory compliance, financial structuring, and investment readiness.

Built by [Kavara Digital Global](https://kavaradigital.online).

---

## ✨ Features

- **Hero Section** — Bold, animated landing area introducing the company's mission
- **About Section** — Company background, values, and leadership overview
- **Services Section** — Detailed breakdown of advisory service offerings
- **Contact Section** — Contact form and company information
- **Responsive Navbar** — Mobile-friendly navigation with smooth scroll links
- **Back to Top** — Quick-scroll button for improved UX
- **Dark-Mode Ready** — Theming via HSL design tokens and `next-themes`
- **Animations** — Smooth transitions and micro-interactions powered by Framer Motion

---

## 🛠 Tech Stack

| Layer         | Technology                                          |
| ------------- | --------------------------------------------------- |
| **Framework** | [React 18](https://react.dev)                       |
| **Bundler**   | [Vite](https://vitejs.dev)                          |
| **Language**  | [TypeScript](https://www.typescriptlang.org)        |
| **Styling**   | [Tailwind CSS](https://tailwindcss.com)             |
| **UI Kit**    | [shadcn/ui](https://ui.shadcn.com) (Radix primitives) |
| **Animation** | [Framer Motion](https://www.framer.com/motion)      |
| **Routing**   | [React Router v6](https://reactrouter.com)          |
| **Forms**     | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) |
| **Data**      | [TanStack Query v5](https://tanstack.com/query)     |
| **Charts**    | [Recharts](https://recharts.org)                    |
| **Testing**   | [Vitest](https://vitest.dev) + [Playwright](https://playwright.dev) |
| **Package Mgr** | [Bun](https://bun.sh)                            |

---

## 📧 Email Integration (Brevo)

### Why Brevo?
This project uses **Brevo** as its email service provider to handle transactional emails, specifically for contact form submissions. It was chosen for its reliable deliverability, straightforward API, and generous free tier, making it an ideal drop-in solution for our contact form implementation.

### How to Use It

1. **Obtain an API Key**: Sign up or log into [Brevo](https://www.brevo.com/), navigate to the **SMTP & API** section, and generate a new API key.
2. **Environment Variables**: You need to provide the necessary credentials for the Supabase Edge Function to function properly. Add the following to your environment variables or Supabase Secrets:
   ```env
   BREVO_API_KEY=your_brevo_api_key_here
   CONTACT_FROM_EMAIL=your_verified_sender_email@domain.com
   CONTACT_TO_EMAIL=destination_email_address@domain.com
   ```
3. **Usage in Edge Functions**: The project uses Supabase Edge Functions (`supabase/functions/contact-form-email`) to securely send requests to the Brevo API (`https://api.brevo.com/v3/smtp/email`) without exposing the API key on the frontend. The function processes the contact form payload and routes the email to the configured destination address.

---

## 📡 Uptime & Monitoring (Keep-Alive)

To prevent the Supabase Free Tier project from being paused due to inactivity, we use **UptimeRobot** to constantly ping the application and database endpoints. This ensures the database and associated Edge Functions remain "warm" and accessible at all times without cold start delays.

You can publicly monitor the site's uptime status here:
**[UptimeRobot Status Page](https://stats.uptimerobot.com/WYZYHGX5XP)**

---

## 📁 Project Structure

```text
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable React components
│   │   ├── ui/           # shadcn/ui primitives
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── BackToTop.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions (cn, etc.)
│   ├── pages/            # Route-level page components
│   ├── test/             # Unit and integration tests
│   ├── App.tsx           # Root application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles and Tailwind directives
├── index.html            # HTML shell
├── tailwind.config.ts    # Tailwind configuration
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or [Node.js ≥ 18](https://nodejs.org)

### Installation

```bash
# Clone the repository
git clone https://github.com/NextGenAdvisors/nextgen-business-advisors-ltd.git

# Navigate into the project
cd nextgen-business-advisors-ltd

# Install dependencies
bun install
```

### Development

```bash
# Start the dev server (default: http://localhost:8080)
bun run dev
```

### Build for Production

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

---

## 🧪 Testing

```bash
# Run unit tests
bun run test

# Run unit tests in watch mode
bun run test:watch
```

---

## 🧹 Linting

```bash
bun run lint
```

---

## 📄 License

This project is proprietary software developed by **Kavara Digital Global** for **NexGen Business Advisors Ltd**. All rights reserved.
