import "./App.css";
import Users from "./components/Users";
import NewUser from "./components/NewUser";
import UsersProvider from "./context/UsersContext";

// 17th, 18th June, 2024 - Quarbani Eid Day Night 🎉

// === useContext ====
// 1. Create Context - createContext()
// 2. Provide Context
// 3. Use the Context
function App() {
  
  return (
    <>
      <UsersProvider>
        <h1>User Management App</h1>
        <NewUser />
        <br></br>
        <Users />
      </UsersProvider>
    </>
  );
}

export default App;
