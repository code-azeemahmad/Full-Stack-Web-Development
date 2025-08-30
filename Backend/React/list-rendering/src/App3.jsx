import React from "react";

function Todo({ todo }) {
  return (
    <div className="todo">
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
    </div>
  );
}

function App3() {
  const todos = [   // todos is an array of objects
    { id: 1, title: "Learn React", desc: "Start with basics" },
    { id: 2, title: "Build a project", desc: "Practice coding" },
    { id: 3, title: "Master Hooks", desc: "useState, useEffect, useRef" }
  ];

  return (
    <div>
        {/* list rendering in react*/}
      <h2>Todo List</h2>
      {todos.map((todo) => (        // Each object in the array is turned into a React element (<Todo />).
        <Todo key={todo.id} todo={todo} />          // Each <Todo /> is a child component.  
                                                    // You’re passing todo={todo} as a prop.
                                                    // Inside Todo, you read it with ({ todo }) and render its fields.
      ))}   
    </div>
  );
}

export default App3;
