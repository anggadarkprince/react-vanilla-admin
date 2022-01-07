import React from 'react'
import './WidgetSmall.css'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export default function WidgetSmall() {
    return (
        <div className='widgetSmall'>
            <span className='widgetSmallTitle'>New Join Members</span>
            <ul className='widgetSmallList'>
                <li className="widgetSmallListItem">
                    <div className='widgetSmallProfile'>
                        <img src='https://www.w3schools.com/howto/img_avatar.png' alt='Avatar' className='widgetSmallImg'/>
                        <div className="widgetSmallUser">
                            <div className='widgetSmallUsername'>Angga Ari Wijaya</div>
                            <div className='widgetSmallUserTitle'>Software Engineer</div>
                        </div>
                    </div>
                    <button className="widgetSmallButton">
                        <VisibilityOutlinedIcon className='widgetSmallIcon'/> View
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <div className='widgetSmallProfile'>
                        <img src='https://www.w3schools.com/howto/img_avatar.png' alt='Avatar' className='widgetSmallImg'/>
                        <div className="widgetSmallUser">
                            <div className='widgetSmallUsername'>Angga Ari Wijaya</div>
                            <div className='widgetSmallUserTitle'>Software Engineer</div>
                        </div>
                    </div>
                    <button className="widgetSmallButton">
                        <VisibilityOutlinedIcon className='widgetSmallIcon'/> View
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <div className='widgetSmallProfile'>
                        <img src='https://www.w3schools.com/howto/img_avatar.png' alt='Avatar' className='widgetSmallImg'/>
                        <div className="widgetSmallUser">
                            <div className='widgetSmallUsername'>Angga Ari Wijaya</div>
                            <div className='widgetSmallUserTitle'>Software Engineer</div>
                        </div>
                    </div>
                    <button className="widgetSmallButton">
                        <VisibilityOutlinedIcon className='widgetSmallIcon'/> View
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <div className='widgetSmallProfile'>
                        <img src='https://www.w3schools.com/howto/img_avatar.png' alt='Avatar' className='widgetSmallImg'/>
                        <div className="widgetSmallUser">
                            <div className='widgetSmallUsername'>Angga Ari Wijaya</div>
                            <div className='widgetSmallUserTitle'>Software Engineer</div>
                        </div>
                    </div>
                    <button className="widgetSmallButton">
                        <VisibilityOutlinedIcon className='widgetSmallIcon'/> View
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <div className='widgetSmallProfile'>
                        <img src='https://www.w3schools.com/howto/img_avatar.png' alt='Avatar' className='widgetSmallImg'/>
                        <div className="widgetSmallUser">
                            <div className='widgetSmallUsername'>Angga Ari Wijaya</div>
                            <div className='widgetSmallUserTitle'>Software Engineer</div>
                        </div>
                    </div>
                    <button className="widgetSmallButton">
                        <VisibilityOutlinedIcon className='widgetSmallIcon'/> View
                    </button>
                </li>
            </ul>
        </div>
    )
}
