# Lesson 03 – JavaScript Code Structure & Reusability

## 🎯 Objective

Learn to organize JavaScript code into reusable, maintainable pieces using functions and modules. This prepares you for scalable development and builds a strong foundation for frameworks like React.

---

## 📚 Topics Covered

- JavaScript functions:
  - Declaration
  - Parameters and return values
- DRY principle (Don't Repeat Yourself)
- Splitting logic into reusable pieces
- ES6 Modules:
  - `export` and `import`
  - Managing multiple files
- Structuring JS for better readability and maintenance

---

## 🛠️ Sample Application – Refactor To-Do App

### Goal:

Refactor the previous DOM-based to-do list app by:

- Moving logic into functions
- Creating multiple JS modules
- Keeping responsibilities separated

### Core Tasks:

- Create a `createTaskItem(taskText)` function to handle new task creation
- Separate logic into:
  - `todo.js`: Task-related logic
  - `utils.js`: Input validation and helper functions
  - `main.js`: Event bindings and app initialization
- Use `type="module"` in `<script>` to use `import`/`export`

---

## ✅ Assignment

1. Refactor the existing app using modular JavaScript
2. Use descriptive function names and small, single-purpose functions
3. Handle delete task functionality with delegated logic
4. Bonus:
   - Create an array to store current tasks
   - Add support for toggling "completed" state

---

## 📁 Folder Structure

<pre>
lesson-03/
├── index.html
├── style.css
├── js/
│   ├── main.js
│   ├── todo.js
│   └── utils.js
└── README.md
</pre>

## Expected output


---

## 🚀 Next Steps

In the next lesson, we will:

- Learn about localStorage
- Store tasks in browser storage
- Make tasks persistent across page refreshes
