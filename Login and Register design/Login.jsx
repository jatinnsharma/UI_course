import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="bg-gray-400 flex items-center justify-center h-screen flex-col">
    <div className="text-5xl mb-12">Login</div>
      <form >
    <div className=" bg-gray-200 p-12 w-96 flex items-center justify-center h-96 flex-col">
        <div className="m-4">
          <input
            className="m-2 p-2 w-80"
            type="email"
            placeholder="enter your email"
            name="email"
           
          />
          <label className="text-xl ml-2 " htmlFor="email">
            Your email
          </label>
        </div>
        <div className="m-4">
          <input
            className="m-2 p-2 w-80"
            type="password"
            placeholder="Password"
            name="password"
           
          />
          <label className="text-xl ml-2 " htmlFor="password">
            Password
          </label>
        </div>
        <button className=" p-2 bg-blue-500 font-bold rounded-xl mb-4 w-80 ">
          Login
        </button>
        <div>
          Dont have an account?
          <Link className="underline ml-1" to="/register">
            Register Here
          </Link>
        </div>
    </div>
      </form>
  </div>
  )
}

export default Login