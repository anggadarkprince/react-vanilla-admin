import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './Home.css'
import {userData} from '../../dummyData'
import WidgetSmall from '../../components/widgetsmall/WidgetSmall'
import WidgetLarge from '../../components/widgetlarge/WidgetLarge'

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" dataKey="activeUser" grid={false}/>
            <div className='homeWidgets'>
                <WidgetSmall/>
                <WidgetLarge/>
            </div>
        </div>
    )
}
