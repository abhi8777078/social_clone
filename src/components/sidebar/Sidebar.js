import "./sidebar.css"
import { RssFeed } from "@mui/icons-material"
import TagIcon from '@mui/icons-material/Tag';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
export default function Sidebar() {
return (
    <div className="sidebar">
        <div className="sidebarwrapper">
            <ul className="sidebarList">
                <li className="sidebarlistitem">
                    <RssFeed className="sidebarIcon" />
                    <span className="sidebarlistitemtext">Feed</span>
                </li>
                <li className="sidebarlistitem">
                    <TagIcon className="sidebarIcon" />
                    <span className="sidebarlistitemtext">Hashtag</span>
                </li>
                <li className="sidebarlistitem">
                    <BookmarkIcon className="sidebarIcon" />
                    <span className="sidebarlistitemtext">Bookmark</span>
                </li>
                <li className="sidebarlistitem">
                    <GroupIcon className="sidebarIcon" />
                    <span className="sidebarlistitemtext">Group</span>
                </li>
                <li className="sidebarlistitem">
                    <WorkIcon className="sidebarIcon" />
                    <span className="sidebarlistitemtext">Work</span>
                </li>
                <li className="sidebarlistitem">
                    <AddLocationIcon className="sidebarIcon" />
                    <span className="sidebarlistitemtext">Location</span>
                </li>
                <li className="sidebarlistitem">
                    <AddAPhotoIcon className="sidebarIcon" />
                    <span className="sidebarlistitemtext">Add Photo</span>
                </li>
            </ul>
            <button className="sidebarbutton">Show More</button>
            <hr className="sidebarhr" />
            <ul className="sidebarfriendlist">
                <li className="sidebarfriend">
                    <img src="/assets/person/2.jpg.jpg" alt="" className="sidebarfriendImg" />
                    <span className="sidebarfriendname">Jane Doe</span>
                </li>
                <li className="sidebarfriend">
                    <img src="/assets/person/2.jpg.jpg" alt="" className="sidebarfriendImg" />
                    <span className="sidebarfriendname">Jane Doe</span>
                </li>
                <li className="sidebarfriend">
                    <img src="/assets/person/2.jpg.jpg" alt="" className="sidebarfriendImg" />
                    <span className="sidebarfriendname">Jane Doe</span>
                </li>
                <li className="sidebarfriend">
                    <img src="/assets/person/2.jpg.jpg" alt="" className="sidebarfriendImg" />
                    <span className="sidebarfriendname">Jane Doe</span>
                </li>
                <li className="sidebarfriend">
                    <img src="/assets/person/2.jpg.jpg" alt="" className="sidebarfriendImg" />
                    <span className="sidebarfriendname">Jane Doe</span>
                </li>
                <li className="sidebarfriend">
                    <img src="/assets/person/2.jpg.jpg" alt="" className="sidebarfriendImg" />
                    <span className="sidebarfriendname">Jane Doe</span>
                </li>
                <li className="sidebarfriend">
                    <img src="/assets/person/2.jpg.jpg" alt="" className="sidebarfriendImg" />
                    <span className="sidebarfriendname">Jane Doe</span>
                </li>
                <li className="sidebarfriend">
                    <img src="/assets/person/2.jpg.jpg" alt="" className="sidebarfriendImg" />
                    <span className="sidebarfriendname">Jane Doe</span>
                </li>
                <li className="sidebarfriend">
                    <img src="/assets/person/2.jpg.jpg" alt="" className="sidebarfriendImg" />
                    <span className="sidebarfriendname">Jane Doe</span>
                </li>
                <li className="sidebarfriend">
                    <img src="/assets/person/2.jpg.jpg" alt="" className="sidebarfriendImg" />
                    <span className="sidebarfriendname">Jane Doe</span>
                </li>
            </ul>
        </div>
    </div>
)
}
