import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type, dont } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-slate-600">{title}</h1>
        <p className='font-medium text-slate-500'> Welcome, please your details</p>
        {children}
        <p className='text-sm text-center mt-5'>
          {type === "Login"
            ? "Have a account? "
            : "Don't Have a account? "}
          {type === "Register" && (
            <Link to="/register" className='font-bold text-blue-600 '> {type}</Link>)}
          {type === "Login" && (
            <Link to="/" className='font-bold text-blue-600 '> {type}</Link>)}
        </p>
      </div>
    </div>
  )
}

export default AuthLayouts