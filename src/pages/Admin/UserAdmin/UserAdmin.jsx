import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../context/authContext';
import './UserAdmin.css'

export const UserAdmin = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState();
    const [pages, setPages] = useState([]);
    const [active, setActive] = useState(0)
    const auth = useAuth()

    useEffect(() => { getStreamers() }, []);

    const getStreamers = async (page = 0) => {
        try {
            setLoading(true)
            const users = await axios.get(`http://localhost:4000/users?page=${page}`);
            console.log(users.data.users);
            setUsers(users.data.users);
            const totalUsers = users.data.total;
            const totalPages = Math.ceil(totalUsers / 50);
            console.log(totalPages)
            const pageBtns = [];
            for (let i = 0; i < totalPages; i++) {
                pageBtns.push(i
                    // <button className={`bg-fuchsia-300 hover:bg-red-700 text-black text-sm px-4 py-2 border rounded-full ${i === active ? 'bg-gray-500' : ''}`} disabled={ i === active} key={i} onClick={() => { setActive(i); getStreamers(i); }}>
                    //     {i + 1}
                    // </button>
                )
            }
            setPages(pageBtns)
            setActive(page)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className=" bg-gray-700 flex flex-grow-1 items-center align-middle flex-col">
            {loading
                ?
                (
                    <div className="flex flex-grow-1 items-center justify-center h-full">
                        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                )
                :

                (

                    <table className="border-collapse table-auto w-full text-sm">
                        <thead>
                            <tr>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">#</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">ID</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Group Name</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">User Name</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Has Story</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Gift Coins</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Host Wall Coins</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Friend Video Coins</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Task Coins</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Box Coins</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Total Coins (Apr 11th)</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Group Time</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Match Count</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Match Times Duration</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">KYC Pass</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Video Status</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Category</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Avg Friend Call Video Time (30 Days)</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Bank Country</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Long Call Ratio</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pb-3 text-slate-400 dark:text-slate-200 text-left bg-gray-900">Total Coins (Apr 10th-Apr 11th)</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-800">
                            {users?.map((user, i) => (
                                <tr key={user.id}>
                                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{i + 1}</td>
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
                    </table>)
            }
            <div className='flex justify-center gap-3 my-3'>
                {pages.map((pageNumber) => (
                    <button
                        className={`bg-fuchsia-300 hover:bg-red-700 text-black text-sm px-4 py-2 border rounded-full ${pageNumber === active ? 'bg-gray-500' : ''
                            }`}
                        disabled={pageNumber === active}
                        key={pageNumber}
                        onClick={() => {
                            setActive(pageNumber);
                            getStreamers(pageNumber);
                        }}
                    >
                        {pageNumber + 1}
                    </button>
                ))
                } 

            </div>
        </div >
    )
}