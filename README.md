# NextGen Business Advisors Ltd

A modern, responsive corporate website for **NextGen Business Advisors Ltd** — a Nigerian business advisory firm delivering expert services in business setup, regulatory compliance, financial structuring, and investment readiness.

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
git clone https://github.com/your-org/nextgen-business-advisors-ltd.git

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

This project is proprietary software developed by **Kavara Digital Global** for **NextGen Business Advisors Ltd**. All rights reserved.
