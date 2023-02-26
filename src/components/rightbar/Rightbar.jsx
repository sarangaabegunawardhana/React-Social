import Online from "../online/Online"
import "./rightbar.css"
import { Users } from "../../dummyData";

export default function Rightbar({profile}) {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola poster</b> and <b>3 others friends</b> have a birthday today
            </span>
        </div>
        <img className="rightbarAd" src="/assets/post/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
