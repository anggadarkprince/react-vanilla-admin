import React from 'react'
import './Sidebar.css'
import {
    HomeOutlined,
    TimelineOutlined,
    ShoppingCartOutlined,
    PeopleAltOutlined,
    Inventory2Outlined,
    ReceiptLongOutlined,
    AssessmentOutlined,
    ThumbUpAltOutlined,
    EmailOutlined,
    SettingsOutlined,
    AccountCircleOutlined,
    LogoutOutlined,
} from '@mui/icons-material';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarListItem active">
                            <HomeOutlined sx={{ color: "#6E3CBC" }} className='sidebarIcon' />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <ShoppingCartOutlined  className='sidebarIcon' />
                            Sales
                        </li>
                        <li className="sidebarListItem">
                            <TimelineOutlined className='sidebarIcon' />
                            Analytics
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Main Menu</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarListItem">
                            <PeopleAltOutlined className='sidebarIcon' />
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <Inventory2Outlined className='sidebarIcon' />
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <ReceiptLongOutlined className='sidebarIcon' />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <AssessmentOutlined className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>

                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarListItem">
                            <EmailOutlined className='sidebarIcon' />
                            Messages
                        </li>
                        <li className="sidebarListItem">
                            <ThumbUpAltOutlined className='sidebarIcon' />
                            Feedback
                        </li>
                    </ul>

                    <h3 className="sidebarTitle">Preferences</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarListItem">
                            <SettingsOutlined className='sidebarIcon' />
                            Settings
                        </li>
                        <li className="sidebarListItem">
                            <AccountCircleOutlined className='sidebarIcon' />
                            Account
                        </li>
                        <li className="sidebarListItem">
                            <LogoutOutlined className='sidebarIcon' />
                            Logout
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
