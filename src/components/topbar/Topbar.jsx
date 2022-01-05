import React from 'react'
import "./Topbar.css"
import {
    NotificationsOutlined,
    TranslateOutlined,
    SettingsOutlined,
    FiberSmartRecordOutlined
} from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className='topLogo'>
                        <FiberSmartRecordOutlined /> &nbsp; Vanilla Admin
                    </span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsOutlined />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <TranslateOutlined />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsOutlined />
                    </div>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
