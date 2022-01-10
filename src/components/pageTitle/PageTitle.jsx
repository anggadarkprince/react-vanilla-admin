import React from 'react'
import './PageTitle.css'

export default function PageTitle({title, subtitle, actions = []}) {
    return (
        <div className="pageTitleWrapper">
            <div>
                <h1 className="pageTitle">{title}</h1>
                {subtitle && <span className="pageSubTitle">{subtitle}</span>}
            </div>
            {actions}
        </div>
    )
}
