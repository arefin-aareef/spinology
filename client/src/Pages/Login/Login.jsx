/* eslint-disable react/no-unescaped-entities */

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'



const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {signIn} = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()
 
  const from = location.state?.from?.pathname || "/"

  const onSubmit = (data) => {
    signIn(data.email, data.password)
    .then(result => {
      const user = result.user
      console.log(user);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login Successful',
        showConfirmButton: false,
        timer: 1500
      })
      navigate(from, { replace: true })
    })
  }

    return (
        <div className="pt-12 lg:pt-24 bg-gradient-to-r from-[#64CCC5] to-[#04364A] min-h-screen">
      <div className="hero pt-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="text-center lg:text-right w-full flex flex-col justify-center text-white">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 hidden lg:block">
              Didn't register yet?{" "}
              <span className="underline">
                <Link to="/signup">Create account</Link>
              </span>{" "}
              here.
            </p>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">Password is required</span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-neutral hover:bg-white hover:text-black"
                />
              </div>
            </form>
          </div>

          <p className="text-white lg:hidden">
            Didn't register yet?{" "}
            <span className="underline">
              <Link to="/signup">Create account</Link>
            </span>{" "}
            here.
          </p>
        </div>
      </div>
    </div>
    );
};

export default Login;