function App() {
  const name = "React Learner";
  const isLearning = true;

  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>{isLearning ? "You're doing great!" : "Keep going!"}</p>
    </div>
  );
}

export default App;
