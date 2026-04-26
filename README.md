<div align="center">
  <img src="public/favicon.svg" alt="E-Process Ed Logo" width="120" />

  # E-Process Ed: Election Education Assistant
  **Empowering citizens through transparent, accessible, and interactive democratic education.**

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Gemini AI](https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://deepmind.google/technologies/gemini/)
</div>

<br />

## 🌟 The Vision

**E-Process Ed** is a production-ready, highly interactive web application designed to demystify the Indian electoral process. Built with a stunning **Neobrutalist UI** aesthetic, it targets first-time voters and curious citizens, transforming complex bureaucratic procedures into engaging, bite-sized digital experiences. 

From interactive polling journey timelines to real-time AI assistance, this platform ensures no citizen is left behind.

---

## ⚡ Core Features

- 🌐 **True Multilingual Support**: Seamless integration with Google Translate, offering 10+ regional Indian languages via a custom-built, persistent language selection portal.
- 🤖 **Gemini 2.5 Flash AI Assistant**: A context-aware chatbot trained strictly on Election Commission guidelines to provide instant, accurate answers about VVPATs, EVMs, and registration.
- 🛣️ **Interactive Election Journey**: A beautifully animated, scroll-triggered timeline explaining the voting process step-by-step using `framer-motion`.
- 📝 **First-Time Voter Portal**: A dedicated 5-step guide bridging the gap between education and action, linking directly to the official NVSP Form 6 registration.
- 🎯 **Knowledge Assessment**: A fully interactive quiz system to test voter literacy, featuring dynamic progress bars and instant feedback.
- 🎨 **Premium Neobrutalism**: High-contrast, accessibility-first design utilizing harsh borders, deep solid shadows, and vibrant neon accents to command user attention.

---

## 🛠️ Architecture & Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React 18 + Vite | Lightning-fast HMR and optimized production builds. |
| **Language** | TypeScript | Strict type-safety and robust component interfaces. |
| **Styling** | Tailwind CSS v4 | Utility-first CSS powering the Neobrutalist design tokens. |
| **Animations** | Framer Motion | Fluid viewport-triggered animations and layout transitions. |
| **Icons** | Lucide React | Consistent, scalable vector iconography. |
| **AI Integration** | `@google/generative-ai` | Direct integration with Gemini 2.5 Flash for the Chatbot. |

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18+) and npm installed on your machine. You will also need a free **Google Gemini API Key**.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/harshshirke66/Election-Process-Education.git
   cd Election-Process-Education
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Rename the `.env.example` file to `.env` and paste in your Gemini API Key:
   ```env
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   *Your app will be running at `http://localhost:5173`*

---

## 🔒 Privacy First

E-Process Ed is built on the principles of **Zero Data Collection**:
- ❌ No tracking cookies or third-party analytics.
- ❌ No Personally Identifiable Information (PII) is stored.
- ✅ Local Storage is used *exclusively* for saving user language preferences.
- ✅ AI Chat queries are processed securely by Google Gemini without local database logging.

---

<div align="center">
  <b>Made for Democracy. Built for the Future.</b> <br/>
  <i>Open Source & Proud</i>
</div>
