import UserGreeting from "./UserGreeting.jsx";


function App() {
  return (
    <div>
        <UserGreeting isLoggedIn={true} username="redaalalach"/>
        <UserGreeting/>
    </div>
  );
}

export default App;
