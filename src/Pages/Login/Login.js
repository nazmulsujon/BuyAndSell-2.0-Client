import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleLogin = (data, e) => {
    // console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast.success("Login successfully.");
        navigate(from, { replace: true });
        e.target.reset();
      })
      .catch((err) => {
        console.error(err);
        setLoginError(err.message);
      });
  };

  // handle googole signIn
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="h-[600px] flex justify-center items-center">
      <div className="w-96 shadow-lg p-5 rounded">
        <h2 className="text-2xl text-center text-secondary font-bold ">Login</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs mx-auto">
            <label className="label">
              <span className="label-text font-mono">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered rounded"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <label role="alert" className=" text-red-600 font-mono">
                {errors.email?.message}
              </label>
            )}
          </div>

          <div className="form-control w-full max-w-xs mx-auto">
            <label className="label">
              <span className="label-text font-mono">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 characters",
                },
              })}
              className="input input-bordered rounded"
            />
            {errors.password && (
              <label role="alert" className="text-red-600 font-mono">
                {errors.password?.message}
              </label>
            )}
            <label className="label">
              <span className="label-text font-mono">Forgot Password?</span>
            </label>
          </div>

          <div className="form-control max-w-xs mx-auto">
            <input className="btn  btn-secondary rounded" type="submit" value="login" />
          </div>
          <div className="max-w-xs mx-auto">{loginError && <p className="text-red-600 font-mono">{loginError}</p>}</div>
        </form>
        <p className="max-w-xs my-2 mx-auto">
          New to Doctors Portal ? Create<Link className="ml-2 text-info font-semibold">new account</Link>{" "}
        </p>
        <div className="divider max-w-xs mx-auto">OR</div>
        <div className="max-w-xs my-2 mx-auto">
          <button onClick={handleGoogleSignIn} className="btn btn-secondary btn-outline rounded w-full">
            CONTINUE WITH GOOGLE <FaGoogle className="ml-3 font-bold" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
