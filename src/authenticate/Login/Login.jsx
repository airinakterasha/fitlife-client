import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2';
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Login = () => {
  const {login, loginByGoogle} = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic()

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
    .then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 1500
      });
      navigate('/')
    })
    .catch(error => {
      console.log(error)
      toast(`Sorry! email and password did not match`)
    })
  }

  // logged in by google
  const handleGoogleLogin = () => {
    loginByGoogle()
    .then(result => {
      console.log(result.user);
      const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
          photo: result.user?.photoURL,
          createAt: result.user?.metadata?.creationTime,
          role: 'member',
          status:'defaultUser',
      }
      axiosPublic.post('/users', userInfo)
      .then(res => {
          console.log(res.data);
          navigate('/');
      })
    })
    .catch(error => {
        console.log(error)
    })
  }

  return (
    <div>
      <div className="">
        <div className="md:w-1/2 mx-auto">
          {/*  */}
            <div className="w-full  p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
              <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
              
              <form onSubmit={handleLogin} className="space-y-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm">Email address</label>
                    <input type="email" name="email" id="email" placeholder="email address" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label htmlFor="password" className="text-sm">Password</label>
                      <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                    </div>
                    <input type="password" name="password" id="password" placeholder="******" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                  </div>
                </div>

              <div className="text-center">
                <input 
                  type="submit" 
                  value="Sign in" 
                  className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                />
              </div>
                
                
              </form>
              <div className="flex items-center w-full my-4">
                <hr  className="w-full dark:text-gray-600" />
                <p className="px-3 dark:text-gray-600">OR</p>
                <hr  className="w-full dark:text-gray-600" />
              </div>
              <div className="my-6 space-y-4">
                <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                  <p>Login with Google</p>
                </button>
              </div>
              <p className="text-sm text-center dark:text-gray-600">Dont have account? Please 
                <Link to='/signup' className="text-green-500"> Sign up here</Link>
              </p>
            </div>
          {/*  */}
        </div>
      </div>
    </div>
  )
}

export default Login