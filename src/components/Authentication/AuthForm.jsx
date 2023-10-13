import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const AuthForm = ({ isRegistration }) => {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const apiUrl = isRegistration ? 'https://api.dvt.theyolostudio.com/auth/registration' : 'https://api.dvt.theyolostudio.com/auth/login';

      const response = await axios.post(apiUrl, { email, password });

      // Assuming the server returns a JWT token on successful login or registration
      const authToken = response.data.token;
      console.log(response.data);

        // const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNDAyMjAwMDIwMTkiLCJuYW1lIjoiWmFoaWQgSGFzYW4iLCJpYXQiOjE1MTYyMzkwMjJ9.bFEoNQnBleAujzf5AiG7jLdx1HMN2RVZzpFM_LvM0bQ"
      // Store the token in local storage for authentication
      localStorage.setItem('authToken', authToken);

      // Redirect to the appropriate page after login or registration
      navigate('https://api.dvt.theyolostudio.com/employee/management');
    } catch (error) {
      console.error('Authentication error:', error.message);
      // Handle authentication errors here
    }
  };

    return (
        <div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-sky-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isRegistration ? 'Sign Up' : 'Sign In'}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          {
            !isRegistration 
            ? <>Do not have an account?{' '}
            <Link to='/register' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register
            </Link></>
            : <>Already have an account?{' '}
            <Link to='/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
            </Link></>
          }
            
          </p>
        </div>
        </div>
    );
};

export default AuthForm;