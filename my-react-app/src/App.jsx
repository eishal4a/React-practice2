import Greeting from "./greeting";

function App() {
  const name = "React Learner";
  const isLearning = true;

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <Greeting name= "Eishal"/>
    </div>
  );
}

export default App;
