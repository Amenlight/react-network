import "./App.css";
import Header from "./Components/Header/Header";
import Navigationbar from "./Components/Navigationbar/Navigationbar";
import Profile from "./Components/Profile/Profile";

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
