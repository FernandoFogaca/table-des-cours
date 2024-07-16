import React from 'react';
import { ItemL } from "./components/ItemL";
import './App.css';

export interface Course {
  name: string;
  description: string;
  instructor: string;
  id: number;
}

const courses: Course[] = [
  {
    id: 456,
    name: "React JS",
    description: "React JS & Typescript Course",
    instructor: "John Doe",
  },
  {
    id: 453,
    name: "JS & CSS Pro",
    description: "JS and CSS Pro Course",
    instructor: "Walter Benedict",
  },
  {
    id: 78,
    name: "Typescript",
    description: "Mastering Typescript",
    instructor: "Anders Hejlsberg",
  },
  {
    id: 35,
    name: "SQL Database",
    description: "Database Management System",
    instructor: "Michael Wildenius",
  }
];

function App() {
  return (
    <div className='container'>
      <h1>Table des Cours</h1>
      <ul>
        {courses.map((course, index) => (
          <ItemL course={course} key={course.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
