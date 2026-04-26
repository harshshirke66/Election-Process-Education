<div align="center">

<img src="public/favicon.svg" width="72" />

<h1>E-Process Ed</h1>

<p><strong>Election Education Assistant — Built for Bharat</strong></p>

<p><em>900 million voters. One platform. Zero confusion.</em></p>

<br/>

<p><strong>🌐 Live URL:</strong> http://electionprocesseducation.vercel.app/</p>

<br/>

[![Live Demo](https://img.shields.io/badge/LIVE%20DEMO-%23FF6B35?style=for-the-badge&logoColor=white)](https://github.com/harshshirke66/Election-Process-Education)
[![MIT License](https://img.shields.io/badge/MIT%20LICENSE-%2300C896?style=for-the-badge)](./LICENSE)
[![Report Bug](https://img.shields.io/badge/REPORT%20BUG-%23FF3366?style=for-the-badge)](https://github.com/harshshirke66/Election-Process-Education/issues)

<br/>

![React](https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_v4-0F172A?style=flat-square&logo=tailwindcss&logoColor=38BDF8)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini_2.5_Flash-4285F4?style=flat-square&logo=google&logoColor=white)

</div>

---

## What is this?

India runs the largest democratic election on Earth. Yet millions of first-time voters walk into a polling booth having never read a single line of Election Commission documentation — because it's 200 pages of bureaucratic language buried in government PDFs.

**E-Process Ed** tears that wall down. It turns dense ECI guidelines into an interactive, AI-powered, multilingual civic education platform — built with a bold Neobrutalist UI that commands the same attention democracy deserves.

---

## Features

| | Feature | Description |
|---|---|---|
| `AI` | **Civic Assistant** | Gemini 2.5 Flash, hard-scoped to ECI guidelines. No hallucinations, no off-topic drift. |
| `UX` | **Election Journey** | Scroll-triggered, `framer-motion` animated timeline of the complete voting process. |
| `i18n` | **Language Portal** | 10+ Indian languages via a custom-built persistent selector — not a browser plugin. |
| `CTA` | **Voter Onboarding** | 5-step guide for first-time voters that lands directly on the official NVSP Form 6. |
| `EDU` | **Knowledge Quiz** | Interactive voter literacy test with dynamic progress and instant feedback. |
| `UI` | **Neobrutalist Design** | Hard borders, offset shadows, neon accents. High-contrast, WCAG AA compliant. |

---

## Tech Stack

```
React 18 + Vite          →  UI layer with fast HMR and optimized production builds
TypeScript               →  Strict typing across all components and API interfaces
Tailwind CSS v4          →  Utility-first styling powering the Neobrutalist design system
Framer Motion            →  Viewport-triggered animations and scroll-linked transitions
@google/generative-ai    →  Direct Gemini 2.5 Flash integration for the chatbot
Lucide React             →  Consistent, tree-shakeable SVG icon set
```

---

## Getting Started

**Prerequisites:** Node.js ≥ 18 · npm · [Gemini API Key](https://aistudio.google.com/)

**1. Clone & install**

```bash
git clone https://github.com/harshshirke66/Election-Process-Education.git
cd Election-Process-Education
npm install
```

**2. Configure environment**

```bash
cp .env.example .env
```

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

**3. Run**

```bash
npm run dev       # → http://localhost:5173
npm run build     # production build → /dist
npm run preview   # preview the production build
```

---

## Project Structure

```
src/
├── components/
│   ├── ChatBot/        ← Gemini-powered civic assistant
│   ├── Journey/        ← Animated election timeline
│   ├── Quiz/           ← Knowledge assessment
│   └── VoterPortal/    ← First-time voter 5-step guide
├── hooks/              ← Custom React hooks
├── lib/                ← API clients & utilities
└── App.tsx
```




<div align="center">

<br/>

*Every vote is a line of code in the world's largest program.*
*Make sure yours compiles.*

<br/>

**Open Source · Built in India · For Every Voter**

<br/>

[Issues](https://github.com/harshshirke66/Election-Process-Education/issues) · [Discussions](https://github.com/harshshirke66/Election-Process-Education/discussions) · [Pull Requests](https://github.com/harshshirke66/Election-Process-Education/pulls)

</div>
