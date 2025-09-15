# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  
## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Attendance - Bunk Calculator
A smart and real-world problem solving web application that helps students calculate their attendance percentage and determine how many classes they can safely skip while maintaining the minimum required attendance for specific subject.
## preview
![preview](./src/assets/attendance.png)

## Features
- Subject Selection: Choose from multiple subjects with dropdown menu, or else keep Total classes as your choice.
- Real-time Calculation: Instant attendance percentage calculation.
- Smart Bunk Calculator: Calculate maximum classes you can skip while maintaining required percentage.
- Responsive Design: Works seamlessly on desktop and mobile devices.
- Clean UI: Minimalist and user-friendly interface for better and effecient use.
## Demo
Visit the live application, and try it ~> [https://attendance-calculator-six.vercel.app/](https://attendance-calculator-six.vercel.app/)

## Tech stack
- Frontend: JavaScript (React JS), HTML5, TailwindCSS
- Styling: some inline CSS with modern design principles
- Deployment: Vercel
- Version Control: Git & GitHub
## User guide
1. Select Subject: Choose your subject from the dropdown menu or else you can keep your own number of Total classes
2. Input Data: The app displays:
  - Total Classes conducted
  - Required Percentage (typically 70-75%)
  - Classes Attended - input the value you actually attended the classes.
  - Classes Held - input the value, number of classes actually held.
3. Claculation Logic

```
Present % = (Classes Attended / Classes Held) × 100
Max Bunk Classes = Classes that can be skipped while maintaining required percentage
```
