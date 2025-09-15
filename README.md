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
## Use cases
1. Select Subject: Choose your subject from the dropdown menu or else you can keep your own number of Total classes
2. Input Data: The app displays:
  - Total Classes conducted
  - Required Percentage (typically 70-75%)
  - Classes Attended - input the value you actually attended the classes.
  - Classes Held - input the value, number of classes actually held.
3. Claculation Logic

```
    const totalClasses = parseInt(totalClasses) || 0;
    const rqPercent = parseInt(requiredPercent) || 0;
    const attended = parseInt(attended) || 0;
    const held = parseInt(held) || 0;

    if (held === 0) return "Please enter classes held > 0.";
    const percent = rqPercent / 100.0;
    const presentPer = (a / h) * 100;

    const remaining = totalClasses - held;
    const neededDouble = percent * totalClasses - attendedd;
    const needToAttend = Math.max(0, Math.ceil(neededDouble));
```

### User Manual
1. Getting Started

- Open the application in your web browser
- Select your subject from the "Choose Subject" dropdown
- The app will display your current attendance data

2. Understanding the Display

- Total Classes: Total number of classes conducted so far
- Required Percentage: Minimum attendance percentage required (usually 70%)
- Classes Attended: Number of classes you have attended
- Classes Held: Total classes held for the subject

3. Reading Results

- Green Background: Safe attendance level
- Current Percentage: Your present attendance percentage
- Bunk Limit: Maximum classes you can skip while maintaining the required percentage

4. Tips 

- Update your attendance data.
- Personal warning ~> "This is a calculated number, it may vary to real-time scenario"

## Quick start 
1. Prerequisites

- Web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for live demo

  **(install npm before start)**
2. Local Development

- Clone the repository
  ```
  git clone https://github.com/kowshikramtg/Attendance-Calculator.git
  cd Attendance-Calculator
  ```
- open in browser
  ```
  npm run dev
  ```
- **Contributing**
  ~> Contributes are welcome!
  1. Fork the repo
  2. Create a feature branch
     ```
     git checkout -b feature/amazing-feature
     ```
  3. commit your changes
     ```
     git commit -m 'Add some amazing feature'
     ```
  4. Push to the branch
     ```
     git push origin feature/amazing-feature
     ```
  5. Open a Pull request
- **Contributions Guidlines**
  - Add comments for complex logic
  - Follow existing code style and formatting
  - Test your changes thoroughly
  - Update documentation if needed
  - Be respectful and constructive in discussions
  - Be open for any review on your PRs. Don't feel discouraged / get upset on unmerged PRs.
## Acknowledgments
- Thanks to all contributions who have helped improve this project.
- Inspired by the need for simple Attendance Class Bunk.
- Thank you all, drop comments for any my-sided changes. 
