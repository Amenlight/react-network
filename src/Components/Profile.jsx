import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR-k79lKtAi4IcTRdHjoM9w8lJKDTJpxQsvA&usqp=CAU" />
      </div>
      <div className={classes.item}>ava + description</div>
      <div className={classes.item} >My post</div>
      <div className={classes.item}>New post</div>
      <div className={classes.item}>post 1</div>
      <div className={classes.item}>post 2</div>
      <div className={classes.item}>post 3</div>
    </div >
  )
}
export default Profile;