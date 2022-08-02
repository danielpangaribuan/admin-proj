import React from 'react';
import "./sidebar.css";
import ClassIcon from '@mui/icons-material/Class';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();

    const renderDummyNavigation = () => {
        let navigationDummy = [];
        for ( let i = 0; i < 15; i++ ) {
            navigationDummy.push(
                <li key={`dummyNav${i}`}>
                    <ClassIcon className="icon"/>
                    <span>Dummy Navigation</span>
                </li>
            )
        }
        return navigationDummy;
    }

    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">
                    <strong>Admin</strong>LTE
                </span>
            </div>
            <div className="center">
                <div className="center-header">
                    <div className="profile">
                        <div className="profile-image">
                            <Avatar alt="D" />
                        </div>
                        <div className="profile-description">
                            <div className="profile-name">
                                Daniel Parlindungan
                            </div>
                            <div className="profile-status">
                                Online
                            </div>
                        </div>
                    </div>
                    <div className="search-navigation">
                        <div className="form-search-box">
                            <input type="search" placeholder='Search...'/>
                            <SearchOutlinedIcon className="icon-search" />
                        </div>
                    </div>
                </div>
                <div className="mainNavigation">
                    Main Navigation
                </div>
                <ul>
                    <li onClick={ () => navigate('/')}>
                        <ClassIcon className="icon"/>
                        <span>List Genre</span>
                    </li>
                    <li onClick={ () => navigate('/movie')}>
                        <LiveTvIcon className="icon"/>
                        <span>List Movie</span>
                    </li>
                    { renderDummyNavigation() }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;