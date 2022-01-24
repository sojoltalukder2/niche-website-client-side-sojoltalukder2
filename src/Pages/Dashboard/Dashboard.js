import React, { useEffect, useState } from 'react';
import Navigation from '../../Components/Navigation';
import useAuth from '../../Hooks/useAuth';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';

const Dashboard = () => {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        fetch(`https://glacial-dawn-59195.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [user]);

    return (
        <div>
            <Navigation />
            {
                (userInfo.uType === 'general') ? <UserDashboard userInfo={userInfo}></UserDashboard> : <AdminDashboard userInfo={userInfo}></AdminDashboard>
            }
        </div>
    );
};

export default Dashboard;