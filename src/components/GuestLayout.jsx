import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function GuestLayout() {
	const { token } = useAuth();

	// if user is logged in, redirect to profile page
	if (token) {
		return <Navigate to="/profile" />;
	}
	return (
		<>
			<Outlet />
		</>
	);
}