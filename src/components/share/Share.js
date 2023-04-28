import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import TvIcon from '@mui/icons-material/Tv';
export default function Share() {
return (
    <div className="share">
        <div className="sharewrapper">
            <div className="sharetop">
                <img src="/assets/person/1.jpg.jpg" alt="" className="shareprofileImg" />
                <input placeholder="what is in your mind?" type="text" className="shareInput" />
            </div>
            <hr className="sharehr" />
            <div className="sharebutton">
            <div className="shareoption">
                <PermMediaIcon htmlColor="orange" className="shareIcon"/>
                <span className="shareoptiontext">Photo/Video</span>
            </div>
            <div className="shareoption">
                <AddLocationIcon htmlColor="blue" className="shareIcon"/>
                <span className="shareoptiontext">Tag</span>
            </div>
            <div className="shareoption">
                <EmojiEmotionsIcon htmlColor="green" className="shareIcon"/>
                <span className="shareoptiontext">Emoji</span>
            </div>
            <div className="shareoption">
                <TvIcon htmlColor="red" className="shareIcon"/>
                <span className="shareoptiontext">Live</span>
            </div>
            <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
)
}
