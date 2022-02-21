import CreatePost from "./Mypost/CreatePost/CreatePost";
import Mypost from "./Mypost/Mypost";
import s from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR-k79lKtAi4IcTRdHjoM9w8lJKDTJpxQsvA&usqp=CAU" />
      </div>
      <div> ava + description</div>
      <CreatePost />
      <Mypost />
    </div>
  );
};
export default MainPage;
