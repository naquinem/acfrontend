import { createContext, useContext, useState } from 'react';
import axios from '../axios';

const AuthContent = createContext({
	token: null,
	user: null,
	getToken: () => {},
	setUser: () => {},
	csrfToken: () => {},
});

export const AuthProvider = ({ children }) => {

	const [token, setToken] = useState(
		JSON.parse(localStorage.getItem('token')) || null
	);
	const [user, _setUser] = useState(
		JSON.parse(localStorage.getItem('user')) || null
	);

	const getToken = (token) => {
		if (token) {
			localStorage.setItem('token', JSON.stringify(token));
		} else {
			localStorage.removeItem('token');
		}
		setToken(token);
	}

	// set user to local storage
	const setUser = (user) => {
		if (user) {
			localStorage.setItem('user', JSON.stringify(user));
		} else {
			localStorage.removeItem('user');
		}
		_setUser(user);
	};

	// csrf token generation for guest methods
	const csrfToken = async () => {
		await axios.get('http://localhost:8000/sanctum/csrf-cookie');
		return true;
	};

	return (
		<AuthContent.Provider value={{ user, setUser, csrfToken, token, getToken }}>
			{children}
		</AuthContent.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContent);
};