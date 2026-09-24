
# 📝 Personal Task Manager (React + Fetch API)

A responsive task management dashboard built with **React**, **Tailwind CSS**, and the native browser **Fetch API**. 

This project demonstrates how to handle complete **CRUD operations** (Create, Read, Update, Delete) against a REST API, perform **optimistic UI updates**, and visualize real-time network requests using an integrated **API Network Inspector**.

---

## ✨ Features

- 🔄 **Full CRUD Operations:**
  - **GET:** Fetch tasks from a REST API (`JSONPlaceholder`).
  - **POST:** Add new tasks with server submission.
  - **PATCH:** Toggle task completion status.
  - **DELETE:** Remove tasks from the list.
- ⚡ **Optimistic UI Updates:** UI updates instantly for a smooth user experience while syncing with the server in the background (with automatic rollback on failure).
- 🔍 **Filtering & Search:** Real-time client-side search by task title and filtering by status (`All`, `Active`, `Completed`).
- 📊 **Progress Tracker:** Visual progress bar and counters calculating overall task completion metrics.
- 📡 **Live API Inspector:** Built-in terminal log viewer displaying HTTP methods (`GET`, `POST`, `PATCH`, `DELETE`), status codes, endpoints, and response payloads.
- 🎨 **Modern Dark UI:** Styled with **Tailwind CSS** and **Lucide React** icons.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 18+ (Vite)
- **Styling:** Tailwind CSS
- **Icon Set:** Lucide React
- **Data Fetching:** Native `fetch()` API
- **Mock REST API:** [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

---

## 📁 Project Structure

```text
task-manager-FetchAPI/
├── src/
│   ├── components/
│   │   ├── ApiLogViewer.jsx     # Live HTTP request/response inspector
│   │   ├── StatsOverview.jsx    # Completion counters and progress bar
│   │   ├── TaskFilter.jsx       # Search bar and status tabs
│   │   ├── TaskForm.jsx         # Input form for POSTing new tasks
│   │   └── TaskItem.jsx         # Individual task card with PATCH/DELETE actions
│   ├── hooks/
│   │   └── useTasks.js          # Custom hook for task state and optimistic updates
│   ├── services/
│   │   └── taskApi.js           # Isolated Fetch API requests (GET, POST, PATCH, DELETE)
│   ├── App.jsx                  # Main dashboard layout
│   ├── index.css                # Tailwind base directives
│   └── main.jsx                 # React root entry point
├── package.json
├── tailwind.config.js
└── vite.config.js

```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/?utm_source=gemini) installed (v16.x or later recommended).

### Installation

1. **Clone the repository:**
```bash
git clone [https://github.com/your-username/task-manager-FetchAPI.git](https://github.com/your-username/task-manager-FetchAPI.git)
cd task-manager-FetchAPI

```


2. **Install dependencies:**
```bash
npm install

```


3. **Start the development server:**
```bash
npm run dev

```


4. Open your browser and navigate to `http://localhost:5173`.

---

## 💡 How Fetch API is Implemented

All HTTP logic is isolated in `src/services/taskApi.js`:

```javascript
// Example: Performing a PATCH request to toggle task completion
export async function updateTask(id, updates) {
  const response = await fetch(`[https://jsonplaceholder.typicode.com/todos/$](https://jsonplaceholder.typicode.com/todos/$){id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(updates),
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  return response.json();
}

```

---

## 📄 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE&utm_source=gemini).

```

---

<ElicitationsGroup message="Next steps for your repository:">
  <Elicitation label="Show how to deploy this project to Vercel or Netlify" query="How do I deploy this Vite React app to Vercel for free?"/>
  <Elicitation label="Add a license file (MIT) to the repository" query="Provide the standard text for an MIT LICENSE file for this GitHub repository."/>
</ElicitationsGroup>

```