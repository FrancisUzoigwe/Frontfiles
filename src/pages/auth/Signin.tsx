import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { user } from "../../global/GlobalState";
import { SigninAPI } from "../../apis/UserAuthAPI";
import { useDispatch } from "react-redux";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirm: yup.string().oneOf([yup.ref("password")], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data: any) => {
    const { email, password } = data;
    SigninAPI({ email, password }).then((res: any) => {
      dispatch(user(res));
      navigate("/access/home");
    });
  });

  return (
    <div className="h-[100vh] bg-blue-50 flex justify-center items-center">
      <div className="h-[300px] w-[400px] bg-white flex rounded-[30px] shadow-md flex-col  items-center">
        <div className="h-[550px] w-[400px] justify-center items-center flex flex-col ">
          <div className="h-[550px] w-[400px] p-8 flex flex-col">
            <h1 className="font-semibold text-3xl mt-[-25px] ml-[50px]">
              WELCOME BACK
            </h1>
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Email</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded shadow-md"
                  placeholder="Enter your Email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-rose-500 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Password</label>
                <input
                  type="password"
                  className="w-full border p-2 rounded shadow-md"
                  placeholder="Enter your Password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-rose-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="w-full flex justify-center items-center flex-col">
                <div className="w-[70%] h-[auto] flex flex-col items-center justify-center">
                  <button
                    className="py-2 px-8 bg-blue-950 text-white rounded-md hover:scale-[1.02] hover:cursor-pointer transition-all "
                    type="submit"
                  >
                    Signin
                  </button>
                  <div className="text-[14px] flex mt-[3px]">
                    Hava an account ?{" "}
                    <Link
                      to="/signup"
                      className="text-red-400  ml-[7px] underline"
                    >
                      Signup
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
