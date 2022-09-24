import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Charts from '../Chart/Charts';

const Dashboard = () => {    

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content m-12">
                {/* <!-- Page content here --> */}
                <h1 className="text-2xl">Dashboard</h1>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet/>
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