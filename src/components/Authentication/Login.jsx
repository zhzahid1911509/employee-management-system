
import AuthForm from "./AuthForm";


const Login = () => {
    return (
        
           <div className="">
            <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 min-h-screen">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="text-center">
    <a className="normal-case text-2xl border-2 border-dashed border-blue-300 rounded-full p-2 font-bold">EAMS</a>
  </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <AuthForm></AuthForm>
      </div>
      
        </div>
        
    );
};

export default Login;