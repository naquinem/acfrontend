import { useState } from 'react';
import axios from '../axios';
import { useAuth } from '../contexts/AuthContext';

export default function ContactUs() {

    const {csrfToken} = useAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {firstname, lastname, email, message} = e.target.elements;
        const body = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            message: message.value,
        }
        csrfToken();
        try {
            const resp = await axios.post('/schedule', body);
            if (resp.status === 200) {
                console.log(resp.data);
                return <Navigate to="/profile" />
            }
        }
        catch (error) {
            if (error.response.status === 401);
           console.log(error.response.data.message);
        }
    }
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h1 className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
		    Message Us
		</h1>
        <form
			className="space-y-4 md:space-y-6"
			action="#"
			method="post"
		    onSubmit={handleSubmit}>
            <div>
				<label
                    htmlFor="firstname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    First Name
				</label>
				<input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
				/>
			</div>
            <div>
				<label
                    htmlFor="lastname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Last Name
				</label>
				<input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
				/>
			</div>
			<div>
				<label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
				</label>
				<input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
				/>
			</div>
			<div>
				<label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Message Us
				</label>
				<input
                    type="text"
                    name="message"
                    id="message"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
				/>
			</div>

			<button
				type="submit"
				className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
				Submit
			</button>
							
		</form>
    </div>
  )
}
