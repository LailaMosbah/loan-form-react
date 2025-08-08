# 🏦 Loan Request Form

A simple and responsive loan request form built using **React**. It includes client-side validation and provides immediate feedback to the user through a modal window.

---

## 🚀 Features

- 🔒 **Form validation:**
  - Name, Age, and Phone Number are required
  - Age must be a number between 17 and 80
  - Phone must be a number with 11–13 digits
  - If the user is an employee, salary range must be selected
  - If a salary range is selected, the employee checkbox must be checked
- ✅ Displays appropriate messages based on input validation
- 💬 Modal popup with success or error message
- 🖥️ Responsive and styled with custom CSS

---

## 🛠️ Technologies Used

- React
- CSS (custom styling)

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Form.jsx
│   └── Modal.jsx
├── styles/
│   ├── form.css
│   └── modal.css
└── App.jsx
```

---

## 🧪 How to Use

1. **Clone the repository:**

   ```bash
   git clone https://github.com/LailaMosbah/loan-form-react.git
   cd loan-form-react
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---
