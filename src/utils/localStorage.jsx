import image1 from "../assets/employee.png";
import image2 from "../assets/women.png";

const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "arjun@me.com",
    password: "123",
    image: image1, // Assign specific image
    "attendance": {
      "today": "Present",
      "weekly": [5, 2], // 5 days present, 2 days absent
      "monthly": [20, 10], // 20 days present, 10 days absent
      "yearly": [240, 125] // 240 days present, 125 days absent
    },
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update website",
        taskDescription: "Revamp the homepage design",
        taskDate: "2024-10-12",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client meeting",
        taskDescription: "Discuss project requirements",
        taskDate: "2024-10-10",
        category: "Meeting",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix bugs",
        taskDescription: "Resolve bugs reported in issue tracker",
        taskDate: "2024-10-14",
        category: "Development",
      },
    ],
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "sneha@me.com",
    password: "123",
    image: image2, // Assign specific image
    "attendance": {
      "today": "Absent",
      "weekly": [4, 3],
      "monthly": [18, 12],
      "yearly": [230, 135]
    },
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database optimization",
        taskDescription: "Optimize queries for better performance",
        taskDate: "2024-10-11",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design new feature",
        taskDescription: "Create mockups for the new feature",
        taskDate: "2024-10-09",
        category: "Design",
      },
    ],
  },
  {
    id: 3,
    firstName: "Ravi",
    email: "ravi@me.com",
    password: "123",
    image: image1, // Assign specific image
    "attendance": {
      "today": "Present",
      "weekly": [6, 1],
      "monthly": [22, 8],
      "yearly": [250, 115]
    },
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare presentation",
        taskDescription: "Prepare slides for upcoming client presentation",
        taskDate: "2024-10-13",
        category: "Presentation",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code review",
        taskDescription: "Review the codebase for optimization",
        taskDate: "2024-10-12",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Test the latest build for bugs",
        taskDate: "2024-10-08",
        category: "QA",
      },
    ],
  },
  {
    id: 4,
    firstName: "Priya",
    email: "priya@me.com",
    password: "123",
    image: image2, // Assign specific image
    "attendance": {
      "today": "Absent",
      "weekly": [3, 4],
      "monthly": [15, 15],
      "yearly": [200, 165]
    },
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write documentation",
        taskDescription: "Update the project documentation",
        taskDate: "2024-10-13",
        category: "Documentation",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Set up CI/CD",
        taskDescription: "Implement continuous integration pipeline",
        taskDate: "2024-10-11",
        category: "DevOps",
      },
    ],
  },
  {
    id: 5,
    firstName: "Shiv",
    email: "shiv@me.com",
    password: "123",
    image: image1, // Assign specific image
    "attendance": {
      "today": "Present",
      "weekly": [4, 3],
      "monthly": [22, 8],
      "yearly": [230, 135]
    },
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI redesign",
        taskDescription: "Redesign the user interface for better UX",
        taskDate: "2024-10-14",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy new build",
        taskDescription: "Deploy the latest build to production",
        taskDate: "2024-10-09",
        category: "DevOps",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client feedback",
        taskDescription: "Gather feedback from clients after product launch",
        taskDate: "2024-10-12",
        category: "Support",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
