import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from "react-icons/bs"
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, LineChart } from "recharts";
const Home = () => {
    const data = [
        {
          name: 'Page A',
          uv: 450,
          pv: 240,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 24,
          pv: 139,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 33,
          pv: 980,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 56,
          pv: 390,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 250,
          pv: 480,
          amt: 2181,
        },
      ];
  return (
    <main className='main-container'> 
        <div className='main-title'>
            <h3> DASHBOARD </h3>
        </div>

        <div className='main-cards'> 
            <div className='card'>
                <div className='card-inner'>
                    <h3> PRODUCTS </h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1> 450 </h1>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3> CATEGORIES </h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1> 24 </h1>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3> CUSTOMERS </h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1> 33 </h1>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3> ALERTS </h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1> 56 </h1>
            </div>
        </div>

        <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home