Thanks for sharing the folder structure! Based on the image and the stack you're using (**React + Redux Toolkit + Tailwind CSS + TypeScript**), here’s an updated and more accurate `README.md` for your project:

---

# 📝 Todo Web Application

A clean, modern, and theme-switchable Todo App built using **React**, **Redux Toolkit**, **TypeScript**, and **Tailwind CSS**. It allows users to manage tasks efficiently while persisting data in **localStorage**.

## 🚀 Features

- ✅ Add new todos
- 🗑️ Delete existing todos
- ✔️ Mark todos as completed
- 🔁 Update todo text
- 📋 Show all tasks
- 🟢 Filter completed tasks
- 🔴 Filter incompleted tasks
- 🧹 Clear all todos
- 🌗 Toggle between light and dark themes
- 💾 Persistent data using `localStorage`

---

## 🛠️ Tech Stack

- **React** with **TypeScript**
- **Redux Toolkit** for state management
- **Tailwind CSS** for styling
- **Vite** for fast builds
- **LocalStorage** for persistence

---

## 📁 Project Structure

```bash
src/
├── components/           # All reusable UI components
│   ├── AddTodo.tsx
│   ├── AllTodos.tsx
│   ├── Filter.tsx
│   └── Header.tsx
│
├── store/                # Redux store configuration
│   ├── slices/           # Redux slices
│   │   ├── FilterSlice.ts
│   │   ├── ThemeSlice.ts
│   │   └── TodoSlice.ts
│   └── store.tsx         # Combines all reducers
│
├── App.tsx               # Root component
├── index.css             # Tailwind CSS imports
├── main.tsx              # App entry point
```

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/todo-web-app.git
cd todo-web-app

# Install dependencies (using pnpm)
pnpm install

# Start the development server
pnpm dev
```

> The app will run at `http://localhost:5173` (if using Vite default port).

---

## 🧠 How It Works

- **State** is managed using Redux slices:
  - `TodoSlice.ts`: handles all todo logic (add, delete, update, toggle).
  - `FilterSlice.ts`: manages the filter state (all, completed, incompleted).
  - `ThemeSlice.ts`: toggles between light and dark themes.
- **LocalStorage** is used to persist todos and theme.
- **Tailwind CSS** is used for responsive, clean, and theme-aware UI.
- **React Hooks** (`useSelector`, `useDispatch`) connect UI with state.

---

## 🔧 Scripts

| Command       | Description                |
|---------------|----------------------------|
| `pnpm dev`    | Start the dev server       |
| `pnpm build`  | Create a production build  |
| `pnpm preview`| Preview production build   |
| `pnpm lint`   | Run ESLint (if configured) |

---
