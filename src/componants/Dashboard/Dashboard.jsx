import React from 'react';
import Charts from '../Chart/Charts';

const Dashboard = () => {    

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content m-12">
                {/* <!-- Page content here --> */}
                <h1 className="text-2xl">Dashboard</h1>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Charts/>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-slate-100 text-base-content">
                    <h1 className="text-2xl mb-5">Visualization Dashboard</h1>
                    {/* <!-- Sidebar content here --> */}
                    <li className='bg-slate-200 mb-2 rounded-sm'><a>Chart Js</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;