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
import {NavLink} from "react-router-dom";

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarListItem">
                            <NavLink to="/" className="sidebarListItemLink">
                                <HomeOutlined sx={{ color: "#6E3CBC" }} className='sidebarIcon' />
                                Home
                            </NavLink>
                        </li>
                        <li className="sidebarListItem">
                            <NavLink to="/sales" className="sidebarListItemLink">
                                <ShoppingCartOutlined  className='sidebarIcon' />
                                Sales
                            </NavLink>
                        </li>
                        <li className="sidebarListItem">
                            <NavLink to="/analytic" className="sidebarListItemLink">
                                <TimelineOutlined className='sidebarIcon' />
                                Analytics
                            </NavLink>
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Main Menu</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarListItem">
                            <NavLink to="/users" className="sidebarListItemLink">
                                <PeopleAltOutlined className='sidebarIcon' />
                                Users
                            </NavLink>
                        </li>
                        <li className="sidebarListItem">
                            <NavLink to="/products" className="sidebarListItemLink">
                                <Inventory2Outlined className='sidebarIcon' />
                                Products
                            </NavLink>
                        </li>
                        <li className="sidebarListItem">
                            <NavLink to="/transactions" className="sidebarListItemLink">
                                <ReceiptLongOutlined className='sidebarIcon' />
                                Transactions
                            </NavLink>
                        </li>
                        <li className="sidebarListItem">
                            <NavLink to="/reports" className="sidebarListItemLink">
                                <AssessmentOutlined className='sidebarIcon' />
                                Reports
                            </NavLink>
                        </li>
                    </ul>

                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarListItem">
                            <NavLink to="/messages" className="sidebarListItemLink">
                                <EmailOutlined className='sidebarIcon' />
                                Messages
                            </NavLink>
                        </li>
                        <li className="sidebarListItem">
                            <NavLink to="/feedback" className="sidebarListItemLink">
                                <ThumbUpAltOutlined className='sidebarIcon' />
                                Feedback
                            </NavLink>
                        </li>
                    </ul>

                    <h3 className="sidebarTitle">Preferences</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarListItem">
                            <NavLink to="/settings" className="sidebarListItemLink">
                                <SettingsOutlined className='sidebarIcon' />
                                Settings
                            </NavLink>
                        </li>
                        <li className="sidebarListItem">
                            <NavLink to="/account" className="sidebarListItemLink">
                                <AccountCircleOutlined className='sidebarIcon' />
                                Account
                            </NavLink>
                        </li>
                        <li className="sidebarListItem">
                            <NavLink to="/logout" className="sidebarListItemLink">
                                <LogoutOutlined className='sidebarIcon' />
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
