import "./App.css";

function App2() {
  
    const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes", "🍊 Orange"];
  

  return (
    <div>
      <h2>Fruits List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>   // key is important!   
        ))}
      </ul>
    </div>
  );
}

export default App2;

// The key prop is not visible in the DOM; it is a special property React uses internally.