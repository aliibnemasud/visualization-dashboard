import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

    const today = new Date();

    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const timeAMPM = (date) => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    const time = timeAMPM(today);

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content m-12">
                {/* <!-- Page content here --> */}
                <div className='flex justify-between pr-5'>
                    <h1 className="text-2xl">Dashboard</h1>
                    <h2 className='shadow-lg py-2 px-3 border-2 border-blue-400 rounded-lg'>{date} | {time}</h2>
                </div>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-slate-200 text-base-content">
                    <h1 className="text-2xl my-8">Visualization Dashboard</h1>
                    {/* <!-- Sidebar content here --> */}
                    <li className='bg-slate-300 mb-2 rounded-sm'> <Link to="/dashboard" >Bar Chart Js</Link></li>
                    <li className='bg-slate-300 mb-2 rounded-sm'> <Link to="lineChart" >Line Chart</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;