import { Link } from "react-router-dom";


const Signup = () => {
    return (
        <div className="pt-12 bg-slate-600 min-h-screen">
      <div className="hero pt-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="text-center lg:text-right  text-white w-full flex flex-col justify-center">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6 hidden lg:block">
              Already have an account?{" "}
              <span className="underline">
                <Link to="/login">Login</Link>
              </span>{" "}
              here.
            </p>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            {/* <form onSubmit={handleSubmit(onSubmit)} className="card-body"> */}
            <form  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                //   {...register("name", { required: true })}
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {/* {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )} */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                //   {...register("photoURL", { required: true })}
                  name="photoURL"
                  placeholder="photoURL"
                  className="input input-bordered"
                />
                {/* {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )} */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                //   {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {/* {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )} */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                //   {...register("password", {
                //     required: true,
                //     minLength: 6,
                //     maxLength: 20,
                //     pattern: /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
                //   })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {/* {errors.password?.type === "required" && (
                  <span className="text-red-600">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be at least 6 characters with one uppercase,
                    one lowercase and one number
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password must be less than 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must have one uppercase, one lowercase and one
                    number
                  </span>
                )} */}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-neutral hover:bg-white hover:text-black"
                  value="Sign Up"
                />
              </div>
            </form>
          </div>

          <p className=" lg:hidden">
            Already have an account?{" "}
            <span className="underline">
              <Link to="/login">Login</Link>
            </span>{" "}
            here.
          </p>
        </div>
      </div>
    </div>
    );
};

export default Signup;