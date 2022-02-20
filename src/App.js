import "./App.css";
import Header from "./Components/Header";
import Navigationbar from "./Components/Navigationbar";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
       <Header/>
       <Navigationbar/>
       <Profile/>
    </div>
  );
};

export default App;
