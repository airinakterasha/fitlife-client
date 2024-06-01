import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  

const SignUp = () => {
  const {createUser, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();
  const {register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
    .then(result => {
      console.log(result.user);
      //const loggedUser = result.user
      // user create to database
      const createAt = result.user?.metadata?.creationTime;
      const name = data.name;
      const email = data.email;
      const photo = data.photo;
      const user = {name, email, photo, createAt}
      updateUserProfile(data.name, data.photo)
      .then(()=>{
          fetch('http://localhost:5555/user', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              reset();
              if (data.insertedId){
                  Swal.fire({
                      title: 'Success!',
                      text: 'You have been created your account',
                      icon: 'success',
                      confirmButtonText: 'Great',
                  })
                  navigate('/')
              }
          })
      })
      .catch(error => console.log(error))
    })
    .catch(error => {
      toast(`Sorry! ${error}`)
    })

  }
  return (
    <>
      <div className="md:w-1/2 mx-auto">
        <div className="mt-20 text-center">
          <h1 className="">Please Signup</h1>
        </div>
        <div className="">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm">Name</label>
                    <input type="text" {...register("name" , { required: true })} id="name" placeholder="Your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    {errors.name && <span className="text-red-600">Name is required</span>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm">Email address</label>
                    <input type="email" {...register("email" , { required: true })} id="email" placeholder="Your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    {errors.email && <span className="text-red-600">Email is required</span>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm">Image</label>
                    <input type="text" {...register("photo" , { required: true })} id="photo" placeholder="image" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    {errors.photo && <span className="text-red-600">Email is required</span>}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label htmlFor="password" className="text-sm">Password</label>
                      <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                    </div>
                    <input type="password" {...register("password" , { required: true })} id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    {errors.password && <span className="text-red-600">Password is required</span>}
                  </div>
                </div>
                <input type="submit" value="Sign up" className=" btn w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50" />
              </form>
        </div>
          <p className="text-sm text-center dark:text-gray-600">Already have an account? Please 
            <Link to='/login' rel="noopener noreferrer" className="text-green-500"> Login here</Link>
          </p>
      </div>
    </>
  )
}

export default SignUp