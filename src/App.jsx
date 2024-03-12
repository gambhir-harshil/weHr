import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
