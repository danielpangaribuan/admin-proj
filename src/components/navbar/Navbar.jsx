import React from 'react';
import "./navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="navbar-toggle">
                    <ReorderIcon />
                </div>

                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon"/>
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutIcon className="icon"/>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <img 
                            src="" 
                            alt="" 
                            className='avatar' 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;