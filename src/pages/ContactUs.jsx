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
    <div className="items-center justify-center py-8 mx-auto md:h-screen lg:py-0">
      <div className="text-5xl font-bold text-blue-500">
			  Message Us
		  </div>
		  <hr className="bg-slate-400 h-1 w-full my-4" />
      <div className="space-y-4 md:space-y-6">
        <form
          action="#"
          method="post"
          onSubmit={handleSubmit}
        >
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
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Message Us
            </label>
              <textarea id="about" name="message" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>

          <button
            type="submit"
            className="w-55 mt-5 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Submit
          </button>	
        </form>
      </div>
    </div>
  )
}
