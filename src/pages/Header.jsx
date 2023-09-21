
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from '../axios';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
    const { user, setUser } = useAuth();
    useEffect(() => {
		(async () => {
			try {
				const resp = await axios.get('/user');
				if (resp.status === 200) {
					setUser(resp.data.data);
				}
			} catch (error) {
				if (error.response.status === 401) {
					localStorage.removeItem('user');
					
				}
			}
		})();
	}, []);

    const handleLogout = async () => {
		try {
			const resp = await axios.post('/logout');
			if (resp.status === 200) {
				localStorage.removeItem('token');
				window.location.href = '/';
			}
		} catch (error) {
			console.log(error);
		}
	};
  return (
    <div>
        <nav className=" border-gray-200 py-2.5 dark:bg-gray-900">
			<div className="bg-gray-200 flex flex-wrap items-center justify-between ">
				<p className="flex items-center">
					<span className="container self-center text-xl font-bold whitespace-nowrap dark:text-white">
						{user.name}
					</span>
				</p>
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded="false">
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-6 h-6"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clipRule="evenodd"></path>
					</svg>
				</button>
				<div className="hidden w-full md:block md:w-auto  mr-10" id="navbar-default">
					<ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<NavLink
								to="/profile"
								className={({ isActive }) =>
									isActive
										? 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
										: 'block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white'
								}>
								Profile
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contact"
								className={({ isActive }) =>
									isActive
										? 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
										: 'block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white'
								}>
								Contact Us
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								className={({ isActive }) =>
									isActive
										? 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
										: 'block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white'
								}>
								About
							</NavLink>
						</li>

						<li>
							<a
								onClick={handleLogout}
								href="#"
								className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
								Logout
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>    
    </div>
  )
}
