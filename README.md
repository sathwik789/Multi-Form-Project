# 🧾 Multi-Step Form with Backend Integration

This is a full-stack multi-step form application built with **React (Vite)** on the frontend and **Node.js with Express** on the backend. It collects user data through a series of steps (Personal, Contact, Educational) with a progress bar, shows a summary, and stores the submitted data into a JSON file.

---

## 🚀 Features

- 🔄 Multi-step form with progress tracking
- 🧠 Form data preserved across steps
- 📋 Final summary screen before submission
- 📡 POST request to Node.js backend
- 💾 Stores submitted data in `data.json` file
- 🎯 Clean, responsive UI using TailwindCSS

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express
- File System (for data storage)

---

## 📦 Folder Structure

Multi-Form/
├── client/ # Frontend (Vite + React)
└── server/ # Backend (Node.js + Express)

yaml
Copy
Edit

---

## 🧑‍💻 Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/multi-step-form.git
cd multi-step-form
2. Install Frontend Dependencies
bash
Copy
Edit
cd client
npm install
3. Install Backend Dependencies
bash
Copy
Edit
cd ../server
npm install
▶️ Run the App
Start the Backend
bash
Copy
Edit
cd server
node index.js
Start the Frontend
bash
Copy
Edit
cd client
npm run dev
⚠️ Ensure the backend is running on http://localhost:5000

📬 API Endpoint
POST /submit

Receives form data and appends it to data.json

🧾 Example Submission Format
json
Copy
Edit
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "qualification": "B.Tech",
  "university": "XYZ University"
}
📄 License
This project is open-source and free to use.

🙌 Acknowledgements
Made with ❤️ using React and Node.js

yaml
Copy
Edit

---

Would you like me to:
- Add this file automatically to your project directory?
- Tailor the content for deployment instructions (e.g. Render, Vercel, or Railway)?
