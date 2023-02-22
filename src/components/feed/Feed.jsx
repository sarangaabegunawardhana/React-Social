import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"

export default function feed() {
  return (
    <div className="feed">
        <div className="feedWrapper">
          <Share/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
  )
}
