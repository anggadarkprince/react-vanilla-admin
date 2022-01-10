import React from 'react'
import './Chart.css'
import { LineChart, AreaChart, Area, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({title, data, dataKey, grid}) {

    return (
        <div className='chart'>
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width='100%' aspect={4}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey='name' stroke='#5550bd' />
                    <Area type="monotone" dataKey={dataKey} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
                    <Tooltip/>
                    {grid && <CartesianGrid vertical={false} stroke='#e0dfdf' height={100} strokeWidth={0.5} strokeDasharray='7 5' />}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
