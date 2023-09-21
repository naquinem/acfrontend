import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from '../axios';
import { useAuth } from '../contexts/AuthContext';
import Footer from '../pages/Footer';
import Header from '../pages/Header';

export default function DefaultLayout() {
	const { token , getToken } = useAuth();
	
	// check if user is logged in or not from server
	useEffect(() => {
		setTimeout((async () => {
			try {
				const resp = await axios.get('/token');
				if (resp.status === 200) {
					getToken(resp.data.token);
				}
			} catch (error) {
				if (error.response.status === 401) {
					localStorage.removeItem('token');
					window.location.href = '/';
				}
			}
		}), 5000);
	}, []);


	// if user is not logged in, redirect to login page
	if (!token) {
		return <Navigate to="/" />;
	}

	// logout user
	
	return (
		<>
			<div>
				<header>
					<Header />
				</header>
				<main className='container py-5'>
					<Outlet />
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</>
	);
}