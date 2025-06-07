import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const InstructorRoute = () => {
    const { user } = useSelector((state) => state.auth);

    return user?.role === 'instructor' ? <Outlet /> : <Navigate to="/" />;
};

export default InstructorRoute;
