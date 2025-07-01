# Strategic Insight — Frontend

This is the frontend application of **Strategic Insight**, a GenAI-powered platform that enables users to chat with their documents (PDF or text) and gain instant strategic insights.

Built using **Next.js**, **TypeScript**, **ShadCN UI**, and **Zustand**, the frontend provides a seamless user experience for uploading documents, authentication, and interacting with the AI-powered chat interface.

---

## 🚀 Features

- 🔐 Firebase Authentication (Signup/Login with email)
- 📤 Upload PDF or Text files directly to S3
- 💬 Real-time AI chat interface
- 🧠 Seamless integration with backend-powered LLM (Gemini)
- 🗃 Zustand store for efficient state management
- 💅 Modern UI with ShadCN & TailwindCSS

---

## 🧱 Tech Stack

- **Framework**: Next.js (App Router, TypeScript)
- **UI Library**: ShadCN UI (Tailwind CSS)
- **State Management**: Zustand
- **Auth**: Firebase Authentication
- **API Requests**: Axios
- **Storage**: AWS S3 (via backend signed URLs)

---

## 📸 Pages

- `/signup` – Register new users
- `/login` – Login existing users
- `/upload` – Upload PDF/text files
- `/chat` – Chat with your document
- `/` – Landing Page

---

## 🛠 Setup Instructions

```bash
# Clone the frontend repo
git clone https://github.com/your-username/strategic-insight-frontend.git
cd strategic-insight-frontend

# Install dependencies
npm install

# Set environment variables
touch .env.local


.env.local examples
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000

# Run the development server
npm run dev

# Folder Structure
.
├── app/
├── components/
├── lib/
├── store/         # Zustand stores
├── types/
└── utils/

🤝 Author
Priyanshu Kumar
