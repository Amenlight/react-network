import Mypost from './Mypost/Mypost';
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR-k79lKtAi4IcTRdHjoM9w8lJKDTJpxQsvA&usqp=CAU" />
      </div>
      <div className={classes.item}>ava + description</div>
      <div className={classes.item} >My post</div>
      <Mypost />
    </div >
  )
}
export default Profile;