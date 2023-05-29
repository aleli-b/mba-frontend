import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../context/authContext';

export const UserAdmin = () => {
    const [users, setUsers] = useState();
    const [pages, setPages] = useState([]);
    const [active, setActive] = useState(0)
    useEffect(() => { getStreamers() }, []);
    const auth = useAuth()

    const getStreamers = async (page = 0) => {
        const users = await axios.get(`http://localhost:4000/users?page=${page}`);
        console.log(users.data.users);
        setUsers(users.data.users);
        const totalUsers = users.data.total;
        const totalPages = Math.ceil(totalUsers / 50);
        console.log(totalPages)
        const pageBtns = [];
        for (let i = 0; i < totalPages; i++) {
            pageBtns.push(
                <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 ${i === active ? 'active' : ''}`} key={i} onClick={() => {setActive(i); getStreamers(i)}}>
                    {i + 1}
                </button>
            )
        }
        setPages(pageBtns)
    }

return (
    <div className="overflow-x-auto">
        <table className="border-collapse table-auto w-full text-sm my-3">
            <thead>
                <tr>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">ID</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Group Name</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">User Name</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Has Story</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Gift Coins</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Host Wall Coins</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Friend Video Coins</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Task Coins</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Box Coins</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Total Coins (Apr 11th)</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Group Time</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Match Count</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Match Times Duration</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">KYC Pass</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Video Status</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Category</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Avg Friend Call Video Time (30 Days)</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Bank Country</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Long Call Ratio</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Total Coins (Apr 10th-Apr 11th)</th>
                </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-800">
                {users?.map((user) => (
                    <tr key={user.id}>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{user.id}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.group_name}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.user_name}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.is_have_story ? 'Yes' : 'No'}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user['gift coins']}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.host_wall_coins}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.friend_video_coins}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user['task coins']}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.box_coins}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user['total coins-Apr 11th']}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.group_time}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.match_count}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.match_times_duration}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.kyc_pass ? 'Yes' : 'No'}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.video_status}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.category}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user['avg_friend_call_video_time-30days']}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.bank_country_ab}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.long_call_ratio}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">{user['total coins-Apr 10th-Apr 11th']}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className='flex justify-center gap-3 my-3'>
            {pages}
        </div>
    </div>
)
}
