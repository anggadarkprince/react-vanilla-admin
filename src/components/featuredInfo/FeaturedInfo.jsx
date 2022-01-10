import React from 'react'
import './FeaturedInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AddchartIcon from '@mui/icons-material/Addchart';
import {AccountCircleOutlined} from "@mui/icons-material";

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">
                    <MonetizationOnOutlinedIcon className='featuredIcon'/> Revenue
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,334</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon fontSize="small" className="featuredIconArrow negative" /></span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">
                    <ShoppingCartCheckoutIcon className='featuredIcon'/> Sales
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,545</span>
                    <span className="featuredMoneyRate">-3.4 <ArrowDownwardIcon fontSize="small" className="featuredIconArrow negative" /></span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">
                    <AddchartIcon className='featuredIcon'/> Cost
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,545</span>
                    <span className="featuredMoneyRate">5.1 <ArrowUpwardIcon fontSize="small" className="featuredIconArrow" /></span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">
                    <AccountCircleOutlined className='featuredIcon'/> Members
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">3,230</span>
                    <span className="featuredMoneyRate">34 <ArrowUpwardIcon fontSize="small" className="featuredIconArrow" /></span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
        </div>
    )
}
