import Student from "./Student";

function App() {
  // Simple event function
  const showMessage = () => {
    alert("Button Clicked!");
  };

  return (
    <>
      <h1>Student info</h1>
      <button onClick={showMessage}>
        Click Me
      </button>
      <Student name="Prachi" age="20" course="AIML" />
    </>
  )
}
export default App;
