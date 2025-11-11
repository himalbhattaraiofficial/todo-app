# To-Do App 📝

A simple and intuitive To-Do application built with React and Tailwind CSS. This project allows users to easily manage their tasks by adding, deleting, and marking them as complete. It leverages local storage to persist data between sessions, ensuring that your To-Do list is always up-to-date.

## 🚀 Key Features

- **Add Tasks:** Easily add new tasks to your To-Do list with a simple input field.
- **Delete Tasks:** Remove tasks from your list with a single click.
- **Toggle Completion Status:** Mark tasks as complete or incomplete to track your progress.
- **Persistent Data:** Your To-Do list is saved in your browser's local storage, so it's always there when you return.
- **Responsive Design:** Built with Tailwind CSS for a clean and responsive user interface.
- **Pending/Completed Counts:** See at a glance how many tasks are pending and how many are completed.

## 🛠️ Tech Stack

*   **Frontend:**
    *   React
    *   React DOM
*   **Styling:**
    *   Tailwind CSS
*   **Build Tool:**
    *   Vite
*   **Linting:**
    *   ESLint
*   **Other:**
    *   JavaScript (ES Modules)
    *   Local Storage (for data persistence)

## 📦 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

*   Node.js (version 18 or higher)
*   npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd todo-app
    ```

2.  Install the dependencies:

    ```bash
    npm install # or yarn install
    ```

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev # or yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:5173` (or the port Vite specifies).

## 💻 Usage

1.  Enter a new task in the input field and press Enter or click the add button.
2.  Click the tick or cross icon to toggle the completion status of a task.
3.  Click the delete icon to remove a task from the list.

## 📂 Project Structure

```
todo-app/
├── src/
│   ├── assets/
│   │   ├── delete.png
│   │   ├── not_tick.png
│   │   ├── tick.png
│   │   └── todo_icon.png
│   ├── components/
│   │   ├── Todo.jsx
│   │   └── TodoItems.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

