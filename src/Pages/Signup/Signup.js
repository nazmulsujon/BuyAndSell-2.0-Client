import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const { googleSignIn, createUser, updateUserProfile } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState(null);
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignUp = (data, e) => {
    console.log(data.name);
    e.target.reset();
    setSignUpError("");
    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast.success("User created successfully.");
        const userInfo = {
          displayName: data.name,
        };
        updateUserProfile(userInfo)
          .then(() => {
            console.log("update user successfully");
            saveUserToDb(data.name, data.email, data.role);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        // console.log(err);
        setSignUpError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        // console.log(user);
        saveUserToDb(user?.displayName, user?.email, "buyer");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const saveUserToDb = (name, email, role) => {
    const user = { name, email, role };
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreatedUserEmail(email);
      });
  };

  return (
    <section className="h-[700px] flex justify-center items-center">
      <div className="w-96 shadow-lg p-5 rounded">
        <h2 className="text-2xl text-center font-bold text-secondary mb-3">Sign Up</h2>

        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs mx-auto">
            <label className="label">
              <span className="label-text font-mono">Account type Buyer/Seller</span>
            </label>
            <select type="text" {...register("role")} className="select select-bordered rounded">
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>

            <label className="label">
              <span className="label-text font-mono">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered rounded"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <label role="alert" className=" text-red-600 font-mono">
                {errors.name?.message}
              </label>
            )}
          </div>

          <div className="form-control max-w-xs mx-auto">
            <label className="label">
              <span className="label-text font-mono">Email</span>
            </label>
            <input
              type="email"
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
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message: "Password must have uppercase, number and special characters",
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
              <Link className="label-text font-mono">Forgot Password?</Link>
            </label>
          </div>

          <div className="form-control w-full max-w-xs mx-auto">
            <input className="btn btn-secondary rounded" type="submit" value="Sign Up" />
          </div>
          <div className="max-w-xs mx-auto">
            {signUpError && <p className="text-red-600 font-mono">{signUpError}</p>}
          </div>
        </form>
        <p className="max-w-xs my-2 mx-auto">
          Already have an account ? Please
          <Link to={"/login"} className="text-info font-semibold ml-2">
            Login
          </Link>{" "}
        </p>
        <div className="divider max-w-xs mx-auto">OR</div>
        <div className="max-w-xs my-2 mx-auto">
          <button className="btn btn-secondary btn-outline w-full rounded" onClick={handleGoogleSignIn}>
            CONTINUE WITH GOOGLE <FaGoogle className="ml-3 font-bold" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
