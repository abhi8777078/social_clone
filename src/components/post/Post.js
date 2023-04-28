import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export default function Post() {
    return (
        <div className="post">
            <div className="postwrapper">
                <div className="posttop">
                    <div className="posttopleft">
                        <img
                            src="/assets/person/1.jpg.jpg"
                            alt=""
                            className="postprofile"
                        />
                        <span className="postusername">abhi singh</span>
                        <span className="postdate">5 min ago</span>
                    </div>
                    <div className="posttopright">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postcenter">
                    <span className="posttext">hey its my first post:)</span>
                    <img src="/assets/post/1.jpg.jpg" alt="" className="postImg" />

                </div>
                <div className="postbottom">
                    <div className="postbottomleft">
                        <img src="/assets/heart.png.png" alt="" className="likeIcon" />
                        <img src="/assets/like.png.png" alt="" className="likeIcon" />
                        <span className="postlikecounter">
                            32 people liked your post
                        </span>

                    </div>
                    <div className="postbottomright">
                        <span className="commentstext">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
