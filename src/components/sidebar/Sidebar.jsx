import React from 'react';
import "./sidebar.css";
import ClassIcon from '@mui/icons-material/Class';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();

    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">MyAdmin</span>
            </div>
            <div className="center">
                <ul>
                    <li onClick={ () => navigate('/')}>
                        <ClassIcon className="icon"/>
                        <span>List Genre</span>
                    </li>
                    <li onClick={ () => navigate('/movie')}>
                        <LiveTvIcon className="icon"/>
                        <span>List Movie</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;