import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavigationBar />
      <div className="app-wrapper-content">
        <MainPage />
      </div>
    </div>
  );
};

export default App;
