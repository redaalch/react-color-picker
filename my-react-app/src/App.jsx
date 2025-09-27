import Students from "./Students.jsx";

function App() {
  return (
    <div>
      <Students name="reda" age={30} isStudent={true} />
      <Students name="patrick" age={42} isStudent={false} />
      <Students name="Squidward" age={50} isStudent={false} />
      <Students name="sandy" age={27} isStudent={true} />
      <Students />
    </div>
  );
}

export default App;
