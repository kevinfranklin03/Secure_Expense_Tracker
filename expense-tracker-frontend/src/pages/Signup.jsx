function Signup() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
          <form className="flex flex-col gap-4">
            <input className="p-2 border rounded" type="text" placeholder="Username" />
            <input className="p-2 border rounded" type="email" placeholder="Email" />
            <input className="p-2 border rounded" type="password" placeholder="Password" />
            <button className="bg-green-500 text-white py-2 rounded hover:bg-green-600">Create Account</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Signup;
  